import RepositoryFactory from "./repositoryFactory"

const schoolRepository = RepositoryFactory.getSchoolRepository()

const userRepository = RepositoryFactory.getUserRepository()
const teacherRepository = RepositoryFactory.getTeacherRepository()
const studentRepository = RepositoryFactory.getStudentRepository()

const subjectsRepository = RepositoryFactory.getSubjectsRepository()

export { schoolRepository, userRepository, teacherRepository, studentRepository, subjectsRepository }