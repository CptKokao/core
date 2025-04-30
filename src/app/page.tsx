import { dbClient } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  const course = await dbClient.course.findMany();
  console.log(course);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button>Hello</Button>
      </main>
    </div>
  );
}
