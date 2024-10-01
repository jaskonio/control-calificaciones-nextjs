import { schoolRepository, userRepository, teacherRepository, studentRepository, subjectsRepository } from "@/repositories";
import { StudentsService } from "./studentsService";
import { SchoolService } from "./schoolService";
import { TeacherService } from "./teacherService";
import { SubjectsService } from "./subjectsService";

const schoolService = new SchoolService(schoolRepository)

const teacherService = new TeacherService(userRepository, teacherRepository)
const studentService = new StudentsService(userRepository, studentRepository)

const subjectsService = new SubjectsService(subjectsRepository)

export { schoolService, teacherService, studentService, subjectsService}