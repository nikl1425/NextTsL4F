import React, { FC, useEffect, useState } from "react";
import { Box, Container, Flex } from '@chakra-ui/react';
import NavBar from '../src/components/navBar/NavBar';
import SideBar from "../src/components/sidebar/SideBar";
import useAppSelector from '../src/redux/hooks/useAppSelector';
import Footer from '../src/components/footer/Footer';


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
                <Box className="sideBar" height={'full'} marginTop='10px'  bg='white' overflow={'hidden'}>
                    <Flex height="full" >
                            <Box bg='white' boxShadow='md' height="full" w={sideBarActive ? `${SIDEBAR_WIDTH}px` : '0%'} marginRight={2} transition="1s ease-in-out">
                                    <SideBar active={sideBarActive} title="sidebar" />
                            </Box>
                            <Box  zIndex={1} w="full" height={'full'} >
                                <Box bg='white' height={'93%'} overflowY={'auto'}>
                                    {children}
                                </Box>
                                
                                <Box height={'7%'} boxShadow={'md'}>
                                    <Footer/>
                                </Box>
                            </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box >
    )
}

export default Layout;