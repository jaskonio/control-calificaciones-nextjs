import { StudentService } from "./studentsService";
import { AcademicYearService } from "./acedemicYearService";
import { TeacherService } from "./teacherService";
import { SubjectService } from "./subjectsService";
import { CourseService } from "./courseService";
import { UserService } from "./userService";
import { ClassService } from "./classService";
import { ParentService } from "./parentService";
import { AttendanceService } from "./attendanceService";
import { ClassRoomService } from "./classRoomService";
import { EventService } from "./eventService";
import { GradeService } from "./gradeService";
import { ScheduleService } from "./scheduleService";
import { SettingService } from "./settingService";

const schoolService = new AcademicYearService()

const userService = new UserService()
const teacherService = new TeacherService()
const studentService = new StudentService()

const subjectsService = new SubjectService()

const coursesService = new CourseService()

const classService = new ClassService()
const parentService = new ParentService()
const attendanceService = new AttendanceService()
const classRoomService = new ClassRoomService()
const eventService = new EventService()
const gradeService = new GradeService()
const scheduleService = new ScheduleService()
const settingService = new SettingService()

export {
    userService, schoolService, teacherService, studentService, subjectsService, coursesService, classService, parentService, attendanceService,
    classRoomService, eventService, gradeService, scheduleService, settingService
}