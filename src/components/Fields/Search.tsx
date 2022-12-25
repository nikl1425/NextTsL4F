import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import { SearchProps, SearchListElementProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search: FC<SearchProps> = ({placeholder, handler}) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([])
    
    useEffect(() => {
        if(searchInput.length > 3){
            const fetchData = async () => {
                const resp = await handler(searchInput);
                console.log("response", resp);
                
            }

            fetchData();
        }
    }, [searchInput, searchResults])

    const handleChange = useCallback(async (e : React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setSearchInput(value);
    }, []);

    let handleBlur = () => {
        setSearchInput("");
    };

    const handleFocus = () => {};

    return (
        <>
            <div className=" border-2 border-blue-200 rounded-md w-52">
                <div className=" mr-2 ml-2 flex flex-row">
                    <input 
                    className=" w-full border-transparent border-none focus:outline-none focus:border-transparent focus:ring-0 text-sm" type="text" placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={searchInput}
                    onFocus={handleFocus}/>
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