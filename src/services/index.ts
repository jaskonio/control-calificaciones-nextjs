import { StudentService } from "./studentsService";
import { AcademicYearService } from "./acedemicYearService";
import { TeacherService } from "./teacherService";
import { SubjectService } from "./subjectsService";
import { CourseService } from "./courseService";
import { UserService } from "./userService";
import { ClassService } from "./classService";
import { ParentService } from "./parentService";

const schoolService = new AcademicYearService()

const userService = new UserService()
const teacherService = new TeacherService()
const studentService = new StudentService()

const subjectsService = new SubjectService()

const coursesService = new CourseService()

const classService = new ClassService()
const parentService = new ParentService()

export { userService, schoolService, teacherService, studentService, subjectsService, coursesService, classService, parentService }