/*
  Warnings:

  - You are about to drop the column `academicYearId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `StudentsAcademicYears` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentsAcademicYears" DROP CONSTRAINT "StudentsAcademicYears_academicYearId_fkey";

-- DropForeignKey
ALTER TABLE "StudentsAcademicYears" DROP CONSTRAINT "StudentsAcademicYears_studentId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "academicYearId";

-- DropTable
DROP TABLE "StudentsAcademicYears";

-- CreateTable
CREATE TABLE "_AcademicYearToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AcademicYearToStudent_AB_unique" ON "_AcademicYearToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_AcademicYearToStudent_B_index" ON "_AcademicYearToStudent"("B");

-- AddForeignKey
ALTER TABLE "_AcademicYearToStudent" ADD CONSTRAINT "_AcademicYearToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "AcademicYear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AcademicYearToStudent" ADD CONSTRAINT "_AcademicYearToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
