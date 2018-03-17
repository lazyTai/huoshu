<?php

namespace app\index\controller;

use think\Controller;
use app\index\model\Article as ArticleDao;
use app\index\model\Comment;
use think\Db;
use app\index\util\Util;
class Article extends Controller
{
    public function index()
    {
        return "asd";
    }


    public function save(){
        $params=input('post.');
        $article['id']=$params['id'];
        $article['title']=$params['title'];
        $article['content']=$params['content'];
        $article['image_src']=$params['image_src'];
        $article['type_id']=$params['type_id'];
        $article['num_artitcle']=$params['num_artitcle'];
        $article['num_like']=$params['num_like'];
        $article['num_content']=$params['num_content'];
        $infor=ArticleDao::update($article);
        return  json($infor);
    }
    public function edit($id){
        $article=ArticleDao::get($id);
        $this->assign("article", $article);
        if(input("session.ext_user")){
            $this->assign("user", json_encode(input("session.ext_user")));
        }else{
            $this->error("没有登陆","/huoshu/public/index");
        }
       
        return $this->fetch();
    }
   
    public function detail($id){
        $article=ArticleDao::get($id);
        /* 获取喜欢num */
        $like_num=Db::table('think_article_like')
            ->where(['article_id'=>$id,'status'=>'1'])->count();
        $article['like_num']=$like_num;
        //获取评论数
        $num_artitcle=Db::table('think_comment')
            ->where(['article_id'=>$id])->count();
        $article['num_artitcle']=$num_artitcle;

        $this->assign("article", $article);
        if(input("session.ext_user")){
            $this->assign("user", json_encode(input("session.ext_user")));
        }else{
            $this->assign("user", json_encode(
                [
                    "status"=>'0',
                    "name"=>"游客","image_url"=>"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520488358095&di=c43dcafc8db461399179de61bf883f24&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F20171011%2F0AiL-fymviyp0227644.jpg"]
            ));
            // $this->error("没有登陆","/huoshu/public/index");
        }
       
        return $this->fetch();
        // return json($article);
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


    public function add_comment(){
        $data=input('post.');
        $comment['article_id']=json_decode( $data['article'])->id;
        $comment['user_id']=json_decode($data['user'])->id;
        $comment['comment']=$data['comment'];
        $comment['like_num']=0;
        $infor=Comment::create( $comment);
        return json($infor);
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

    public function add(){
        $ext_user=input('session.ext_user');
        if($ext_user==''){
            return $this->error("请登录",'index/index');
        }else{
            $this->assign('user',$ext_user);
            return $this->fetch();
        }
      
    }

    public function upload_image(){
       $files=  request()->file('files');
       $infor= Util::upload_one( $files);
       return json($infor);
    }
}