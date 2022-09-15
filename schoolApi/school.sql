/*
Navicat MySQL Data Transfer

Source Server         : localhost2
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : school

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-12-03 15:37:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `major` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `class` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `place` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('a2a67205-53e3-11ec-aa5b-0a0027000007', '2018', '小张', '15012930411', '汽修', '大三', '广东深圳', '2021-12-03 10:49:29');
INSERT INTO `student` VALUES ('7ca120fc-53e5-11ec-aa5b-0a0027000007', '2016', '小李', '15012930411', '互联网', '大三', '广东深圳', '2021-12-03 11:02:44');
INSERT INTO `student` VALUES ('aef6147e-5401-11ec-aa5b-0a0027000007', '2019', '小康', '123123', '互联网', '大三班', '广东', '2021-12-03 14:24:34');
INSERT INTO `student` VALUES ('bf092695-5401-11ec-aa5b-0a0027000007', '2020', '小吴', '123456', '珠宝', '珠宝级能三班', '广西', '2021-12-03 14:25:01');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('866a3912-5351-11ec-aa5b-0a0027000007', 'admin', '123456', '2021-12-02 17:23:35');

-- ----------------------------
-- Procedure structure for addstudent
-- ----------------------------
DROP PROCEDURE IF EXISTS `addstudent`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addstudent`(num varchar(255),n varchar(255),p varchar(255),m varchar(255),c varchar(255),pla varchar(255))
BEGIN


INSERT INTO student (id,number,`name`,phone,major,class,place,create_at) VALUES (UUID(),num,n,p,m,c,pla,NOW());

END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for deleteStudent
-- ----------------------------
DROP PROCEDURE IF EXISTS `deleteStudent`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteStudent`(id varchar(36))
BEGIN


DELETE FROM student WHERE student.id = id;


END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for getStudent
-- ----------------------------
DROP PROCEDURE IF EXISTS `getStudent`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudent`(n varchar(255))
BEGIN


select * from student as a WHERE ( n = '' || a.number = n) ORDER BY a.create_at desc;


END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for login
-- ----------------------------
DROP PROCEDURE IF EXISTS `login`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `login`(n varchar(255),p varchar(255))
BEGIN

#select * from `user`;
SELECT * from `user` as a where a.username  = n and a.`password` = p; 
#n varchar(255),p varchar(255)


END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tongStudent
-- ----------------------------
DROP PROCEDURE IF EXISTS `tongStudent`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tongStudent`()
BEGIN

select a.major,(SELECT COUNT(*) as num from student as b where a.major = b.major) as num from student as a 
GROUP BY a.major;

END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for updateStudent
-- ----------------------------
DROP PROCEDURE IF EXISTS `updateStudent`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateStudent`(id varchar(36),num varchar(255),n varchar(255),p varchar(255),m varchar(255),c varchar(255),pla varchar(255))
BEGIN

UPDATE student as a set a.number = num,a.`name` = n,a.phone = p,a.major = m,a.class = c,a.place = pla WHERE a.id = id;

END
;;
DELIMITER ;
