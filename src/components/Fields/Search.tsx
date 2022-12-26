import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { SearchProps, SearchListElementProps } from "./types";
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeWrap from "../Icons/FontAwesomeWrap";


const Search: FC<SearchProps> = ({ placeholder, handler }) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const [showIcon, SetShowIcon] = useState(true);

    useEffect(() => {
        if (searchInput.length > 3) {
            const fetchData = async () => {
                const resp = await handler(searchInput);
                console.log("response", resp);

            }

            fetchData();
        }
    }, [searchInput, searchResults])

    const handleChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setSearchInput(value);
    }, []);

    const handleBlur = () => {
        setSearchInput("");
        console.log(searchInput)
        console.log("run")
        SetShowIcon(true);
    };

    const handleFocus = () => {
        SetShowIcon(false)
        console.log(showIcon)
    };

    return (
        <>
            <InputGroup>
                {showIcon ?
                    <InputLeftElement pointerEvents='none'h='full'color='blue.400'> <FontAwesomeWrap iconDef={faSearch} /> </InputLeftElement> : <></>}
                <Input 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                onChange={handleChange}
                rounded='lg' 
                focusBorderColor="blue.400" 
                size='sm' variant='outline' 
                placeholder={placeholder ? placeholder : "Søg efter kurser"} 
                width='64'
                value={searchInput}
                 />
            </InputGroup>
        </>
    )
}

export default Search;