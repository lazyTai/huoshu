<?php
namespace app\index\controller;

use think\Controller;
use think\Request;
use think\Db;
use app\index\util\Util;
use app\index\model\Profile as ProfileDao;
use app\index\model\User as UserDao;
class User extends Controller{
    public function setting(){
        $ext_user=json_decode(input('session.ext_user'),true);
        if(isset($ext_user)){
            $result1=Db::query('SELECT COUNT(*) AS  like_num FROM think_article_like la 
            WHERE la.user_id=1');
            $article_like_num=$result1[0]['like_num'];
    
    
            $result2=Db::query('SELECT COUNT(*) AS  like_num FROM think_like_album la 
            WHERE la.user_id=1');
            $ablum_like_num=$result2[0]['like_num'];

            $result3=Db::query('SELECT COUNT(*) AS  my_article_num FROM think_article la 
            WHERE la.user_id=1');
            $my_article_num=$result3[0]['my_article_num'];

            $ext_user['article_like_num']=    $article_like_num;
            $ext_user['ablum_like_num']=    $ablum_like_num;
            $ext_user['my_article_num']=    $my_article_num;
            $this->assign('user',json_encode($ext_user));
        }else{
            $this->assign('user',json_encode([
                'name'=>'没有登录',
                'image_url'=>'/huoshu/public/uploads/20180307/111.png',
                'status'=>0
            ]));
        }
        return $this->fetch();
    }

    public function edit_user_name($name){
            $ext_user =json_decode(input('session.ext_user'),tidy_get_error_buffer);
            if(isset( $ext_user)){
               $user= new UserDao;
               $infor=$user->save(
                   [ 'name'=>$name ]
                   ,['id' => $ext_user['id']]);
               return json([
                   'success'=>true,
                   'message'=>$infor
               ]);
            }else{
                return $this->error('请登陆先','index/index');
        }
    }

    public function edit_user(){
        $ext_user =json_decode(input('session.ext_user'),true);
        if(isset( $ext_user)){
            $this->assign('user',json_encode($ext_user));
            return  $this->fetch();
        }else{
            return $this->error('请登陆先','index/index');
        }
    }

    public function upload_head(){
        $user=json_decode( input('session.ext_user'),true);
        $files=request()->file('files');
        $infor=Util::upload_one($files);
        if($infor['success']){
           $profile= ProfileDao::get($user['id']);
           $info=$profile->save(['image_url'=>$infor['message']]);
           $infor['message']="操作成功";
           return  json($infor);
        }else{
            return json($infor);
        }
    }

    public function unlogin(){
       return  session('ext_user',null);
    }
}