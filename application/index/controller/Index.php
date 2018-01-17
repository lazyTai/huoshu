<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Session;

class Index extends Controller
{
    public function index()
    {
        return view();
    }
    public function hello($name = "liumingtai")
    {
        // return "hello".$name;
        // $this->assign('name', $name);
        $result = Db::name('data')->find();

        $this->assign('result', $result);
        return $this->fetch();
    }
}
