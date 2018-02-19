/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.40 : Database - demo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`demo` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `demo`;

/*Table structure for table `think_article` */

DROP TABLE IF EXISTS `think_article`;

CREATE TABLE `think_article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `user_id` int(10) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `image_src` varchar(255) DEFAULT NULL,
  `type_id` int(10) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `think_article` */

insert  into `think_article`(`id`,`title`,`content`,`user_id`,`create_time`,`image_src`,`type_id`,`update_time`) values (1,'lmt','lmt好帅',1,'2018-01-18 14:01:47','https://www.baidu.com/img/baidu_jgylogo3.gif',2,'2018-02-01 16:43:30'),(2,'lmt1',NULL,NULL,'2018-02-01 17:01:36',NULL,2,NULL),(3,'2',NULL,NULL,'2018-02-01 17:01:38',NULL,3,NULL),(4,'3',NULL,NULL,'2018-02-01 17:01:40',NULL,4,NULL),(5,'4',NULL,NULL,'2018-02-01 17:01:42',NULL,5,NULL),(6,NULL,NULL,NULL,'2018-02-01 17:01:44',NULL,NULL,NULL);

/*Table structure for table `think_hot` */

DROP TABLE IF EXISTS `think_hot`;

CREATE TABLE `think_hot` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `hot` int(255) DEFAULT NULL,
  `a_id` int(155) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `think_hot` */

insert  into `think_hot`(`id`,`hot`,`a_id`) values (1,11,1),(2,1,2);

/*Table structure for table `think_profile` */

DROP TABLE IF EXISTS `think_profile`;

CREATE TABLE `think_profile` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `think_profile` */

insert  into `think_profile`(`id`,`address`,`user_id`,`image_url`) values (1,'这是我的家，尼玛币',1,'/huoshu/public/uploads/20180129/IMG_20180115_200744.jpg');

/*Table structure for table `think_type` */

DROP TABLE IF EXISTS `think_type`;

CREATE TABLE `think_type` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varbinary(200) DEFAULT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `think_type` */

insert  into `think_type`(`id`,`name`,`image_url`) values (1,'日记',NULL),(2,'说说',NULL),(3,'爱情',NULL),(4,'苦难',NULL),(5,'搞笑',NULL),(6,'音乐',NULL),(7,'电影',NULL),(8,'工作',NULL);

/*Table structure for table `think_user` */

DROP TABLE IF EXISTS `think_user`;

CREATE TABLE `think_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `think_user` */

insert  into `think_user`(`id`,`name`,`password`) values (1,'lmt','1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
