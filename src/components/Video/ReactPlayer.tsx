import ReactPlayer from "react-player";
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

type VideoPlayerStyle = {
    color?: string,
    borderRadius?: string,
}


const CustomReactPlayer: FC<{ link: string, videoStyle?: VideoPlayerStyle, lightMode?: boolean }> = ({ link, videoStyle, lightMode }) => {
    return (
        <Box as="div" borderRadius={'25px'} p={2}>
            <ReactPlayer style={{top: 0, bottom: 0}} width={'100%'} controls={true} url={link} light={lightMode ? lightMode : false} />
        </Box>
    )
}

export default CustomReactPlayer;