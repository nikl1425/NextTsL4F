import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem, Box, Container, Flex, Slide, Collapse } from '@chakra-ui/react';
import NavBar from '../src/components/navBar/NavBar';
import SideBar from "../src/components/sidebar/SideBar";
import { Bool } from "reselect/es/types";
import useAppSelector from '../src/redux/hooks/useAppSelector';


type Props = {
    children?: React.ReactNode
}

const SIDEBAR_WIDTH: number = 250;


const Layout: FC<Props> = ({ children }) => {
    const sideBarActive = useAppSelector((state) => state.AppManager.sideBarActive);

    
    return (
        <Box margin='0' display='block' h='100vh'>
            <Flex h='full' w='full' grow='1' direction='column'>
                <Box bg='white' boxShadow='md'>
                    <Container marginTop='4px' marginBottom='4px' maxW='full'>
                        <NavBar />
                    </Container>
                </Box>
                <Box className="sideBar" h='100%' marginTop='10px' overflow='hidden'  bg='white'>
                    <Flex h="full">
                        
                            <Box bg="blue.200" h="full" w={sideBarActive ? `${SIDEBAR_WIDTH}px` : '0%'} transition="1s ease-in-out">
                                    <SideBar title="sidebar" />
                            </Box>
                            <Box bg='red.100' w="100%" overflowY='auto' >
                                {children}
                            </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box >
    )
}

export default Layout;