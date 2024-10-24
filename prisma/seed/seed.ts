/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";
import { copycat } from '@snaplet/copycat';


const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();

  await seed.user((x) => x(1, ({ seed }) => ({
    name: 'admin',
    password: 'admin',
    email: copycat.email(seed, { domain: 'fake.com' }),
    role: 'admin'
  })));

  // Student
  const studentsLimit = 10
  const { user: userStudent } = await seed.user((x) => x(studentsLimit, ({ seed }) => ({
    name: copycat.fullName(seed),
    password: copycat.password(seed),
    email: copycat.email(seed, { domain: 'fake.com' }),
    role: 'student'
  })));

  const { student } = await seed.student((x) => x(studentsLimit, ({ seed }) => ({
    address: copycat.streetAddress(seed),
    phone: copycat.phoneNumber(seed)
  })), { connect: { user: userStudent } });

  // Parent
  const parentsLimit = 10
  const { user: usersParent } = await seed.user((x) => x(parentsLimit, ({ seed }) => ({
    name: copycat.fullName(seed),
    password: copycat.password(seed),
    email: copycat.email(seed, { domain: 'fake.com' }),
    role: 'parent'
  })));

  const { parent } = await seed.parent((x) => x(parentsLimit, ({ seed }) => ({
    address: copycat.streetAddress(seed),
    phone: copycat.phoneNumber(seed)
  })), { connect: { user: usersParent } });

  // Teacher
  const teachersLimit = 10
  const { user: userTeacher } = await seed.user((x) => x(teachersLimit, ({ seed }) => ({
    name: copycat.fullName(seed),
    password: copycat.password(seed),
    email: copycat.email(seed, { domain: 'fake.com' }),
    role: 'teacher'
  })));

  const { teacher } = await seed.teacher((x) => x(teachersLimit, ({ seed }) => ({
    address: copycat.streetAddress(seed),
    phone: copycat.phoneNumber(seed)
  })), { connect: { user: userTeacher } });

  // AcademicYear
  const academicYearsLimit = 10

  const { academicYear } = await seed.academicYear((x) => x(academicYearsLimit, ({ seed }) => ({
    name: `Año escolar - ${seed}`
  })));

  // Course
  const coursesLimit = 10

  const { course } = await seed.course((x) => x(coursesLimit, ({ seed }) => ({
    name: `Curso - ${seed}`,
    description: copycat.words(seed, { max: 50 })
  })), { connect: { academicYear } });

  // Subject
  const subjectsLimit = 10
  const { subject } = await seed.subject((x) => x(subjectsLimit, ({ seed }) => ({
    name: `Asignatura - ${seed}`,
    description: copycat.words(seed, { max: 50 })
  })));

  // Classroom
  const classRoomLimit = 10

  const { classroom } = await seed.classroom((x) => x(classRoomLimit, ({ seed }) => ({
    name: `Aula - ${seed}`,
    capacity: copycat.int(seed, { min: 10, max: 31 })
  })))

  // Class
  const { class: classData } = await seed.class((x) => x(coursesLimit, ({ seed }) => ({
    comments: copycat.words(seed)
  })), { connect: { course, subject, teacher } });

  // Event
  const { event } = await seed.event((x) => x(10, ({ seed }) => ({
    title: `Evento ${seed}`
  })), { connect: { academicYear } });

  // Grade
  const gradeLimit = 30

  await seed.grade((x) => x(gradeLimit, ({ seed }) => ({
    score: copycat.float(seed, { min: 0, max: 10 }),
    description: copycat.words(seed)
  })), { connect: { student, class: classData } });

  // Schedule
  const { schedule: scheduleClass } = await seed.schedule((x) => x(10, ({ seed }) => ({
    startTime: "10:00",
    endTime: "12:00"
  })), { connect: { classroom, class: classData } });

  const { schedule: scheduleEvent } = await seed.schedule((x) => x(10, ({ seed }) => ({
    startTime: "13:00",
    endTime: "14:00"
  })), { connect: { classroom, event: event } });

  // Attendance
  const attendanceLimit = 50

  await seed.attendance((x) => x(attendanceLimit, ({ seed }) => ({
    comments: copycat.words(seed)
  })), { connect: { student, class: classData, schedule: [...scheduleClass, ...scheduleEvent] } });

  // await seed.setting((x) => x(10));

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();