/*
  Warnings:

  - You are about to drop the column `scheduleId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `classroomId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `dayOfWeek` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Made the column `eventId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ParticipantType" AS ENUM ('student', 'teacher', 'parent', 'class');

-- AlterEnum
ALTER TYPE "EventType" ADD VALUE 'class';

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_classId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_eventId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "scheduleId",
ADD COLUMN     "eventId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "scheduleId",
ADD COLUMN     "classroomId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "classId",
DROP COLUMN "classroomId",
DROP COLUMN "dayOfWeek",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "eventId" SET NOT NULL;

-- CreateTable
CREATE TABLE "EventParticipant" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,
    "participantType" "ParticipantType" NOT NULL,

    CONSTRAINT "EventParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventParticipant_eventId_participantId_participantType_key" ON "EventParticipant"("eventId", "participantId", "participantType");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "EventParticipant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "Student_EventParticipant_fk" FOREIGN KEY ("participantId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "Teacher_EventParticipant_fk" FOREIGN KEY ("participantId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "Parent_EventParticipant_fk" FOREIGN KEY ("participantId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventParticipant" ADD CONSTRAINT "Class_EventParticipant_fk" FOREIGN KEY ("participantId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
