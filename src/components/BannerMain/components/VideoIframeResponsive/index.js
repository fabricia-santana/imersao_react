import React from 'react';
import {VideoContainer, ResponsiveIFrame} from './style';

function VideoIframeResponsive({youtubeID}){
    return(
        <VideoContainer>
            <ResponsiveIFrame
                title="Título do Iframe"
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoContainer>
    );
}

export default VideoIframeResponsive;
