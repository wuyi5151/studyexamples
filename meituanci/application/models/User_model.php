<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/11
 * Time: 16:56
 */
class User_model extends CI_Model
{
    public function get_by_username_password($username,$password){
        return $this->db->get_where('t_user',array(
            'username'=>$username,
            'password'=>$password
        ))->row();
    }
}