import React, {FC} from "react";
import { SearchProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Search: FC<SearchProps> = ({placeholder}) => {

    

    return (
        <>
            <div className=" border-2 border-blue-200 rounded-md w-52">
                <div className=" mr-2 ml-2 flex flex-row">
                    <input className=" w-full border-transparent border-none focus:outline-none focus:border-transparent focus:ring-0 text-sm" type="text" placeholder={placeholder}/>
                    <div className=" text-right">
                        <FontAwesomeIcon className=" text-right text-sm text-gray-500" icon={faSearch} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;