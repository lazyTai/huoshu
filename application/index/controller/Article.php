<?php

namespace app\index\controller;

use think\Controller;
use app\index\model\Article as ArticleDao;

class Article extends Controller
{
    public function index()
    {
        return "asd";
    }
    public function readOne()
    {
        // $article = input('post.article/a');
        $article_id = input('post.a_id');
        if (!input('session.ext_user')) {
            $this->error("请登录先", 'index/index');
        }
        $a = ArticleDao::get($article_id);
        if ($a) {
            return json($a);
        } else {
            $this->error("找不到这个文章");
        }
    }

    public function update_a()
    {
        $params_a = input('post.a/a');
        $a = ArticleDao::get($params_a['id']);
        if ($a) {
            $infor = $a->update([
                'type_id' => $params_a['type']['id'],
                'id' => $params_a['id'],
                'title' => $params_a['title'],
                'content' => $params_a['content'],
            ]);
            if ($infor) {
                return json([
                    'success' => true,
                    "data" => $infor
                ]);
            } else {
                $this->error("修改失败");
            }
        } else {
            $this->error("修改失败");
        }

    }
}