<?php

namespace app\index\model;

use think\Model;
use think\Db;
use app\index\model\Article;

class Hot extends Model
{
    protected $table_name = "think_hot";

    public static function hot_page($limitNum)
    {
        $data = Db::table('think_hot')
            ->order('id asc')->limit(0, $limitNum)
            ->select();


        $a_list = [];
        foreach ($data as $key => $value) {
            $a = Article::get($value['a_id']);
            $a['hot'] = $value['hot'];
            array_push($a_list, $a);
        }
        return $a_list;


    }


}