"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses/courses.repository";

const testCourse = {
  name: "Test",
  description: "Lorem ipsum dolor sit amet.",
};

export const remove = async (id: string) => {
  await coursesRepository.deleteCourse({ id });
  revalidatePath("/");
};

export const create = async () => {
  await coursesRepository.createCourse(testCourse);
  revalidatePath("/");
};
