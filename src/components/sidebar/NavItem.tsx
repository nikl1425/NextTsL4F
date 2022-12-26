
import { Link, Icon, Flex, FlexProps } from '@chakra-ui/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import FontAwesomeWrap from '../Icons/FontAwesomeWrap';
import React, { ReactText, FC } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const NavItem: FC<{icon: IconDefinition, children: JSX.Element}> = ({ icon, children }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;