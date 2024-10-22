/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();

  // Seed the database with 10 user
  await seed.user((x) => x(10));
  await seed.academicYear((x) => x(10));
  await seed.student((x) => x(10));
  await seed.parent((x) => x(10));
  await seed.teacher((x) => x(10));
  await seed.course((x) => x(10));
  await seed.subject((x) => x(10));
  await seed.classroom((x) => x(10))
  await seed.schedule((x) => x(10));
  await seed.class((x) => x(10));
  await seed.attendance((x) => x(10));
  await seed.grade((x) => x(10));
  await seed.event((x) => x(10));
  await seed.setting((x) => x(10));

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();