/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.53 : Database - demo
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

/*Table structure for table `think_album` */

DROP TABLE IF EXISTS `think_album`;

CREATE TABLE `think_album` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image_url` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `think_album` */

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
  `num_artitcle` int(100) DEFAULT NULL,
  `num_like` int(100) DEFAULT NULL,
  `num_content` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `think_article` */

insert  into `think_article`(`id`,`title`,`content`,`user_id`,`create_time`,`image_src`,`type_id`,`update_time`,`num_artitcle`,`num_like`,`num_content`) values (1,'这就是我的日记啊','<div><div><span style=\"font-size: 16px;\">我的天啊！</span></div></div><div>这其实不是我想要的</div><div>我是个诗人啊</div><div>却活成了苟且。</div><div>人是人</div><div>就是死了也不会伤心哦！</div>',1,'2018-01-18 14:01:47','https://www.baidu.com/img/baidu_jgylogo3.gif',2,'2018-03-07 07:46:30',0,0,0),(2,'lmt1','这是我写的第二篇日记',NULL,'2018-02-01 17:01:36','null',2,'2018-03-03 11:46:15',0,0,0),(3,'2','1',NULL,'2018-02-01 17:01:38',NULL,3,NULL,NULL,NULL,NULL),(4,'3','2',NULL,'2018-02-01 17:01:40',NULL,4,NULL,NULL,NULL,NULL),(5,'4','3',NULL,'2018-02-01 17:01:42',NULL,5,NULL,NULL,NULL,NULL),(6,'asd ','4',NULL,'2018-02-01 17:01:44',NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `think_article_like` */

DROP TABLE IF EXISTS `think_article_like`;

CREATE TABLE `think_article_like` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `article_id` int(20) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL,
  `status` int(20) DEFAULT NULL COMMENT '0:没有点赞，1：点赞',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `think_article_like` */

insert  into `think_article_like`(`id`,`article_id`,`user_id`,`status`) values (1,1,1,1),(2,1,2,1),(3,2,1,1),(4,2,1,1),(5,2,1,1);

/*Table structure for table `think_check_comment_like` */

DROP TABLE IF EXISTS `think_check_comment_like`;

CREATE TABLE `think_check_comment_like` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `comment_id` int(10) DEFAULT NULL,
  `status` int(10) DEFAULT NULL COMMENT '0:没有点赞，1:点赞',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

/*Data for the table `think_check_comment_like` */

insert  into `think_check_comment_like`(`id`,`user_id`,`comment_id`,`status`) values (39,1,2,1),(41,1,1,-1),(42,1,17,1),(43,1,16,1),(44,1,15,1),(45,1,14,1),(46,1,13,1),(47,1,12,1),(48,1,11,1),(49,1,10,1),(50,1,4,-1),(51,1,9,1);

/*Table structure for table `think_comment` */

DROP TABLE IF EXISTS `think_comment`;

CREATE TABLE `think_comment` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `article_id` int(50) DEFAULT NULL,
  `user_id` int(50) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `like_num` int(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `think_comment` */

insert  into `think_comment`(`id`,`article_id`,`user_id`,`comment`,`update_time`,`create_time`,`like_num`) values (1,1,1,'adkldfsdfjhsd','2018-03-10 13:41:40','2018-03-03 12:02:36',1),(2,1,1,'sdf sdf zxcsdzfddzxf asd','2018-03-10 13:43:17','2018-03-03 12:14:53',19),(3,1,1,'这就是我的评论','2018-03-04 16:18:53','2018-03-04 16:18:53',0),(4,1,1,'不错哦','2018-03-10 13:42:52','2018-03-07 07:34:58',0),(5,1,1,'aaaa','2018-03-07 07:40:18','2018-03-07 07:40:18',0),(6,1,1,'asd ','2018-03-07 07:40:25','2018-03-07 07:40:25',0),(7,1,1,'shit','2018-03-07 07:41:29','2018-03-07 07:41:29',0),(8,1,1,'asd ','2018-03-07 07:43:13','2018-03-07 07:43:13',0),(9,1,1,'asd ','2018-03-09 11:00:00','2018-03-07 07:45:28',1),(10,1,1,'10','2018-03-09 10:50:45','2018-03-07 07:51:18',1),(11,1,1,'11','2018-03-09 10:50:45','2018-03-07 07:51:25',1),(12,1,1,'12','2018-03-09 10:50:43','2018-03-07 07:53:16',1),(13,1,1,'asd ','2018-03-09 10:50:43','2018-03-07 11:26:31',1),(14,1,1,'asd ','2018-03-09 10:50:40','2018-03-08 11:15:35',1),(15,1,1,'asd ','2018-03-09 10:50:26','2018-03-08 11:16:15',1),(16,1,1,'asd ','2018-03-09 10:50:13','2018-03-08 11:16:21',1),(17,1,1,'zxc','2018-03-09 10:50:06','2018-03-08 11:25:23',1),(18,1,1,'这就是爱','2018-03-09 11:00:31','2018-03-09 11:00:31',0),(19,2,1,'写的不错哦','2018-03-16 17:17:37','2018-03-16 17:17:37',0);

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

/*Table structure for table `think_like_album` */

DROP TABLE IF EXISTS `think_like_album`;

CREATE TABLE `think_like_album` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `album_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `think_like_album` */

