-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Oct 10, 2022 at 05:31 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `genshinimpact`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `CharacterID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Element` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`CharacterID`, `Name`, `Element`, `Region`) VALUES
(103, 'Raiden Ei', 'Electro', 'Inazuma'),
(104, 'Collei', 'Dendro', 'Sumeru'),
(105, 'Keqing', 'Electro', 'Liyue'),
(106, 'Eula', 'Cryo', 'Monstadt'),
(107, 'Diluc', 'Pyro', 'Monstadt'),
(108, 'Zhongli', 'Geo', 'Liyue'),
(109, 'Ganyu', 'Cryo', 'Liyue'),
(110, 'Mona', 'Hydro', 'Monstadt'),
(111, 'Diona', 'Cryo', 'Monstadt'),
(112, 'Yae Miko', 'Electro', 'Inazuma'),
(113, 'Fischl', 'Electro', 'Monstadt'),
(114, 'Xiao', 'Anemo', 'Liyue');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`CharacterID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `CharacterID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
