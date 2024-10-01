import { schoolRepository, userRepository, teacherRepository, studentRepository, subjectsRepository, coursesRepository } from "@/repositories";
import { StudentsService } from "./studentsService";
import { SchoolService } from "./schoolService";
import { TeacherService } from "./teacherService";
import { SubjectsService } from "./subjectsService";
import { CoursesService } from "./coursesService";

const schoolService = new SchoolService(schoolRepository)

const teacherService = new TeacherService(userRepository, teacherRepository)
const studentService = new StudentsService(userRepository, studentRepository)

const subjectsService = new SubjectsService(subjectsRepository)

const coursesService = new CoursesService(coursesRepository)

export { schoolService, teacherService, studentService, subjectsService, coursesService}