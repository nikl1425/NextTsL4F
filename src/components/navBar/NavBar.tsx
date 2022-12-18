import React, {FC} from "react";
import NavLink from "../link/NavLink";
import Login from "../Buttons/Login";
import Search from "../Fields/Search";

const NavBar: FC = () => {
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
                            <Search placeholder="Søg efter kurser"/>
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