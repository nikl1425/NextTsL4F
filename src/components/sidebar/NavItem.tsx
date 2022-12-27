
import { Link as ChakraLink, Icon, Flex, FlexProps } from '@chakra-ui/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import FontAwesomeWrap from '../Icons/FontAwesomeWrap';
import React, { ReactText, FC } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

/*
interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
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
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

*/

const NavItem: FC<{icon: IconDefinition, name: string, link: string}> = ({ icon, name, link }) => {
  return (
    <Link href={link}>
      <ChakraLink href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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
    </Link>
    
  );
};

export default NavItem;