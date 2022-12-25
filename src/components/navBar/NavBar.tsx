
import NavLink from "../link/NavLink";
import Login from "../Buttons/Login";
import Search from "../Fields/Search";
import React, {Dispatch, FC, SetStateAction} from "react";
import { Course } from "@prisma/client";

const NavBar: FC = () => {
    
    const searchHandler = async (search: string): Promise<Array<Course> | string> => {
        let url = `api/course?`;
        console.log(url + new URLSearchParams({ title: search }));
        const resp = await fetch(url + new URLSearchParams({ title: search }))

        try
        {
            const content = await resp.json();
            console.log(content)
            return content;
        }
        catch(e: any) 
        {
            console.log("her")
            return e.message
        }
    };

    return (
        <>
        <div className="w-full " >
            <div className="flex flex-row">
                    <div className="w-1/3">
                        <div>
                            <h2>left</h2>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex flex-row justify-center">
                            <Search handler={searchHandler} placeholder="Søg efter kurser"/>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="right-0">
                            <div className="flex flex-row justify-end">
                                <div className="">
                                    <NavLink href="/forum" title="Forum" />
                                </div>

                                <div className="">
                                    <Login title="Login" handler={() => {console.log("login")}}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
        </>
    )
}

export default NavBar;