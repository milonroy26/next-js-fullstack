/*
  Warnings:

  - You are about to drop the column `fristName` on the `users` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `des` VARCHAR(30000) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `fristName`,
    ADD COLUMN `firstName` VARCHAR(50) NOT NULL;
