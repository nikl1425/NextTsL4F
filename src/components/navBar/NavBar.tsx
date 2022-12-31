
import Search from "../Fields/Search";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Course } from "@prisma/client";
import { Flex, Box, Spacer, Center, Container, Heading, Button } from '@chakra-ui/react';
import FontAwesomeWrap from "../Icons/FontAwesomeWrap";
import { faRocket, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import ToggleButton from "../Buttons/ToggleButton";
import { toggleSidebar } from "../../redux/reducers/appSlice";
import LoginButton from "../Buttons/LoginButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <Box h='full'>
                    <Flex h='full'>
                        <Container h='full'>
                            <Center h='full' textColor='green.300'>
                                <FontAwesomeWrap size={'2xl'} iconDef={faRocket} />
                            </Center>
                        </Container>
                        <Box h='full'>
                            <Center h='full'>
                                <Heading as='h1' size='lg' textColor='black'>Learn4Fun</Heading>
                            </Center>
                        </Box>
                        <Box marginLeft='2'>
                            <Center h='full'>
                                <ToggleButton dispatcher={toggleSidebar} size="sm" border="1px" borderColor="black" iconRef={faBars} iconSize="lg" />
                            </Center>
                        </Box>
                    </Flex>
                </Box>
                <Spacer />
                <Box h='full'>
                    <Center h='full'>
                        <Search handler={searchHandler} />
                    </Center>
                </Box>
                <Spacer />
                <Box >
                    <Container>
                        <Flex>
                            <Box marginRight='10px'>
                                <Center h='full'>
                                    <FontAwesomeIcon size="lg" icon={faBell} />
                                </Center>
                            </Box>
                            <Box marginRight='10px'>
                                <Center h='full'>
                                <FontAwesomeIcon size="lg" icon={faComment} />
                                </Center>
                            </Box>
                            <Box>
                                <LoginButton title="Login" size="sm" border="0px" borderColor="black" />
                            </Box>
                        </Flex>
                    </Container>
                </Box>
            </Flex>
        </>
    )
}

export default NavBar;