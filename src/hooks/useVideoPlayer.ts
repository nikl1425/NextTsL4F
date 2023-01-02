import React, { useState, useEffect, Ref, RefObject } from "react";


type PlayState = {
    isPlaying: boolean,
    progress: number,
    speed: number,
    mute: boolean
}

const useVideoPlayer = (videoElement : RefObject<HTMLVideoElement>) => {
    const [playerState, setPlayerState] = useState<PlayState>({isPlaying: false, progress: 0, speed: 1, mute: false});

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying
        });
    }
    
    useEffect(() => {
        playerState.isPlaying
          ? videoElement.current?.play()
          : videoElement.current?.pause();
      }, [playerState.isPlaying, videoElement]);

}



