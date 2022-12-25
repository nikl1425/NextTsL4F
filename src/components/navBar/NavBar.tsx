
import NavLink from "../link/NavLink";
import Login from "../Buttons/Login";
import Search from "../Fields/Search";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Course } from "@prisma/client";
import { Flex, Box, Spacer, Center } from '@chakra-ui/react';

const NavBar: FC = () => {

    const searchHandler = async (search: string): Promise<Array<Course> | string> => {
        let url = `api/course?`;
        console.log(url + new URLSearchParams({ title: search }));
        const resp = await fetch(url + new URLSearchParams({ title: search }))

        try {
            const content = await resp.json();
            console.log(content)
            return content;
        }
        catch (e: any) {
            console.log("her")
            return e.message
        }
    };

    return (
        <>
            <Flex h='full'>
                <Box bg='red.500' h='full' />
                <Spacer />
                <Box h='full'>
                    <Center h='full'>
                        <Search handler={searchHandler} />
                    </Center>
                </Box>
                <Spacer />
                <Box bg='red.500' />
            </Flex>
        </>
    )
}

export default NavBar;