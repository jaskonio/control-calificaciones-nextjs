export const school_years: SchoolYear[] = [
  {
    "year_id": 1,
    "start_date": "2024-01-01",
    "end_date": "2024-12-31"
  },
  {
    "year_id": 2,
    "start_date": "2025-01-01",
    "end_date": "2025-12-31"
  }
]

export const users: User[] = [
  {
    "user_id": 1,
    "role": "admin",
    "name": "John Doe",
    "email": "admin@school.com",
    "password": "admin123"
  },
  {
    "user_id": 2,
    "role": "teacher",
    "name": "Jane Smith",
    "email": "jane.smith@school.com",
    "password": "teacher123"
  },
  {
    "user_id": 3,
    "role": "admin",
    "name": "Emily Clark",
    "email": "emily.clark@school.com",
    "password": "admin456"
  },
  {
    "user_id": 4,
    "role": "teacher",
    "name": "Michael Lee",
    "email": "michael.lee@school.com",
    "password": "teacher456"
  }
]

export const teachers: Teacher[] = [
  {
    "teacher_id": 1,
    "user_id": 2
  },
  {
    "teacher_id": 2,
    "user_id": 5
  },
  {
    "teacher_id": 3,
    "user_id": 4
  },
  {
    "teacher_id": 4,
    "user_id": 6
  }
]

export const tutors: Tutor[] = [
  {
    "tutor_id": 1,
    "user_id": 7,
    "school_year_id": 1
  },
  {
    "tutor_id": 2,
    "user_id": 8,
    "school_year_id": 1
  },
  {
    "tutor_id": 3,
    "user_id": 9,
    "school_year_id": 2
  },
  {
    "tutor_id": 4,
    "user_id": 10,
    "school_year_id": 2
  }
]

export const subjects: Subject[] = [
  {
    "subject_id": 1,
    "name": "Mathematics",
    "school_year_id": 1
  },
  {
    "subject_id": 2,
    "name": "Science",
    "school_year_id": 1
  },
  {
    "subject_id": 3,
    "name": "History",
    "school_year_id": 1
  },
  {
    "subject_id": 4,
    "name": "English",
    "school_year_id": 2
  },
  {
    "subject_id": 5,
    "name": "Biology",
    "school_year_id": 2
  }
]

export const courses: Course[] = [
  {
    "course_id": 1,
    "name": "Grade 1",
    "parallel": "A",
    "school_year_id": 1
  },
  {
    "course_id": 2,
    "name": "Grade 2",
    "parallel": "B",
    "school_year_id": 1
  },
  {
    "course_id": 3,
    "name": "Grade 1",
    "parallel": "B",
    "school_year_id": 2
  },
  {
    "course_id": 4,
    "name": "Grade 3",
    "parallel": "A",
    "school_year_id": 2
  }
]

export const subject_assignments: SubjectAssignment[] = [
  {
    "assignment_id": 1,
    "course_id": 1,
    "subject_id": 1,
    "teacher_id": 1,
    "school_year_id": 1
  },
  {
    "assignment_id": 2,
    "course_id": 2,
    "subject_id": 2,
    "teacher_id": 2,
    "school_year_id": 1
  },
  {
    "assignment_id": 3,
    "course_id": 3,
    "subject_id": 4,
    "teacher_id": 3,
    "school_year_id": 2
  },
  {
    "assignment_id": 4,
    "course_id": 4,
    "subject_id": 5,
    "teacher_id": 4,
    "school_year_id": 2
  }
]

export const students: Student[] = [
  {
    "student_id": 1,
    "user_id": 11,
    "tutor_id": 1,
    "current_course_id": 1,
    "school_year_id": 1
  },
  {
    "student_id": 2,
    "user_id": 12,
    "tutor_id": 2,
    "current_course_id": 1,
    "school_year_id": 1
  },
  {
    "student_id": 3,
    "user_id": 11,
    "tutor_id": 3,
    "current_course_id": 3,
    "school_year_id": 2
  },
  {
    "student_id": 4,
    "user_id": 13,
    "tutor_id": 4,
    "current_course_id": 4,
    "school_year_id": 2
  }
]

export const grades: Grade[] = [
  {
    "grade_id": 1,
    "student_id": 1,
    "subject_id": 1,
    "period": "Q1",
    "exam": 85,
    "assignment": 90,
    "project": 88,
    "final_grade": 88
  },
  {
    "grade_id": 2,
    "student_id": 2,
    "subject_id": 1,
    "period": "Q1",
    "exam": 78,
    "assignment": 82,
    "project": 80,
    "final_grade": 80
  },
  {
    "grade_id": 3,
    "student_id": 3,
    "subject_id": 4,
    "period": "Q1",
    "exam": 92,
    "assignment": 88,
    "project": 91,
    "final_grade": 90
  },
  {
    "grade_id": 4,
    "student_id": 4,
    "subject_id": 5,
    "period": "Q1",
    "exam": 75,
    "assignment": 80,
    "project": 78,
    "final_grade": 78
  }
]

export const user_assignments: UserAssignment[] = [
  {
    "user_assignment_id": 1,
    "user_id": 2,
    "course_id": 1,
    "school_year_id": 1
  },
  {
    "user_assignment_id": 2,
    "user_id": 2,
    "course_id": 2,
    "school_year_id": 1
  },
  {
    "user_assignment_id": 3,
    "user_id": 4,
    "course_id": 2,
    "school_year_id": 2
  }
]

  