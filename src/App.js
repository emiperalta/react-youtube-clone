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
		console.log(response.data.items);
	}

	return (
		<div className="App">
			<Navbar
				searchHandler={searchHandler}
				searchText={searchText}
				setSearchText={setSearchText}
			/>
			<VideoDetail selectedVideo={selectedVideo} videos={videos} />
			<VideoList />
		</div>
	);
};

export default App;