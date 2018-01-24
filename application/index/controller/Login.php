<?php
namespace app\index\controller;

use app\index\model\User;
use think\Controller;
use Captcha;
use think\Session;
use \traits\controller\Jump;

class Login extends Controller
{

    function index()
    {
        $user = input('session.ext_user');
        $this->assign('user', json_encode($user));
        return $this->fetch();
    }
    function register()
    {
        $user = input('session.ext_user');
        $this->assign('user', json_encode($user));
        return $this->fetch();
    }
    function logining()
    {
        $name = input('request.name');
        $password = input('request.password');
        $data = input('request.captcha');
        // dump(captcha_check($data));
        // if (!captcha_check($data)) {
        //  //验证失败
        //     return $this->error("验证码错误", "Login/login");
        // };

        $exitUser = User::login($name, $password);

        if (count($exitUser)) {
            Session::set('ext_user', $exitUser);
            return json([
                "success" => true,
                "result" => "登录成功"
            ]);
        } else {
            Session::clear('ext_user');
            return json([
                "success" => false,
                "result" => "密码或者账号"
            ]);
        }


    }
}