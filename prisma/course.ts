import prisma from "./prisma";



export const getAllCourses = async () => {
    const courses = await prisma.course.findMany({})
    return courses;
}

export const getCourseById = async (id : string) => {
    const course = await prisma.course.findUnique({
        where : {id}
    });
    return course;
}

export const getCourseByTitle = async (title: string) => {
    const course = await prisma.course.findMany({
        where: {
            title: {contains: title}
        }
    });
    return course;
}