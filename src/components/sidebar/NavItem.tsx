
import { Link as ChakraLink, Icon, Flex, FlexProps } from '@chakra-ui/react';
import FontAwesomeWrap from '../Icons/FontAwesomeWrap';
import React, { FC } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

const NavItem: FC<{icon: IconDefinition, name: string, link: string}> = ({ icon, name, link }) => {
  return (
      <ChakraLink as={NextLink}  href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          >
          {icon && (<FontAwesomeWrap iconDef={icon}/>)}
          {name}
        </Flex>
      </ChakraLink>
  );
};

export default NavItem;