-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2022 at 01:26 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id_authors` int(11) NOT NULL,
  `name_authors` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id_authors`, `name_authors`) VALUES
(1, 'J.K.Rowling'),
(2, 'Josh Malerman'),
(3, 'Gege Akutami');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id_books` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `publisher_id` int(11) DEFAULT NULL,
  `release_year` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `url_img` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id_books`, `name`, `author_id`, `publisher_id`, `release_year`, `price`, `description`, `url_img`) VALUES
(1, 'Jujutsu no Kaisen', 3, 1, 2018, 1200, 'Jujutsu Kaisen is the story of Yuji Itadori. Mysterious world created by Akutami', '/customers/img/themes/images/products/1.jpg'),
(2, 'Harry Potter', 1, 2, 2018, 30, 'Boxset Harry Potter - Tiếng Việt (Trọn Bộ 7 Tập)', '/customers/img/themes/images/products/2.jpg'),
(3, 'Sherlock Holmes', NULL, 1, 2006, 600, 'Sherlock Holmes is a fictional detective of the late 19th and early 20th centuries, who first appeared in publication in 1887.', '/customers/img/themes/images/products/3.jpg'),
(4, 'The silence of the Lambs', NULL, 1, 2017, 800, 'A young F.B.I. cadet must receive the help of an incarcerated', '/customers/img/themes/images/products/4.jpg'),
(5, 'The Shining', NULL, 1, 2011, 700, 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.', '/customers/img/themes/images/products/5.jpg'),
(6, 'Mắt Biếc', NULL, 2, 1999, 200, 'Mắt biếc là tiểu thuyết của nhà văn Nguyễn Nhật Ánh trong loạt truyện viết về tình yêu thanh thiếu niên', '/customers/img/themes/images/products/6.jpg'),
(7, '100 Kỹ năng sinh tồn', NULL, 1, 2020, 50, 'CUỐN CẨM NANG HƯỚNG DẪN VỀ CÁCH SỐNG SÓT Ở NƠI HOANG DÃ VÀ CHUẨN BỊ CHO MỌI THẢM HỌA', '/customers/img/themes/images/products/7.jpg'),
(8, 'Kỹ thuật lập trình', NULL, 2, 2003, 200, 'Giáo trình kỹ thuật lập trình C căn bản và nâng cao được hình thành qua nhiều năm giảng dạy của các tác giả', '/customers/img/themes/images/products/8.jpg'),
(9, 'Pháp Luật đại cương', NULL, 1, 2017, 45, 'Cuốn sách được biên soạn nhằm cung cấp cho sinh viên và những người muốn tìm hiểu thêm về pháp luật những tri thức pháp lý cơ bản về nhà nước và pháp luật', '/customers/img/themes/images/products/9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id_categories` int(11) NOT NULL,
  `name_categories` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id_categories`, `name_categories`) VALUES
(1, 'Comic'),
(2, 'Romance'),
(3, 'Fantasy'),
(4, 'Scifi'),
(5, 'Horror');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `idorders` int(11) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `notes` text,
  `create_by` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`idorders`, `create_at`, `address`, `phone`, `total_price`, `notes`, `create_by`) VALUES
(1, NULL, '227 Nguyễn Văn Cừ', '0123456789', 30000, NULL, '123');

-- --------------------------------------------------------

--
-- Table structure for table `order_item_lists`
--

CREATE TABLE `order_item_lists` (
  `order_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `book_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_item_lists`
--

INSERT INTO `order_item_lists` (`order_id`, `quantity`, `book_id`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `order_id` int(11) NOT NULL,
  `status` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`order_id`, `status`) VALUES
(1, 'Pending'),
(2, 'Delivering'),
(3, 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `id_publishers` int(11) NOT NULL,
  `name_publishers` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`id_publishers`, `name_publishers`) VALUES
(1, 'Nhà xuất bản trẻ'),
(2, 'Nhà xuất bản kim đồng');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `is_confirmed` bit(1) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `is_admin` bit(1) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `avt_url` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `name`, `is_confirmed`, `dob`, `phone`, `is_admin`, `password`, `email`, `avt_url`) VALUES
('123', 'Long', b'1', '2001-12-04', '34536456', b'1', 'password', '123123@gmail.com', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id_authors`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id_books`),
  ADD KEY `fk_books_authors_idx` (`author_id`),
  ADD KEY `fk_books_publishers_idx` (`publisher_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categories`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idorders`),
  ADD KEY `fk_orders_users_idx` (`create_by`);

--
-- Indexes for table `order_item_lists`
--
ALTER TABLE `order_item_lists`
  ADD PRIMARY KEY (`order_id`,`book_id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`id_publishers`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `fk_books_authors` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id_authors`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_books_publishers` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`id_publishers`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
