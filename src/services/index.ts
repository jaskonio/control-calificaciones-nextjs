import { schoolRepository, userRepository, teacherRepository, studentRepository } from "@/repositories";
import { StudentsService } from "./studentsService";
import { SchoolService } from "./schoolService";
import { TeacherService } from "./teacherService";

const schoolService = new SchoolService(schoolRepository)

const teacherService = new TeacherService(userRepository, teacherRepository)
const studentService = new StudentsService(userRepository, studentRepository)

export { schoolService, teacherService, studentService}