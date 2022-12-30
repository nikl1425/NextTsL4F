import React, { FC } from "react";
import { SideBarProps } from "./types";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Box, Drawer, DrawerContent, useColorModeValue, Flex, Text } from '@chakra-ui/react';
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

const SideBarContent: FC = () => {
    return (
        <Box
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}

            h="full">

            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
            </Flex>
            {linkItems.map((item) => (
                <NavItem key={item.link} link={item.link} icon={item.iconDef} name={item.name} />
            ))}
        </Box>
    )
}


const SideBar: FC<SideBarProps> = () => {

    const onClose = () => {

    }

    return (
        <Box h='full' minH="full">

            <SideBarContent />

        </Box>
    )
}

export default SideBar;