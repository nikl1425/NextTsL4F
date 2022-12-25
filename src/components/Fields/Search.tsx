import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { SearchProps, SearchListElementProps } from "./types";
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeWrap from "../Icons/FontAwesomeWrap";


const Search: FC<SearchProps> = ({ placeholder, handler }) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([])

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

    let handleBlur = () => {
        setSearchInput("");
    };

    const handleFocus = () => { };

    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<FontAwesomeWrap iconDef={faSearch} />}
                    h='full'
                    color='blue.400'
                />
                <Input rounded='lg' focusBorderColor="blue.400" size='sm' variant='outline' placeholder="Søg efter kurser" width='64'/>
            </InputGroup>
        </>
    )
}

export default Search;