<?php

namespace app\index\model;

use think\Model;
use think\Db;

class Article extends Model
{
    protected $table_name = "think_article";

    public static function page($where, $currentPage)
    {
        $data = Db::table('think_article')
            ->order('id asc')
            ->where($where)
            ->limit($currentPage * config('pageSize'),config('pageSize')
        )->select();
        $count = Db::table('think_article')->where($where)->count();
        return [
            "data" => $data,
            "page" => ceil($count / config('pageSize'))
        ];
    }

    public static function new_list($list_mun)
    {
        $data = Db::table('think_article')->order('create_time desc')->limit(
            0,
            $list_mun
        )->select();
        return $data;
    }


}