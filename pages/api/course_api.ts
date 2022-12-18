import {
    getAllCourses
} from '../../prisma/course';

import type { NextApiRequest, NextApiResponse } from 'next';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method){
            case 'GET': {
                if(req.query.id){

                }else {
                    
                }
            }
        }
    } catch (error)
    {

    }
}


export default handle; 