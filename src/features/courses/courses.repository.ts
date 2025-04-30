import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { CourseListElement, CreateCourse, DeleteCourse } from "./model/types";

class CoursesRepository {
  getCourses = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );
  deleteCourse = (deleteCourse: DeleteCourse) =>
    dbClient.course.delete({ where: { id: deleteCourse.id } });

  createCourse = (createCourse: CreateCourse) =>
    dbClient.course.create({ data: createCourse });
}

export const coursesRepository = new CoursesRepository();
