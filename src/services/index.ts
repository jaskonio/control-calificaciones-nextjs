import { StudentService } from "./studentsService";
import { AcademicYearService } from "./acedemicYearService";
import { TeacherService } from "./teacherService";
import { SubjectService } from "./subjectsService";
import { CourseService } from "./courseService";
import { UserService } from "./userService";

const schoolService = new AcademicYearService()

const userService = new UserService()
const teacherService = new TeacherService()
const studentService = new StudentService()

const subjectsService = new SubjectService()

const coursesService = new CourseService()

export { userService, schoolService, teacherService, studentService, subjectsService, coursesService}