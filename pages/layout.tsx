import React, {FC} from "react";
import styles from "../styles/layout.module.css";
import NavBar from "../src/components/navBar/NavBar";
import SideBar from "../src/components/sidebar/SideBar";
import Footer from "../src/components/footer/Footer";

type Props = {
    children?: React.ReactNode
}


const Layout : FC<Props> = ( { children } ) => {
    return (
        <>
        <div className=" h-screen">
            <div className=" flex h-full overflow-hidden">
                <div className="flex-1 flex flex-col">

                <header className=" flex justify-between items-center p-4 cs-h-1 border-solid border-b-2 border-black">
                    <NavBar />
                </header>
                
                <div className="flex cs-h-8 w-full">
                    <div className=" flex h-full">

                        <div className="flex w-56 h-full bg-pink-500">
                            <h1>Sidebar</h1>
                        </div>

                        <div className="  flex flex-1 overflow-y-auto">
                            {children}
                        </div>

                    </div>
                </div> 
                
                <footer className="flex flex-0 items-center bg-blue-300 p-4 cs-h-1">
                    <h1>Footer</h1>
                </footer>  

                </div>
            </div>
        </div> 
        </>
    )
}

export default Layout;