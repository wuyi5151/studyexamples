/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : meituan

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2017-07-12 16:02:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'admin', '5151');
INSERT INTO `t_user` VALUES ('2', 'wuyi', '5151');
INSERT INTO `t_user` VALUES ('4', 'wy', '5151');
