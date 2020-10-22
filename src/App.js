import React, { useState } from 'react';
import './App.css';
import Youtube from './api/Youtube';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const App = () => {
	const [searchText, setSearchText] = useState('');
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const searchHandler = async () => {
		const response = await Youtube.get('search', {
			params: {
				part: 'snippet',
				type: 'video',
				maxResults: 5,
				key: process.env.REACT_APP_API_KEY,
				q: searchText
			}
		});

		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	}

	const onVideoSelectHandler = video => {
		setSelectedVideo(video);
		setSearchText(video.snippet.title);
		searchHandler(searchText);
	}

	return (
		<div className="App">
			<Navbar
				searchHandler={searchHandler}
				searchText={searchText}
				setSearchText={setSearchText}
			/>
			<div className="videoPage">
				<div className="videoPage__video">
					<VideoDetail selectedVideo={selectedVideo} />
				</div>
				<div className="videoPage__list">
					<VideoList
						videos={videos}
						onVideoSelectHandler={onVideoSelectHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;