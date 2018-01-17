<?php
namespace app\index\controller;

use think\Controller;
use think\Request;

class Upload1 extends Controller
{

    function index()
    {
        return view();
    }

    function index2()
    {
        return view();
    }
    function ajax()
    {
        return view();
    }

    function up(Request $request)
    {
        $file = $request->file('file');
        if (empty($file)) {
            dump("没有文件");
        };
        $info = $file->validate(['ext' => 'jpg,png'])->move(ROOT_PATH . 'public' . DS . 'uploads');
        if ($info) {
            $this->success('文件上传成功：' . $info->getRealPath());
        } else {
            // 上传失败获取错误信息
            $this->error($file->getError());
        }
    }

    function loadfile($files, $index)
    {
        $dir = "uploads/" . date("Ymd") . '/';
        if (!file_exists($dir . $files["name"][$index])) {
            if (!file_exists($dir)) {
                mkdir($dir, 0777, true);
            }
            move_uploaded_file(
                $files["tmp_name"][$index],
                $dir . $files["name"][$index]
            );
            return true;
        }
        return false;
    }
    function up1()
    {
        $self = $this;
        header("Content-Type:text/html;charset=utf8");
        $files = $_FILES['file'];
        for ($x = 0; $x < count($files['size']); $x++) {
            $result = $self->loadfile($files, $x);
            dump($result);
        }
    }
}