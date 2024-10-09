type UserRole = 'admin' | 'teacher' | 'tutor' | 'student';
type ParallelType = 'A' | 'B' | 'C' | 'D' | 'E';

// Data Base
interface SchoolYear {
    year_id: number;
    start_date: string;
    end_date: string;
}

interface User {
    user_id: number;
    role: UserRole;
    name: string;
    email: string;
    password: string;
}

interface Teacher {
    teacher_id: number;
    first_name: string;
    last_name: string;
    user_id: number;
}

interface Student {
    student_id: number;
    first_name: string;
    last_name: string;
    birth_data: string;
    user_id: number;
}

interface Subject {
    subject_id: number;
    name: string;
    description: string;
}

// interface Course {
//     course_id: number;
//     name: string;
//     parallel: ParallelType;
// }

// relationship by School year
interface Tutor {
    tutor_id: number;
    teacher_id: number;
    course_id: number
    year_id: number;
}

// View
interface SchoolYearView extends SchoolYear {
}

interface TeacherView extends Teacher {
    user: User;
}

interface StudentView extends Student {
    user: User;
}

interface SubjectView extends Subject {
}

interface CourseView extends Course {
    course_id: number;
    name: string;
    parallel: ParallelType;
}