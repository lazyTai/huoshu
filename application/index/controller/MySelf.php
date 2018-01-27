<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\User;
use app\index\model\Profile;

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

    function loadfile($files, $index)
    {
        $dir = "uploads/" . date("Ymd") . '/';
        if (count($files["name"]) > 1) {
            if (!file_exists($dir . $files["name"][$index])) {
                if (!file_exists($dir)) {
                    mkdir($dir, 0777, true);
                }
                move_uploaded_file(
                    $files["tmp_name"][$index],
                    $dir . $files["name"][$index]
                );
            }
            return '/huoshu/public/' . $dir . $files["name"][$index];
        } else {
            if (!file_exists($dir . $files["name"])) {
                if (!file_exists($dir)) {
                    mkdir($dir, 0777, true);
                }
                move_uploaded_file(
                    $files["tmp_name"],
                    $dir . $files["name"]
                );
            }
            return '/huoshu/public/' . $dir . $files["name"];
        }

    }

    public function changeImage()
    {
        $self = $this;
        header("Content-Type:text/html;charset=utf8");
        $files = $_FILES['file'];
        for ($x = 0; $x < count($files['size']); $x++) {
            $result = $self->loadfile($files, $x);
            if ($result) {
                $profile = Profile::get(['user_id' => input('session.ext_user')->id]);
                $profile->image_url = $result;
                $info = $profile->save();
                if ($info) {
                    return json($profile->image_url);
                } else {
                    return json($info);
                }

            } else {
                return json($result);
            }

        }
    }
}