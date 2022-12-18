import React, {FC} from "react";
import { SearchProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const Search: FC<SearchProps> = ({placeholder}) => {

    

    return (
        <>
            <div className=" border-2 border-blue-500 rounded-lg">
                <div className=" mr-2 ml-2">
                    <input className="border-transparent border-none focus:outline-none focus:border-transparent focus:ring-0" type="text" placeholder={placeholder}/>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
        </>
    )
}

export default Search;