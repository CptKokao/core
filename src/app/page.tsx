import { Courses } from "@/features/courses/ui/courses";
import { dbClient } from "@/shared/lib/db";

export default async function Home() {
  const course = await dbClient.course.findMany();
  console.log(course);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {course.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
        <Courses id={course[0]?.id} />
      </main>
    </div>
  );
}
