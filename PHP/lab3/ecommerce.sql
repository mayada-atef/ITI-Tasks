-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 14, 2022 at 09:47 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `addtocard`
--

CREATE TABLE `addtocard` (
  `user_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `quantity` int UNSIGNED DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `addtocard`
--

INSERT INTO `addtocard` (`user_id`, `product_id`, `quantity`, `created_at`) VALUES
(1, 16, 3, '2022-10-14 22:09:08'),
(1, 15, 1, '2022-10-14 22:09:12');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `total` decimal(10,2) DEFAULT '0.00',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total`, `created_at`) VALUES
(1, 1, '0.00', '2022-10-02 11:21:29'),
(2, 2, '0.00', '2022-10-02 11:52:19');

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED DEFAULT NULL,
  `product_id` bigint UNSIGNED DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `amount` int DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'index.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `amount`, `created_at`, `description`, `image`) VALUES
(1, 'Soho Lychee Liqueur', '316.34', 45, '2022-10-14 17:51:10', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, amet?', 'index.jpg'),
(2, 'Vermacelli - Sprinkles, Assorted', '790.23', 27, '2022-10-14 17:51:10', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, amet?', 'index.jpg'),
(3, 'Sherry - Dry', '874.34', 38, '2022-10-14 17:51:10', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, amet?', 'index.jpg'),
(4, 'Lychee - Canned', '283.92', 37, '2022-10-14 17:51:10', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, amet?', 'index.jpg'),
(11, 'product1', '10.00', 100, '2022-10-14 18:48:37', 'lorem', 'index.jpg'),
(12, 'product2', '500.00', 10, '2022-10-14 18:50:03', 'lorem', 'index.jpg'),
(13, 'product2', '500.00', 10, '2022-10-14 18:51:21', 'lorem', 'index.jpg'),
(14, 'product with image', '10.00', 5, '2022-10-14 20:13:50', 'lorem', 'index.jpg'),
(15, 'product', '500.00', 20, '2022-10-14 20:17:43', 'lorem', 'cart-4.jpg'),
(16, 'hi', '10.00', 10, '2022-10-14 21:11:40', '2', 'cart-1.jpg'),
(1000, 'p1', '50.00', 70, '2022-10-14 23:25:54', NULL, 'index.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
