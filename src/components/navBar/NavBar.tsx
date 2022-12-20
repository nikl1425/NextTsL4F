import React, {Dispatch, FC, SetStateAction} from "react";
import NavLink from "../link/NavLink";
import Login from "../Buttons/Login";
import Search from "../Fields/Search";
import handle from "../../../pages/api/course";
import { useRouter } from "next/router";
import { getRouter } from "../../utility/getRouter";

type routerProps = {
    path: string,
    queries: {key: string, value: string}[];
}

const NavBar: FC = () => {
    const searchHandler = (title: string, dispatcher: Dispatch<SetStateAction<[]>>) => {
        let url = `/api/course`;

        let router = useRouter();

        router.pathname = url;
        router.query = {
            title
        }

        console.log(router);

        //const response = await fetch()
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