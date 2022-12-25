import React, { FC } from "react";
import { Grid, GridItem, Box, Container, Flex } from '@chakra-ui/react';
import NavBar from '../src/components/navBar/NavBar';

type Props = {
    children?: React.ReactNode
}


const Layout: FC<Props> = ({ children }) => {
    return (
        <Box display='block' h='full'>
            <Grid
                templateAreas={`
                "header header"
                  "nav main"`}
                gridTemplateRows={'50px 1fr '}
                gridTemplateColumns={'150px 1fr'}
                h='calc(100vh)'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' area={'header'}>
                    <NavBar />
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    Nav
                </GridItem>
                <GridItem  h='full' bg='green.300' area={'main'} overflowY='auto'>
                    <Box  >
                        {children}
                    </Box>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default Layout;