<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\Student;

class Data1 extends Controller
{

    function index()
    {
        return view();
    }

    function lists()
    {
        $params = input('post.');
        $list = Student::lists([], $params['page']);
        return json($list);
    }

    function update()
    {
        $params = input('post.');
        $data['id'] = $params['id'];
        $data['name'] = $params['name'];
        $result = Student::updates($data, $params['id']);
        return json($result);
    }
    function add()
    {
        $params = input('post.');
        $data['name'] = $params['name'];
        $result = Student::insert1($data);
        return json($result);
    }
}