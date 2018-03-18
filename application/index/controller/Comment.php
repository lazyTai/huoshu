<?php

namespace app\index\controller;

use think\Controller;
use think\Db;
use app\index\model\Comment as CommentDao;

class Comment extends Controller{

 public function index(){
    // CommentDao::get([""])
     return json("index ");
 }
 public function read($article_id,$page=1,$order="like_num",$asc='desc'){
    $comments= Db::view('User',['id'=>'user_id','name'=>'user_name'])
    ->view('Profile',['image_url'=>"user_image_url"],'Profile.user_id=User.id')
    ->view('Comment','id,article_id,comment,update_time,like_num','Comment.article_id=User.id')
    ->where('article_id', '=', $article_id)
    ->page($page,5)
    ->order([$order=>$asc])
    ->select();

    $count=Db::view('User',['id'=>'user_id','name'=>'user_name'])
    ->view('Profile',['image_url'=>"user_image_url"],'Profile.user_id=User.id')
    ->view('Comment','id,article_id,comment,update_time,like_num','Comment.article_id=User.id')
    ->where('article_id', '=', $article_id)->count();

    $json['data']= $comments;
    $json['count']= ceil($count/5);
    return json($json);
 }

 public function like_down(){
    $params=input('post.');
    $returnJson=['success'=>false,'message'=>''];
    Db::startTrans();
    try{
        if($this->check_like_down()['success']){
            $comment=CommentDao::get(['id'=>$params['comment_id']]);
            $comment->like_num= $comment->like_num-1;
            $comment->save();
            $returnJson['message']='点赞成功';
            $returnJson['success']=true;
        }else{
            $returnJson['message']="已经存在，不能like";
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
 public function like(){
    $params=input('post.');
    $returnJson=['success'=>false,'message'=>''];
    Db::startTrans();
    try{
        if($this->check_like()['success']){
            $comment=CommentDao::get(['id'=>$params['comment_id']]);
            $comment->like_num= $comment->like_num+1;
            $comment->save();
            $returnJson['message']='点赞成功';
            $returnJson['success']=true;
        }else{
            $returnJson['message']="已经存在，不能like";
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

    public function check_like_down(){
        $returnJson=['success'=>false,'message'=>''];
        $params=input('post.');
        /* chenck like */
        $check_status=Db::table('think_check_comment_like')->where([
        'user_id'=>json_decode($params['user'])->id,
        'comment_id'=>$params['comment_id'],
        "status"=>-1
        ])->select();

        if(count($check_status)>0){
            // 已经存在，不能like
            $returnJson['message']="已经存在，不能like";
        }else{
                $data= ['user_id'=>json_decode($params['user'])->id,
                'comment_id'=>$params['comment_id'],
                "status"=>-1];
                $update_info=Db::table('think_check_comment_like')
                ->where([
                    'user_id'=>json_decode($params['user'])->id,
                    'comment_id'=>$params['comment_id']
                ])
                ->update(["status"=>-1]);
                if($update_info==0){
                    $inert_info=Db::table('think_check_comment_like')
                    ->insert($data);
                }
                // 提交事务
                $returnJson['success']=true;
                $returnJson['message']="添加成功";
     }
        return $returnJson;
    }
  /* 检查评论是否点击评论 */
  public function check_like(){
        $returnJson=['success'=>false,'message'=>''];
        $params=input('post.');
        /* chenck like */
        $check_status=Db::table('think_check_comment_like')->where([
        'user_id'=>json_decode($params['user'])->id,
        'comment_id'=>$params['comment_id'],
        "status"=>1
        ])->select();

        if(count($check_status)>0){
            // 已经存在，不能like
            $returnJson['message']="已经存在，不能like";
        }else{
                $data= ['user_id'=>json_decode($params['user'])->id,
                'comment_id'=>$params['comment_id'],
                "status"=>1];
                $update_info=Db::table('think_check_comment_like')
                ->where([
                    'user_id'=>json_decode($params['user'])->id,
                    'comment_id'=>$params['comment_id']
                ])
                ->update(["status"=>1]);
                if($update_info==0){
                    $inert_info=Db::table('think_check_comment_like')
                    ->insert($data);
                }
                // 提交事务
                $returnJson['success']=true;
                $returnJson['message']="添加成功";
     }
        return $returnJson;
  }

  function add_comment(){
      $params=input('post.');
      $articel=json_decode($params['article'],true);
      $user=json_decode($params['user'],true);
      $comment=$params['comment'];
      $infor=Db::table('think_comment')->insert([
          'article_id'=>$articel['id'],
          'user_id'=>$user['id'],
          'comment'=>$comment,
          'like_num'=>0
      ]);
      if( $infor>0){
          return json(['message'=> $infor,'success'=>true]);
      }
      return json(['message'=> $infor,'success'=>false]);
  }
}