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
        $this->load->view('detail',array('row'=>$row));
    }
    public function  success(){
	    $this->load->view('success');
    }
}
