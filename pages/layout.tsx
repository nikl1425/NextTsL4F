import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem, Box, Container, Flex, Slide } from '@chakra-ui/react';
import NavBar from '../src/components/navBar/NavBar';
import SideBar from "../src/components/sidebar/SideBar";
import { Bool } from "reselect/es/types";
import useAppSelector from '../src/redux/hooks/useAppSelector';


type Props = {
    children?: React.ReactNode
}

const SIDEBAR_WIDTH: number = 15;


const SwitchItem: FC<{ active: Boolean, width: number }> = ({ active, width }) => {
    if (!active) {
        return <Box transition="linear" transitionDuration='300ms'></Box>
    } else {
        return (
            <Box transition="linear" transitionDuration='300ms'bg='white' w={`${width}%`}>
                <SideBar title="sidebar" />
            </Box>
        )
    }
}

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
                <Box h='100%' marginTop='10px' overflowY='auto' bg='white'>
                    <Flex direction='row'>
                            <SwitchItem width={SIDEBAR_WIDTH} active={sideBarActive} />
                            <Box transition="linear" transitionDuration='300ms' w={sideBarActive ? `${100 - SIDEBAR_WIDTH}%` : '100%'}>
                                {children}
                            </Box>
                        
                    </Flex>
                </Box>
            </Flex>
        </Box >
    )
}

export default Layout;