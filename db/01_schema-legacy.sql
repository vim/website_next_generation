-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: vim
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post_requests_by_ip`
--

DROP TABLE IF EXISTS `post_requests_by_ip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_requests_by_ip` (
  `ip` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `X` (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vd_donations`
--

DROP TABLE IF EXISTS `vd_donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vd_donations` (
  `mailed_key` varchar(20) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `created` date DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vd_features`
--

DROP TABLE IF EXISTS `vd_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vd_features` (
  `feature_id` varchar(15) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `sort_id` varchar(15) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vd_votes`
--

DROP TABLE IF EXISTS `vd_votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vd_votes` (
  `user_id` int DEFAULT NULL,
  `vote_nr` int DEFAULT NULL,
  `points` int DEFAULT NULL,
  `feature_id` varchar(15) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `expire_date` date DEFAULT NULL,
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vo_news_items`
--

DROP TABLE IF EXISTS `vo_news_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vo_news_items` (
  `news_item_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(80) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `news` longtext COLLATE utf8mb3_unicode_ci,
  `created_by` int DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`news_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vs_script_downloads`
--

DROP TABLE IF EXISTS `vs_script_downloads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vs_script_downloads` (
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `script_id` int DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `vssd_id_ip` (`script_id`,`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vs_script_ratings`
--

DROP TABLE IF EXISTS `vs_script_ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vs_script_ratings` (
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `script_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vs_script_source`
--

DROP TABLE IF EXISTS `vs_script_source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vs_script_source` (
  `script_source_id` int NOT NULL AUTO_INCREMENT,
  `mime_type` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `script_id` int DEFAULT NULL,
  `vim_version` varchar(10) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `script_version` varchar(10) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `version_comment` longtext COLLATE utf8mb3_unicode_ci,
  `src` longblob,
  `created_by` int DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `package` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`script_source_id`),
  KEY `source_date` (`creation_date`),
  KEY `vss_sid_creator` (`script_id`,`created_by`)
) ENGINE=InnoDB AUTO_INCREMENT=28552 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vs_scripts`
--

DROP TABLE IF EXISTS `vs_scripts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vs_scripts` (
  `script_id` int NOT NULL AUTO_INCREMENT,
  `script_name` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `script_type` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `summary` varchar(80) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb3_unicode_ci,
  `install_details` longtext COLLATE utf8mb3_unicode_ci,
  `ratings` int DEFAULT NULL,
  `rating_score` int DEFAULT NULL,
  `downloads` int DEFAULT NULL,
  `last_updated_by` int DEFAULT NULL,
  `last_update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT '1970-01-01 00:00:01',
  PRIMARY KEY (`script_id`),
  KEY `created_by` (`created_by`),
  FULLTEXT KEY `summary` (`summary`,`description`,`install_details`)
) ENGINE=InnoDB AUTO_INCREMENT=6079 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vs_sessions`
--

DROP TABLE IF EXISTS `vs_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vs_sessions` (
  `session_id` varchar(32) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '',
  `user_id` int DEFAULT NULL,
  `remote_address` varchar(200) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vs_users`
--

DROP TABLE IF EXISTS `vs_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vs_users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `password` varchar(32) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `first_name` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `last_name` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `access` int DEFAULT NULL,
  `homepage` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `sponsor_amount` int DEFAULT NULL,
  `sponsor_vote_amount` int DEFAULT NULL,
  `sponsor_vote_date` date DEFAULT NULL,
  `sponsor_flags` int DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=79919 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vt_tip_note_spam`
--

DROP TABLE IF EXISTS `vt_tip_note_spam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vt_tip_note_spam` (
  `tip_spam_note_id` int NOT NULL AUTO_INCREMENT,
  `moderated_by` int NOT NULL DEFAULT '0',
  `moderated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tip_note_id` int NOT NULL DEFAULT '0',
  `tip_id` int NOT NULL DEFAULT '0',
  `note` longtext COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_by` varchar(40) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '',
  `created_by_email` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '',
  `last_update_date` timestamp NOT NULL DEFAULT '1970-01-01 00:00:01',
  `creation_date` timestamp NOT NULL DEFAULT '1970-01-01 00:00:01',
  `last_updated_by_email` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`tip_spam_note_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4795 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vt_tip_notes`
--

DROP TABLE IF EXISTS `vt_tip_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vt_tip_notes` (
  `tip_note_id` int NOT NULL AUTO_INCREMENT,
  `tip_id` int DEFAULT NULL,
  `note` longtext COLLATE utf8mb3_unicode_ci,
  `last_updated_by_email` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `last_update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_by_email` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT '1970-01-01 00:00:01',
  PRIMARY KEY (`tip_note_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12968 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vt_tip_ratings`
--

DROP TABLE IF EXISTS `vt_tip_ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vt_tip_ratings` (
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tip_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `vt_tip_ratings_n1` (`ip`),
  KEY `vt_tip_ratings_n2` (`tip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vt_tip_spam`
--

DROP TABLE IF EXISTS `vt_tip_spam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vt_tip_spam` (
  `tip_spam_id` int NOT NULL AUTO_INCREMENT,
  `moderated_by` int DEFAULT NULL,
  `moderated_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tip_id` int DEFAULT NULL,
  `summary` varchar(200) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `tip` longtext COLLATE utf8mb3_unicode_ci,
  `version` enum('5.7','6.0') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `complexity` enum('basic','intermediate','advanced') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `last_updated_by_email` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `last_update_date` timestamp NOT NULL DEFAULT '1970-01-01 00:00:01',
  `created_by` varchar(40) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_by_email` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT '1970-01-01 00:00:01',
  `ratings` int DEFAULT NULL,
  `rating_score` int DEFAULT NULL,
  `viewed` int DEFAULT NULL,
  PRIMARY KEY (`tip_spam_id`)
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vt_tip_views`
--

DROP TABLE IF EXISTS `vt_tip_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vt_tip_views` (
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tip_id` int DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `vt_tip_views_n1` (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-13 22:24:08
