import { Box, Container } from "@chakra-ui/react";
import React, {FC, useRef} from "react";


const VideoPlayer: FC<{src: string}> = ({src}) => {
    const videoElement = useRef(null)

    return (
        <>
            <Box borderRadius={'2xl'}>
                <video ref={videoElement}>
                    <source type="video/mp4" src={src} />
                </video>
            </Box>
        </>
    )
}

export default VideoPlayer;
