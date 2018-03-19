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
        $captcha = input('post.captcha');
        // dump(captcha_check($data));
        if (!captcha_check($captcha)) {
         //验证失败
            return json(
                ['success'=>false,'message'=>"验证码错误"]
            );
        };

        $exitUser = User::login($name, $password);

        if ($exitUser) {
            $data=$exitUser->getData();
            if(!isset($data['image_url'])){
                $data['image_url']="/huoshu/public/uploads/404.jpg";
            }
            Session::set('ext_user', json_encode([
                "name"=>$data['name'],
                "id"=>$data['id'],
                "image_url"=>$data['image_url'],
                ]));
            return json([
                "success" => true,
                "message" => "登录成功"
            ]);
        } else {
            Session::delete('ext_user');
            return json([
                "success" => false,
                "message" => "密码或者账号錯誤"
            ]);
        }


    }
}