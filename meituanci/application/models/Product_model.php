<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/14
 * Time: 9:47
 */
class Product_model extends CI_Model
{
    public function get_product(){
//        $sql = 'select * from t_product';
        $query=$this->db->get('t_product');
        return $query->result();
    }
}