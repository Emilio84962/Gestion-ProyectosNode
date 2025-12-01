-- CreateTable
CREATE TABLE `projects` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `start_date` DATETIME(6) NOT NULL,
    `end_date` DATETIME(6) NOT NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `leader` VARCHAR(120) NOT NULL,
    `document` VARCHAR(250) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,
    `deleted_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
