interface SchoolYear {
    year_id: number;
    start_date: string;
    end_date: string;
}

type UserRole = 'admin' | 'teacher' | 'tutor' | 'student';


interface User {
    user_id: number;
    role: UserRole;
    name: string;
    email: string;
    password: string;
}

interface Teacher {
    teacher_id: number;
    user_id: number; // Relación con User
}

interface TeacherView extends Teacher {
    user: User;
}

interface Tutor {
    tutor_id: number;
    user_id: number; // Relación con User
    school_year_id: number; // Relación con SchoolYear
}

interface Subject {
    subject_id: number;
    name: string;
    school_year_id: number; // Relación con SchoolYear
}

interface Course {
    course_id: number;
    name: string;
    parallel: string;
    school_year_id: number; // Relación con SchoolYear
}

interface SubjectAssignment {
    assignment_id: number;
    course_id: number; // Relación con Course
    subject_id: number; // Relación con Subject
    teacher_id: number; // Relación con Teacher
    school_year_id: number; // Relación con SchoolYear
}

interface Student {
    student_id: number;
    user_id: number; // Relación con User
    tutor_id: number; // Relación con Tutor
    current_course_id: number; // Relación con Course
    school_year_id: number; // Relación con SchoolYear
}

interface Grade {
    grade_id: number;
    student_id: number; // Relación con Student
    subject_id: number; // Relación con Subject
    period: string;
    exam: number;
    assignment: number;
    project: number;
    final_grade: number;
}

interface UserAssignment {
    user_assignment_id: number;
    user_id: number; // Relación con User
    course_id: number; // Relación con Course
    school_year_id: number; // Relación con SchoolYear
}