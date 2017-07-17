<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function __construct()
    {
        parent::__construct();
        $this->load->model("product_model");
        $this->load->model("order_model");
    }

    public function index()
	{
	    $results=$this->product_model->get_product();

//	    foreach ($results as $product){
//            //在order表通过product_id查询记录条数
//            $num=$this->order_model->get_count_by_product_id($product->product_id);
//            /*if($num->num==null){
//                $product->num=0;
//            }else{
//                $product->num=$num->num;
//            }*/
//            $product->num = $num->num == null?0:$num->num;
//        }
        //var_dump($results[0]->product_id);

		$this->load->view('index',array('result'=>$results));
	}
	public function detail($product_id){
//	    $this -> load -> view("detail")

//        var_dump($product_id);
//        die();

        $row=$this->product_model->get_product_by_id($product_id);

        $userinfo=$this->session->userdata('userinfo');
        if(empty($userinfo)){
            //没登录
            $row->collect='收藏';
        }else{
            //已登录
            $user_id=$userinfo->user_id;
            $collect=$this->product_model->get_collect($user_id,$product_id);
            //var_dump($user_id,$product_id);//此函数显示关于一个或多个表达式的结构信息，包括表达式的类型与值
            if($collect==null){
                //为收藏 显示收藏
                $row->collect='收藏';
            }else{
                //已收藏 显示取消
                $row->collect='取消';
            }
        }

        $this->load->view('detail',array('row'=>$row));
    }
    public function  success(){
	    $this->load->view('success');
    }
}
