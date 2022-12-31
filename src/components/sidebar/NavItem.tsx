
import { Link as ChakraLink, Box, Flex, Text, useColorModeValue, Center, Stack } from '@chakra-ui/react';
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
        my="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
      >
        <Box marginLeft="30%" >
          <Stack spacing={4} direction='row'>
            <Box height={6}>
              {icon && (<FontAwesomeIcon size='1x' icon={icon} />)}
            </Box>
            <Box height={6}>
              {name && (<Text marginLeft='1' fontSize='lg' fontWeight='md'>{name}</Text>)}
            </Box>
          </Stack>
        </Box>
      </Flex>
    </ChakraLink>
  );
};

export default NavItem;