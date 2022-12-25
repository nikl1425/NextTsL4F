import React, {FC} from "react";
import { Button } from '@chakra-ui/react';

const Login: FC<{
    title: string, 
    border?: string,
    borderColor?: string,
    size: string,}> = ({title, border, borderColor, size}) => {

    return (
        <>
            <Button rounded='lg' w='75px' variant='solid' colorScheme='blue' size={size}>{title}</Button>
        </>
    )
}

export default Login;