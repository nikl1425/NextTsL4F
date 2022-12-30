import React, { FC } from "react";
import { SideBarProps } from "./types";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Box, Container, AvatarBadge, useColorModeValue, Flex, Text, Wrap, WrapItem, Avatar, Center } from '@chakra-ui/react';
import NavItem from './NavItem';
import { faBook, faHouse } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';


type LinkItem = {
    name: string
    link: string,
    iconDef: IconDefinition
}


const linkItems: Array<LinkItem> = [
    {
        name: "Hjem",
        link: "/",
        iconDef: faHouse
    },
    {
        name: "Kurser",
        link: "/course",
        iconDef: faBook
    }
]

const SideBarContent: FC<{active: boolean}> = (active) => {
    const name = 'Niklas Munkholm Hjort'

    return (
        <Box
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            h="full">
            <Flex h="40" alignItems="center" mx="8" justifyContent="space-between">
                <Container w='full' marginTop="10" marginBottom="10">
                    <Center>
                        {active ? (<Wrap marginLeft="auto" marginRight="auto">
                            <WrapItem>
                                <Avatar size='lg' name={name} src='https://bit.ly/kent-c-dodds'><AvatarBadge boxSize='0.8em' bg='green.300' /></Avatar>
                            </WrapItem>
                        </Wrap>) : <Box></Box>}
                        
                    </Center>
                    <Center>
                        <Text py='2' color='gray.500' fontSize='xs'>
                            {name}
                        </Text>
                    </Center>
                </Container>
            </Flex>
            {linkItems.map((item) => (
                <NavItem key={item.link} link={item.link} icon={item.iconDef} name={item.name} />
            ))}
        </Box>
    )
}


const SideBar: FC<SideBarProps> = ({active}) => {
    return (
        <Box h='full' minH="full">
            <SideBarContent active={active} />
        </Box>
    )
}

export default SideBar;