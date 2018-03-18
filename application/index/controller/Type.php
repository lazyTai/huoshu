<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\Type as TypeDao;
use think\Db;
class Type extends Controller{
 public function index(){
    $result= Db::view('Sub_type',['id'=>'sub_id','sub_type_name'
    ,"image_url"],'Sub_type.header_type_id=Type.id')
    ->view('Type',['id'=>'parent_id','name'=>'parent_type'])
    ->order('parent_id asc')
    ->select();
    $parent_result=Db::table('think_type')->select();
    foreach($parent_result as $key2=>$parent_item) {
       $parent_result[$key2]['children']=[];
    }
    foreach($result as $key1=>$item) {
        foreach($parent_result as $key2=>$parent_item) {
            if(isset($parent_item['id'])){
                if($parent_item['id']==$item['parent_id']){
                   array_push($parent_result[$key2]['children'],$item);
                }
            }
        };
    };
    // print_r("<pre>"); 
    // print_r($result);
    $this->assign('result',json_encode($parent_result));
    // return json($parent_result);
    return $this->fetch();
 } 

 public function get_type_list_all(){
    $result= Db::view('Sub_type',['id'=>'sub_id','sub_type_name'
    ,"image_url"],'Sub_type.header_type_id=Type.id')
    ->view('Type',['id'=>'parent_id','name'=>'parent_type'])
    ->order('parent_id asc')
    ->select();
    $parent_result=Db::table('think_type')->select();
    foreach($parent_result as $key2=>$parent_item) {
       $parent_result[$key2]['children']=[];
    }
    foreach($result as $key1=>$item) {
        foreach($parent_result as $key2=>$parent_item) {
            if(isset($parent_item['id'])){
                if($parent_item['id']==$item['parent_id']){
                   array_push($parent_result[$key2]['children'],$item);
                }
            }
        };
    };
    return json($parent_result);
 }
 public function read_sub_type_order_by_artitle_num(){
        $result=Db::query('SELECT id,header_type_id,sub_type_name,image_url,count_sub.article_num
        FROM think_sub_type   AS st
        JOIN (
            SELECT 
            sub_type_id ,COUNT(article_id) AS article_num
            FROM think_sub_type_article 
            GROUP BY sub_type_id
            ORDER BY article_num DESC 
            LIMIT  0,8
        ) AS count_sub
        ON st.id=count_sub.sub_type_id');
        return json($result);
 }
}