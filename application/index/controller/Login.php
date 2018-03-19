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
    function unlogin()
    {
        Session::delete('ext_user');
        return $this->redirect('Index/index');
    }
    function logining()
    {
        $name = input('post.name');
        $password = input('post.password');
        $data = input('post.captcha');
        // dump(captcha_check($data));
        // if (!captcha_check($data)) {
        //  //验证失败
        //     return $this->error("验证码错误", "Login/login");
        // };

        $exitUser = User::login($name, $password);

        if ($exitUser) {
            if(!property_exists($exitUser,'image_url')){
                $exitUser['image_url']="/huoshu/public/uploads/404.jpg";
            }
            Session::set('ext_user', json_encode([
                "name"=>$exitUser['name'],
                "id"=>$exitUser['id'],
                "image_url"=>$exitUser['image_url'],
                ]));
            return json([
                "success" => true,
                "result" => "登录成功"
            ]);
        } else {
            Session::delete('ext_user');
            return json([
                "success" => false,
                "result" => "密码或者账号錯誤"
            ]);
        }


    }
}