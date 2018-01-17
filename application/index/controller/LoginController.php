<?php
namespace app\index\controller;

use app\index\dao\UserDao;
use think\Controller;
use Captcha;
use think\Session;
use \traits\controller\Jump;

class LoginController extends Controller
{

    function index()
    {
        return view();
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

        $exitUser = UserDao::login($name, $password);

        if ($exitUser) {
            Session::set('ext_user', $exitUser);
            $this->success('登录成功', 'index/index','',0);
        } else {
            Session::clear('ext_user');
            $this->error('密码或者账号');
        }


    }
}