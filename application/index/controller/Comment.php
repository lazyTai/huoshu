<?php

namespace app\index\controller;

use app\index\model\Comment as CommentDao;
use think\Controller;
use think\Db;

class Comment extends Controller
{
    public function index()
    {
        // CommentDao::get([""])
        return json("index ");
    }
    public function read()
    {
        $params = input('post.');
        $article_id = $params['article_id'];
        $page = $params['page'];
        $order = $params['order'];

        $comments = CommentDao::read_comments(["article_id" => $article_id], $page);

        if ($comments) {
            $count = CommentDao::read_comments_count(["article_id" => $article_id]);
            $json['data'] = $comments;
            $json['count'] = ceil($count / 5);
            $json['success'] = true;
            return json($json);
        } else {
            return json(['success' => false]);
        }
    }

    public function like_down()
    {
        $params = input('post.');
        $returnJson = ['success' => false, 'message' => ''];
        Db::startTrans();
        try {
            if ($this->check_like_down()['success']) {
                $comment = CommentDao::get(['id' => $params['comment_id']]);
                $comment->like_num = $comment->like_num - 1;
                $comment->save();
                $returnJson['message'] = '点赞成功';
                $returnJson['success'] = true;
            } else {
                $returnJson['message'] = "已经存在，不能like";
                return json($returnJson);
            }
            // 提交事务
            Db::commit();
        } catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
        }
        return json($returnJson);
    }
    public function like()
    {
        $params = input('post.');
        $result = Db::table('think_check_comment_like')
                ->where([
                    'user_id' => $params['user_id'],
                    'comment_id' => $params['comment_id'],
                ])->find();
        if (isset($result)) {
            if($result['status']==1){
                return  json(["success" => false, "message" => "已经点赞"]);
            }
            /* 数据库里面没有，插入 */
            Db::table('think_check_comment_like')->insert([
                    'comment_id'=> $params['comment_id'],
                    'user_id' => $params['user_id'],
                    'status'=>1
                ]);
            return json(["success" => true, "message" => "点赞成功"]);
        }
    }

    public function check_like_down()
    {
        $returnJson = ['success' => false, 'message' => ''];
        $params = input('post.');
        /* chenck like */
        $check_status = Db::table('think_check_comment_like')->where([
            'user_id' => json_decode($params['user'])->id,
            'comment_id' => $params['comment_id'],
            "status" => -1,
        ])->select();

        if (count($check_status) > 0) {
            // 已经存在，不能like
            $returnJson['message'] = "已经存在，不能like";
        } else {
            $data = ['user_id' => json_decode($params['user'])->id,
                'comment_id' => $params['comment_id'],
                "status" => -1];
            $update_info = Db::table('think_check_comment_like')
                ->where([
                    'user_id' => json_decode($params['user'])->id,
                    'comment_id' => $params['comment_id'],
                ])
                ->update(["status" => -1]);
            if ($update_info == 0) {
                $inert_info = Db::table('think_check_comment_like')
                    ->insert($data);
            }
            // 提交事务
            $returnJson['success'] = true;
            $returnJson['message'] = "添加成功";
        }
        return $returnJson;
    }
    /* 检查评论是否点击评论 */
    public function check_like()
    {
        $returnJson = ['success' => false, 'message' => ''];
        $params = input('post.');
        /* chenck like */
        $check_status = Db::table('think_check_comment_like')->where([
            'user_id' => json_decode($params['user'])->id,
            'comment_id' => $params['comment_id'],
            "status" => 1,
        ])->select();

        if (count($check_status) > 0) {
            // 已经存在，不能like
            $returnJson['message'] = "已经存在，不能like";
        } else {
            $data = ['user_id' => json_decode($params['user'])->id,
                'comment_id' => $params['comment_id'],
                "status" => 1];
            $update_info = Db::table('think_check_comment_like')
                ->where([
                    'user_id' => json_decode($params['user'])->id,
                    'comment_id' => $params['comment_id'],
                ])
                ->update(["status" => 1]);
            if ($update_info == 0) {
                $inert_info = Db::table('think_check_comment_like')
                    ->insert($data);
            }
            // 提交事务
            $returnJson['success'] = true;
            $returnJson['message'] = "添加成功";
        }
        return $returnJson;
    }

    public function add_comment()
    {
        $params = input('post.');
        $articel = json_decode($params['article'], true);
        $user = json_decode($params['user'], true);
        $comment = $params['comment'];
        date_default_timezone_set("Asia/Shanghai");
        $infor = Db::table('think_comment')->insert([
            'article_id' => $articel['id'],
            'user_id' => $user['id'],
            'comment' => $comment,
            'update_time' => date("Y-m-d H:i:s"),
            'create_time' => date("Y-m-d H:i:s"),
        ]);
        if ($infor > 0) {
            return json(['message' => $infor, 'success' => true]);
        }
        return json(['message' => $infor, 'success' => false]);
    }
}
