import ReactPlayer from "react-player";
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

type VideoPlayerStyle = {
    color?: string,
    borderRadius?: string,
}


const CsReactPlayer: FC<{ link: string }> = ({ link }) => {
    return (
        <Box h={'full'}>
            <ReactPlayer playing={true} height={'100%'}  width={'100%'} controls={true} url={link} light={true} />
        </Box>

    )
}

export default CsReactPlayer;