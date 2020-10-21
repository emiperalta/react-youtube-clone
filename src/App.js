import React, { useState } from 'react';
import './App.css';
import Youtube from './api/Youtube';
import Navbar from './components/Navbar';

const App = () => {
	const [searchText, setSearchText] = useState('');

	return (
		<div className="App">
			<Navbar />
		</div>
	);
};

export default App;