/*Table structure for table `think_profile` */

DROP TABLE IF EXISTS `think_profile`;

CREATE TABLE `think_profile` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `think_profile` */

insert  into `think_profile`(`id`,`address`,`user_id`,`image_url`,`update_time`) values (1,'这是我的家，尼玛币',1,'/huoshu/public/uploads/20180317\\391b1947cac3288c9c37cb1fa1e1a265.jpg','2018-03-17 16:54:09');

/*Table structure for table `think_sub_type` */

DROP TABLE IF EXISTS `think_sub_type`;

CREATE TABLE `think_sub_type` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `header_type_id` int(10) NOT NULL,
  `sub_type_name` varchar(100) NOT NULL,
  `image_url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;

/*Data for the table `think_sub_type` */

insert  into `think_sub_type`(`id`,`header_type_id`,`sub_type_name`,`image_url`) values (1,1,'青春','icon-chun'),(2,1,'儿童文学','icon-atongmu-'),(3,1,'童话','icon-ertong'),(4,1,'悬疑 ','icon-shengdanjieicon-'),(5,1,'推理','icon-zuifan'),(6,1,'犯罪','icon-zuifan'),(7,1,'惊悚','icon-kongbudianyingjingshengjianjiao'),(8,1,'恐怖','icon-kongbudianyingwaixingren'),(9,1,'灵异','icon-kongbudianyingdianjujinghun'),(10,1,'志怪 ','icon-shengdanjieicon-'),(11,1,'历史','icon-lishi'),(12,1,'科幻','icon-kongbudianyingwaixingren'),(13,1,'奇幻','icon-kongbudianyingwaixingren'),(14,1,'魔幻','icon-kongbudianyingwaixingren'),(15,1,'魔幻现实主义','icon-kongbudianyingwaixingren'),(16,1,'玄幻','icon-icon-test1'),(17,1,'武侠','icon-gufeng_guzhuang_zhanzhao'),(18,1,'宫廷','icon-gufeng_guzhuang_ziwei'),(19,1,'军事','icon-junshi'),(20,1,'体育','icon-tiyu'),(21,1,'校园','icon-xiaoyuan'),(22,1,'纯爱','icon-heart-copy'),(23,1,'情感','icon-heart-copy'),(24,1,'言情','icon-heart-copy'),(25,1,'家庭','icon-faxian_jiatingjiaoyu'),(26,1,'城市','icon-chengshi'),(27,1,'乡土','icon-chengshi'),(28,1,'公路','icon-road__easyiconnet'),(29,1,'职场','icon-yingxiaoyuan'),(30,1,'商战','icon-yingxiaoyuan'),(31,1,'官场','icon-yingxiaoyuan'),(32,1,'幽默','icon--joy'),(33,1,'成长','icon-zhuye_chengchangjilu'),(34,1,'心里','icon-xin'),(35,2,'二次元','icon-atongmu-'),(36,2,'acg','icon-nvhai'),(37,2,'同人','icon-nvhai'),(38,2,'架空','icon-gufeng_guzhuang_ziwei'),(39,2,'穿越','icon-gufeng_guzhuang_ziwei'),(40,2,'古风','icon-gufeng_guzhuang_ziwei'),(41,2,'末世','icon-shijie'),(42,2,'审美','icon-xihananhai'),(43,2,'哈利波特','icon-xihananhai'),(44,2,'盗墓笔记','icon-xihananhai'),(45,2,'英雄联盟','icon-jiaodoushiwushi'),(46,3,'文化','icon-tubiaozhizuomoban1'),(47,3,'海外','icon-tubiaozhizuomoban1'),(48,3,'读书','icon-tubiaozhizuomoban1'),(49,3,'写作','icon-tubiaozhizuomoban1'),(50,3,'书评','icon-tubiaozhizuomoban1'),(51,3,'影评','icon-tubiaozhizuomoban1'),(52,3,'哲学 ','icon-tubiaozhizuomoban1'),(53,3,'逻辑与思维','icon-tubiaozhizuomoban1'),(54,3,'认知 ','icon-lishi'),(55,3,'伦理','icon-lishi'),(56,3,'美学 ','icon-lishi'),(57,3,'宗教','icon-lishi'),(58,3,'历史 ','icon-lishi'),(59,3,'人物传','icon-jiaodoushiwushi'),(60,3,'三国','icon-jiaodoushiwushi'),(61,3,'民国','icon-lishi'),(62,3,'考古','icon-lishi'),(63,3,'文学','icon-lishi'),(64,3,'诗词','icon-lishi'),(65,3,'社会学','icon-faxian_jiatingjiaoyu'),(66,3,'语言与文学','icon-lishi'),(67,3,'教育','icon-lishi'),(68,3,'出版','icon-lishi'),(69,3,'政治','icon-junshi'),(70,3,'时事 ','icon-junshi'),(71,3,'军事','icon-junshi'),(72,3,'国际关系','icon-hulianwang1'),(73,3,'心理','icon-qinggan'),(74,4,'it','icon-ITquanxian'),(75,4,'互联网','icon-ITquanxian'),(76,4,'计算机','icon-ITquanxian'),(77,4,'产品','icon-ITquanxian'),(78,4,'设计','icon-ITquanxian'),(79,4,'运营','icon-ITquanxian'),(80,4,'电商','icon-ITquanxian'),(81,4,'区块链','icon-houzi'),(82,4,'程序员','icon-houzi'),(83,4,'豆瓣','icon-douban'),(84,5,'生活','icon-tiyu2'),(85,5,'旅行','icon-tiyu2'),(86,5,'手绘','icon-shouhuiban'),(87,5,'手账 ','icon-shouhuiban'),(88,5,'饮食文化','icon-yinshi'),(89,5,'食谱','icon-yinshi'),(90,5,'美容化妆','icon-nvhai'),(91,5,'健身运动','icon-tiyu2'),(92,5,'保养保健','icon-youjishengwu'),(93,5,'体育','icon-tiyu'),(94,5,'游戏','icon-youxi1'),(95,5,'两性婚姻','icon-heart-copy'),(96,5,'育儿','icon-yuer'),(97,5,'居家休闲','icon-yuer'),(98,5,'手工diy','icon-gerenzhongxin_wodejiating'),(99,5,'明星','icon-mingxing'),(100,6,'科普','icon-huaxueping'),(101,6,'数学','icon-huaxueping'),(102,6,'物理','icon-huaxueping'),(103,6,'化学','icon-huaxueping'),(104,6,'地理','icon-shijie'),(105,6,'自然','icon-huaxueping'),(106,6,'生物','icon-huaxueping'),(107,6,'医学','icon-huaxueping'),(108,6,'外星人','icon-kongbudianyingwaixingren'),(109,7,'艺术 ','icon-huihua-yuanwenjian'),(110,7,'绘画','icon-huihua-yuanwenjian'),(111,7,'设计','icon-sheying-yuanwenjian'),(112,7,'影视','icon-sheying-yuanwenjian'),(113,7,'摄影','icon-sheying-yuanwenjian'),(114,7,'音乐','icon-yinle-'),(115,8,'经济','icon-jinrong'),(116,8,'管理','icon-jinrong'),(117,8,'商业','icon-jinrong'),(118,8,'投资理财','icon-jinrong'),(119,8,'市场营销','icon-jinrong'),(120,8,'金融','icon-jinrong'),(121,10,'英语学习','icon-yingyu'),(122,10,'法语学习','icon-yingyu'),(123,10,'俄语学习','icon-yingyu'),(124,10,'日语','icon-yingyu'),(125,10,'其他','icon-yingyu'),(126,11,'长篇','icon-file'),(127,11,'中篇','icon-file'),(128,11,'短篇','icon-file'),(129,11,'故事','icon-file'),(130,11,'互动','icon-CSS'),(131,11,'散文随笔','icon-file'),(132,11,'寓言','icon-file'),(133,11,'诗歌','icon-file'),(134,11,'传记','icon-file'),(135,11,'回忆录','icon-file'),(136,11,'纪实','icon-file'),(137,11,'日记','icon-file'),(138,11,'杂文','icon-file'),(139,11,'评论','icon-file'),(140,11,'访谈','icon-file'),(141,11,'绘本','icon-huihua-yuanwenjian'),(142,11,'漫画','icon-huihua-yuanwenjian'),(143,12,'古典','icon-CSS'),(144,12,'近现代','icon-CSS'),(145,12,'当代','icon-CSS'),(146,13,'神话','icon-lishi'),(147,13,'山海经','icon-lishi'),(148,14,'名著','icon-temple-of-heaven'),(149,14,'红楼梦','icon-temple-of-heaven'),(150,14,'金瓶梅','icon-temple-of-heaven'),(151,14,'日刊','icon-temple-of-heaven'),(152,14,'月刊','icon-lishi'),(153,9,'成長','icon-zhuye_chengchangjilu'),(154,9,'心里自助','icon-zhuye_chengchangjilu'),(155,9,'职场','icon-position_2'),(156,9,'创业','icon-jinrong'),(157,9,'人际与社交','icon-position_2'),(158,9,'演讲与口才','icon-position_2'),(159,9,'时间管理','icon-shijian1'),(160,9,'ppt','icon-PPT'),(161,9,'ps','icon-Ps');

/*Table structure for table `think_sub_type_article` */

DROP TABLE IF EXISTS `think_sub_type_article`;

CREATE TABLE `think_sub_type_article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sub_type_id` int(10) NOT NULL,
  `article_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `think_sub_type_article` */

insert  into `think_sub_type_article`(`id`,`sub_type_id`,`article_id`) values (1,1,1),(2,1,2),(3,2,3),(4,3,4),(5,4,5),(6,5,6),(7,6,7),(8,7,8),(9,8,9);

/*Table structure for table `think_type` */

DROP TABLE IF EXISTS `think_type`;

CREATE TABLE `think_type` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varbinary(200) NOT NULL,
  `image_url` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Data for the table `think_type` */

insert  into `think_type`(`id`,`name`,`image_url`) values (1,'类型小说',''),(2,'流派',''),(3,'文化',''),(4,'it',''),(5,'生活实用',''),(6,'科学',''),(7,'艺术',''),(8,'经济管理',''),(9,'个人成长',''),(10,'外语学习',''),(11,'体裁 ',''),(12,'时间',''),(13,'神话',''),(14,'经典',''),(15,'官网专辑','');

/*Table structure for table `think_user` */

DROP TABLE IF EXISTS `think_user`;

CREATE TABLE `think_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `think_user` */

insert  into `think_user`(`id`,`name`,`password`,`update_time`) values (1,'lmt','1','2018-03-17 11:27:46');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
