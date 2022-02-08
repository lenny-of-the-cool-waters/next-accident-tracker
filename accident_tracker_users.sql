-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: accident_tracker
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userRole` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNum` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1','LennyG','$2b$13$pQyZCaCFt.xLhr8H6jzGK.xnMkznTv7CBge.MTqFIM.XWHFcKYMgm','2021-08-26 09:05:49','2021-08-26 09:05:49','3','lennygith@gmail.com',NULL),('15','SuperAdmin','$2b$13$I1oLv.sFlbeqayf5g1afreer8dqlVlL.g.WFLACBwSk8ADdNhWN3C','2021-08-27 11:16:45','2021-08-27 11:16:45','3','superadmin@mail.com',NULL),('18','user1','$2b$13$LbUYXqdZS3R/EICSbcwD8ubzGYqYKW9BNpM9mOcm0kkfj2V75ABqK','2021-08-31 05:44:10','2021-08-31 05:44:10','1','email@mail.com','123456789'),('9f2e535a-213c-4683-843d-dda45740ff00','TestClient','$2b$13$BNGrxoIiPWg35LKaoVWcLujw2ykAuzY9rwJQgjZ1rZ2v8nb360MUa','2021-08-31 07:35:50','2021-08-31 07:35:50','1','client@mail.com','071346789'),('cf58b608-42fe-477b-8e1e-ed0e8d0488a5','Evans Wakae','$2b$13$FHO2cUv5bMWyaRqilfoEfORyMwFHKLW2uOnrfEQLFkRz2LKwhAoyi','2021-08-31 13:13:12','2021-08-31 13:13:12','1','testing1@mail.com','0713246578');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-02 10:09:38
