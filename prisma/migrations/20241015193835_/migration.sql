-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_academicYearId_fkey";

-- CreateTable
CREATE TABLE "StudentsAcademicYears" (
    "academicYearId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "StudentsAcademicYears_pkey" PRIMARY KEY ("academicYearId","studentId")
);

-- AddForeignKey
ALTER TABLE "StudentsAcademicYears" ADD CONSTRAINT "StudentsAcademicYears_academicYearId_fkey" FOREIGN KEY ("academicYearId") REFERENCES "AcademicYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsAcademicYears" ADD CONSTRAINT "StudentsAcademicYears_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
