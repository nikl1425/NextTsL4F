
import { Link as ChakraLink, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import FontAwesomeWrap from '../Icons/FontAwesomeWrap';
import React, { FC } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem: FC<{ icon: IconDefinition, name: string, link: string }> = ({ icon, name, link }) => {
  return (
    <ChakraLink as={NextLink} href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex  
        p="2"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
      >
        <Box marginLeft="30%" >
          <Flex>
            <Box w="5" marginRight="2">
              {icon && (<FontAwesomeIcon size='1x' icon={icon} />)}
            </Box>
            <Box>
              {name && (<Text marginLeft='1' fontSize='lg' fontWeight='md'>{name}</Text>)}
            </Box>
          </Flex>

        </Box>


      </Flex>
    </ChakraLink>
  );
};

export default NavItem;