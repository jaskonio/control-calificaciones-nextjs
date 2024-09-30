import { SchoolService } from "./schoolService"
import { StudentsService } from "./studentsService";
import { TeacherService } from "./teacherService";
import { UserService } from "./userService";

const schoolService = new SchoolService()
const userService = new UserService();
const teacherService = new TeacherService(userService)
const studentService = new StudentsService(userService)

export { schoolService, userService, teacherService, studentService}