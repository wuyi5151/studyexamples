/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : meituan

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2017-07-18 15:36:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_business`
-- ----------------------------
DROP TABLE IF EXISTS `t_business`;
CREATE TABLE `t_business` (
  `business_id` int(11) NOT NULL AUTO_INCREMENT,
  `business_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `business_address` varchar(255) COLLATE utf8_bin NOT NULL,
  `business_tel` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`business_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_business
-- ----------------------------
INSERT INTO `t_business` VALUES ('1', '鲜芋仙', '道外区东直路118号百盛购物中心太平桥店1层', '0451-88888888');
INSERT INTO `t_business` VALUES ('2', '麦当劳', '东北林业大学', '010-666');

-- ----------------------------
-- Table structure for `t_collect`
-- ----------------------------
DROP TABLE IF EXISTS `t_collect`;
CREATE TABLE `t_collect` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `is_delete` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `c_user_id` (`user_id`),
  KEY `c_product_id` (`product_id`),
  CONSTRAINT `c_product_id` FOREIGN KEY (`product_id`) REFERENCES `t_product` (`product_id`),
  CONSTRAINT `c_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_collect
-- ----------------------------
INSERT INTO `t_collect` VALUES ('1', '1', '1', '0');
INSERT INTO `t_collect` VALUES ('2', '1', '2', '0');
INSERT INTO `t_collect` VALUES ('3', '1', '3', '1');

-- ----------------------------
-- Table structure for `t_order`
-- ----------------------------
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_price` decimal(10,0) NOT NULL,
  `num` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `t_product` (`product_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_order
-- ----------------------------
INSERT INTO `t_order` VALUES ('1', '1', '1', '8', '1');
INSERT INTO `t_order` VALUES ('2', '1', '2', '30', '2');
INSERT INTO `t_order` VALUES ('3', '1', '1', '10', '2');
INSERT INTO `t_order` VALUES ('4', '1', '1', '8', '3');
INSERT INTO `t_order` VALUES ('5', '1', '1', '8', '1');

-- ----------------------------
-- Table structure for `t_product`
-- ----------------------------
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `price` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL,
  `discount_price` varchar(255) COLLATE utf8_bin NOT NULL,
  `img` varchar(255) COLLATE utf8_bin NOT NULL,
  `business_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `business_id` (`business_id`),
  CONSTRAINT `business_id` FOREIGN KEY (`business_id`) REFERENCES `t_business` (`business_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('1', '鲜芋仙', '8', '[11店通用]10元代金券1份', '7.5', 'img/xianyuxian.jpg', '1');
INSERT INTO `t_product` VALUES ('2', '肯德基', '15', '[12店通用]10元代金券1份', '10', 'img/xianyuxian.jpg', '2');
INSERT INTO `t_product` VALUES ('3', '麦当劳', '16', '[11店通用]10元代金券1份', '9', 'img/xianyuxian.jpg', '2');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'wuyi', '5151');
