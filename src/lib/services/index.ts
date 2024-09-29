import { SchoolService } from "./schoolService"
import { TeacherService } from "./teacherService";
import { UserService } from "./userService";

const schoolService = new SchoolService()
const userService = new UserService();
const teacherService = new TeacherService(userService)

export { schoolService, userService, teacherService}