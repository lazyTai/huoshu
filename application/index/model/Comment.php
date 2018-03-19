<?php
namespace app\index\model;

use think\Model;
use think\Db;
class Comment extends Model{
    protected $table_name = "think_comment";

    public static function read_comments_count($where=["article_id"=>0]){
        $results= Db::query("SELECT  
        tc.id,tc.article_id,tc.comment,tc.update_time,tc.create_time,
        tu.name,
        tp.image_url,
        t_like_num.like_num
        FROM think_comment tc
        LEFT JOIN 
        think_user tu
        ON tc.user_id =tu.id
        
        LEFT JOIN 
        think_profile tp
        ON tp.user_id =tu.id
        
        LEFT JOIN 
        (SELECT COUNT(id) AS like_num,comment_id,STATUS FROM think_check_comment_like tccl 
        WHERE STATUS=1
        GROUP BY tccl.comment_id) AS t_like_num
        ON t_like_num.comment_id=tc.id
        
        WHERE tc.article_id=".$where['article_id']."
        ORDER BY tc.update_time DESC
        ");
        return count($results);
    }
    public static function read_comments($where=["article_id"=>0],$currentPage=1){
       $results= Db::query("SELECT  
tc.id,tc.article_id,tc.comment,tc.update_time,tc.create_time,
tu.name,
tp.image_url,
t_like_num.like_num
FROM think_comment tc
LEFT JOIN 
think_user tu
ON tc.user_id =tu.id

LEFT JOIN 
think_profile tp
ON tp.user_id =tu.id

LEFT JOIN 
(SELECT COUNT(id) AS like_num,comment_id,STATUS FROM think_check_comment_like tccl 
WHERE STATUS=1
GROUP BY tccl.comment_id) AS t_like_num
ON t_like_num.comment_id=tc.id

WHERE tc.article_id=".$where['article_id']."
ORDER BY tc.update_time DESC
limit ".(($currentPage-1)*10).",10
");
        if(count($results)>=0){
            return $results;
        }else{
            return false;
           
        }
    }

    
}