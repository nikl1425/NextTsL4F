
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
import styles from './ReactPlayer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

type VideoPlayerStyle = {
    color?: string,
    borderRadius?: string,
}

const PlayIcon: FC = () => (
    <Box textColor={'green.300'}>
        <FontAwesomeIcon size={'5x'} icon={faPlayCircle} />
    </Box>
);


const CsReactPlayer: FC<{ link: string }> = ({ link }) => {


    return (
        <Box position={'relative'} paddingTop={'56.25%'}>
            <ReactPlayer playIcon={<PlayIcon />} className={styles.react_player} playing={true} height={'100%'} width={'100%'} controls={true} url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} light={true} />
        </Box>
    )
}

export default CsReactPlayer;