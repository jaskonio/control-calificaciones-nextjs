```mermaid
erDiagram
    User {
      Int id PK
      String name
      String email
      String password
      UserRole role
      DateTime createdAt
      UserStatus status
    }
    AcademicYear {
      Int id PK
      String name
      DateTime startDate
      DateTime endDate
      AcademicYearStatus status
    }
    Student {
      Int id PK
      Int userId FK
      DateTime birthDate
      String address
      String phone
      DateTime enrollmentDate
      String gradeLevel
    }
    Parent {
      Int id PK
      Int userId FK
      String address
      String phone
    }
    Teacher {
      Int id PK
      Int userId FK
      String expertise
      String phone
      String address
      DateTime hireDate
      TeacherStatus status
    }
    Course {
      Int id PK
      String name
      String description
      Int academicYearId FK
      String gradeLevel
      CourseStatus status
    }
    Subject {
      Int id PK
      String name
      String description
      SubjectStatus status
    }
    Classroom {
      Int id PK
      String name
      Int capacity
    }
    Schedule {
      Int id PK
      Int classroomId FK
      Int classId FK
      Int eventId FK
      DayOfWeek dayOfWeek
      DateTime startTime
      DateTime endTime
      String description
    }
    Class {
      Int id PK
      Int courseId FK
      Int subjectId FK
      Int teacherId FK
      String comments
    }
    Attendance {
      Int id PK
      Int studentId FK
      Int classId FK
      Int scheduleId FK
      DateTime date
      AttendanceStatus attendanceStatus
      String comments
    }
    Grade {
      Int id PK
      Int studentId FK
      Int classId FK
      GradeType evaluationType
      Float score
      DateTime evaluationDate
      String description
    }
    Event {
      Int id PK
      Int academicYearId FK
      Int scheduleId FK
      String title
      String description
      DateTime date
      EventType eventType
    }
    Setting {
      Int id PK
      String key
      String value
      String description
    }

    User ||--|{ Student : "has"
    User ||--|{ Teacher : "has"
    User ||--|{ Parent : "has"
    AcademicYear ||--|{ Course : "contains"
    AcademicYear ||--|{ Event : "contains"
    Course ||--|{ Class : "contains"
    Class ||--|{ Schedule : "has"
    Class ||--|{ Attendance : "has"
    Class ||--|{ Grade : "contains"
    Event ||--|{ Schedule : "can have"
    Classroom ||--|{ Schedule : "has"
    Student ||--|{ Attendance : "recorded in"
    Student ||--|{ Grade : "receives"
    Schedule ||--o{ Attendance : "has"
    Schedule ||--o{ Event : "can be"
    Parent ||--o{ Student : "linked to"
    Teacher ||--o{ Class : "teaches"
    Course ||--o{ Subject : "related to"
```