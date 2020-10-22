import React from 'react';
import './Video.css';

const Video = props => {
    let thumbnail = props.video.snippet.thumbnails.medium.url;

    return (
        <div className="videoItem" onClick={() => props.onVideoSelectHandler(props.video)}>
            <img src={thumbnail} alt="thumbnail" />
            <b>{props.video.snippet.title}</b>
        </div>
    );
};

export default Video;