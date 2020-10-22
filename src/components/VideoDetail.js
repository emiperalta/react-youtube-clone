import React from 'react';
import './VideoDetail.css';

const VideoDetail = props => {
    if (!props.selectedVideo)
        return <div className="noVideo"><h1>Search any video</h1></div>;

    console.log(props.selectedVideo);

    const videoSource = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
    const videoTitle = `${props.selectedVideo.snippet.title}`;
    const channelTitle = `${props.selectedVideo.snippet.channelTitle}`;
    const videoDescription = `${props.selectedVideo.snippet.description}`;

    return (
        <div className="videoDetail">
            <div className="videoDetail__player">
                <iframe title="Video Player" src={videoSource} />
            </div>
            <div className="videoDetail__info">
                <h2>{videoTitle}</h2>
                <h3>{channelTitle}</h3>
                <h4>{videoDescription}</h4>
            </div>
        </div>
    );
};

export default VideoDetail;