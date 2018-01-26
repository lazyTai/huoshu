<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\User;

class MySelf extends Controller
{
    public function index()
    {
        $currentUser = input('session.ext_user');
        if (empty($currentUser)) {
            $currentUser = [
                'name' => "无登录",
                "image_src" => "https://www.baidu.com/img/bd_logo1.png"
            ];
        }

        $user = User::user_profile($currentUser['id']);
        $this->assign('user', json_encode($user));
        return $this->fetch();
    }
}