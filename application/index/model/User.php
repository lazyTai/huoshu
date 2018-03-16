<?php
namespace app\index\model;

use think\Db;
use think\Model;
use app\index\model\Profile;

class User extends Model
{
    protected $table = 'think_user';


    public static function login($name, $password)
    {
        $_name = $name;
        $_password = $password;
        $result = User::get(['name' => $_name, 'password' => $_password]);
        $profile=  Profile::get(['user_id'=>$result->id]);
        $result['image_url']= $profile->image_url;
        $result['address']= $profile->address;
        return $result;
    }

    public static function user_profile($user_id)
    {
        $user = User::get(['id' => $user_id]);
        $profile = Profile::get(['user_id' => $user_id]);
        $user['profile'] = $profile;
        return $user;
    }


    public static function updates($userId, $user, $profile)
    {
        Db::startTrans();
        try {
            $_user = User::get($userId);
            if (isset($user['name'])) {
                $_user['name'] = $user['name'];
            }
            if (isset($user['password'])) {
                $_user['password'] = $user['password'];
            }
            $result1 = Db::table('think_user')
                ->where('id', $_user['id'])
                ->update([
                    "id" => $_user['id'],
                    "name" => $_user['name'],
                    "password" => $_user['password']
                ]);


            $_profile = Profile::get(['user_id', $userId]);
            if ($profile['address']) {
                $_profile['address'] = $profile['address'];
            }
            $result2 = Db::table('think_profile')->where('user_id', $_user['id'])
                ->update([
                    "user_id" => $_user['id'],
                    "address" => $_profile['address'],
                ]);
    // 提交事务
            Db::commit();
            return true;
        } catch (\Exception $e) {
    // 回滚事务
            Db::rollback();
            return $e;
            // return false;
        }
    }
}