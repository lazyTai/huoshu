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
 public function read($article_id,$page=1){
    $comments= Db::view('User',['id'=>'user_id','name'=>'user_name'])
    ->view('Profile',['image_url'=>"user_image_url"],'Profile.user_id=User.id')
    ->view('Comment','id,article_id,comment,update_time,like_num','Comment.article_id=User.id')
    ->where('article_id', '=', $article_id)
    ->page($page,5)
    ->order(['like_num'=>'desc', 'update_time'=>'desc'])
    ->select();

    $count=Db::view('User',['id'=>'user_id','name'=>'user_name'])
    ->view('Profile',['image_url'=>"user_image_url"],'Profile.user_id=User.id')
    ->view('Comment','id,article_id,comment,update_time,like_num','Comment.article_id=User.id')
    ->where('article_id', '=', $article_id)->count();

    $json['data']= $comments;
    $json['count']= ceil($count/5);
    return json($json);
 }
}