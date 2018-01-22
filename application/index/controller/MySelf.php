<?php
namespace app\index\controller;

use think\Controller;

class MySelf extends Controller
{
    public function index()
    {
        $currentUser = input('session.currentUser');
        if (empty($currentUser)) {
            $currentUser = [
                'name' => "无登录",
                "image_src" => "https://www.baidu.com/img/bd_logo1.png"
            ];
        }
        $this->assign('currentUser', json_encode($currentUser));
        return $this->fetch();
    }
}