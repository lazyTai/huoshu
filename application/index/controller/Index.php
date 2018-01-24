<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Session;
use app\index\model\Article;
use app\index\model\Type;

class Index extends Controller
{
    public function index()
    {
        $currentpage = 0;
        $params = input('post.');
        if (!isset($params)) {
            $currentpage = $params['currentPage'] - 1;
        }

        if (!isset($currentpage)) {
            $currentpage = 0;
        }
        $type = Type::all();
        $result = Article::page([], $currentpage)['data'];
        $page = Article::page([], $currentpage)['page'];
        $this->assign('result', json_encode($result));
        $this->assign('type', json_encode($type));
        $this->assign('page', $page);
        $this->assign('user', json_encode(input('session.ext_user')));
        return $this->fetch();
    }
    public function getList()
    {

        $params = input('post.');
        $currentpage = $params['currentPage'] - 1;;
        $result = Article::page([], $currentpage)['data'];
        $page = Article::page([], $currentpage)['page'];
        return json([
            "result" => $result,
            "page" => $page
        ]);
    }
    public function hello($name = "liumingtai")
    {
        // return "hello".$name;
        // $this->assign('name', $name);
        $result = Db::name('data')->find();
        return $this->fetch('index', [
            'result' => $result
        ]);
    }


}
