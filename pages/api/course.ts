import {
    getAllCourses, getCourseById, getCourseByTitle
} from '../../prisma/course';

import type { NextApiRequest, NextApiResponse } from 'next';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method){
            case 'GET': {
                if(req.query.id){
                    const id = req.query.id as string;
                    const course = await getCourseById(id);
                    return res.status(200).json(course);
                }
                if(req.query.title) {
                    const title = req.query.title as string;
                    const course = await getCourseByTitle(title);
                    return res.status(200).json(course)
                }
                else {
                    const courses = await getAllCourses();
                    return res.json(courses);
                }
            }
            // Add more methods
            default: break;
        }
    } catch (error: unknown)
    {
        if(error instanceof Error){
            return res.status(500).json({
                ...error,
                message: error.message
            });
        };

        return res.status(500);
    }
}


export default handle; 