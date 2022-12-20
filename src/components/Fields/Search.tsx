import React, {FC, useCallback, useState} from "react";
import { SearchProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";



const Search: FC<SearchProps> = ({placeholder, handler}) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([])
    
    

    const handleChange = useCallback(async (e : React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if(value.length < 3) return null;
        setSearchInput(value);

        handler(value, setSearchResults);
    }, [])
    

    return (
        <>
            <div className=" border-2 border-blue-200 rounded-md w-52">
                <div className=" mr-2 ml-2 flex flex-row">
                    <input 
                    className=" w-full border-transparent border-none focus:outline-none focus:border-transparent focus:ring-0 text-sm" type="text" placeholder={placeholder}
                    onChange={handleChange}/>
                    <div className=" text-right">
                        <FontAwesomeIcon className=" text-right text-sm text-gray-500" icon={faSearch} />
                    </div>
                </div>
            </div>
            <div className="">

            </div>
        </>
    )
}

export default Search;