<?php
namespace app\index\controller;

use think\Controller;
use think\Request;

class User extends Controller{
    public function setting(){
        $ext_user=input('session.ext_user');
        if(isset($ext_user)){
            $this->assign('user',json_encode($ext_user));
        }else{
            $this->assign('user',json_encode([
                'name'=>'没有登录',
                'image_url'=>'/huoshu/public/uploads/20180307/111.png'
            ]));
        }
        return $this->fetch();
    }
}