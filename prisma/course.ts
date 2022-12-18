import prisma from "./prisma";



export const getAllCourses = async () => {
    const courses = await prisma.course.findMany({})
    return courses;
}