import React from 'react';
import Video from './Video';
import './VideoList.css'

const VideoList = props => {
    return (
        <div className="videoList">
            {props.videos.map(video =>
                <Video
                    video={video}
                    onVideoSelectHandler={props.onVideoSelectHandler}
                />
            )}
        </div>
    );
};

export default VideoList;