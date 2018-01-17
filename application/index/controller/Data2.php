<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\User;
use app\index\model\Profile;

class Data2 extends Controller
{

    function index()
    {
        return view();
    }

    function userList()
    {
        $params = input('post.');
        $list = User::where([])->order('id desc')->select();
        $data = [];
        foreach ($list as $key => $user) {
            $cache['address'] = $user->profile->address;
            $cache['name'] = $user['name'];
            $cache['id'] = $user['id'];
            array_push($data, $cache);
        }
        return json($data);
    }

    function profileList()
    {
        $params = input('post.');
        $list = Profile::where([])->order('id desc')->select();
        $data = [];
        foreach ($list as $key => $profile) {
            $user = Profile::user($profile->id);
            $cache['user_id'] = $user['userid'];
            $cache['user_name'] = $user['username'];
            $cache['address'] = $profile['address'];
            array_push($data, $cache);
        }
        return json($data);
    }

    function update_user()
    {
        $params = input('post.');
        $params_json = json_decode($params["currentUser"]);
        $user['id'] = $params_json->id;
        $user['name'] = $params_json->name;
        $profile['address'] = $params_json->address;
        $result = User::updates($user['id'], $user, $profile);
        if ($result == true) {
            $this->success($result);
        } else {
            $this->error($result);
        }

    }
}