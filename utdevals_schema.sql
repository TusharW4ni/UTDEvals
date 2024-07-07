/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Course` (
  `id` varchar(100) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `en` int NOT NULL,
  `etr` int NOT NULL,
  `rc` int NOT NULL,
  `instructId` int NOT NULL,
  `deptId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `instructIdFK` (`instructId`),
  KEY `courseDeptIdFK` (`deptId`),
  CONSTRAINT `courseDeptIdFK` FOREIGN KEY (`deptId`) REFERENCES `Dept` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `instructIdFK` FOREIGN KEY (`instructId`) REFERENCES `Instructor` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dept` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `deptName` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Evaluation` (
  `cid` varchar(100) NOT NULL,
  `qid` int NOT NULL,
  `med` float NOT NULL,
  `mu` float NOT NULL,
  `sig` float NOT NULL,
  `sd` int NOT NULL,
  `d` int NOT NULL,
  `n` int NOT NULL,
  `a` int NOT NULL,
  `sa` int NOT NULL,
  `tot` int NOT NULL,
  PRIMARY KEY (`cid`,`qid`),
  KEY `qidFK` (`qid`),
  CONSTRAINT `cidFK` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `qidFK` FOREIGN KEY (`qid`) REFERENCES `Question` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Instructor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `fName` varchar(100) NOT NULL,
  `lName` varchar(100) NOT NULL,
  `deptId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `deptIdFK` (`deptId`),
  CONSTRAINT `deptIdFK` FOREIGN KEY (`deptId`) REFERENCES `Dept` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  `tag` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
