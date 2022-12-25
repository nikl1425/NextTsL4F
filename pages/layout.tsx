import React, { FC } from "react";
import { Grid, GridItem, Box, Container, Flex } from '@chakra-ui/react';
import NavBar from '../src/components/navBar/NavBar';
import { Bool } from "reselect/es/types";

type Props = {
    children?: React.ReactNode
}

const SIDEBAR_WIDTH: number = 15;


const SwitchItem: FC<{ active: Boolean, width: number }> = ({ active, width }) => {
    if (!active) {
        return <Box></Box>
    } else {
        return (
            <Box bg='blue.300' w={`${width}%`}>
                Nav
            </Box>
        )
    }
}

const Layout: FC<Props> = ({ children }) => {

    const sideBarActive = false;

    return (
        <Box margin='0' display='block' h='100vh'>
            <Flex h='full' w='full' grow='1' direction='column'>
                <Box>
                    <Container marginTop='4px' marginBottom='4px' maxW='full'>
                    <NavBar />
                    </Container>
                </Box>
                <Box h='100%' bg='blue.200' overflowY='auto'>
                    <Flex direction='row'>
                        <SwitchItem width={SIDEBAR_WIDTH} active={sideBarActive}/>
                        <Box w={sideBarActive ? `${100-SIDEBAR_WIDTH}%` : '100%'}>
                            {children}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box >
    )
}

export default Layout;