import React from 'react';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const Navbar = props => {
    const searchTextHandler = e => {
        props.setSearchText(e.target.value);
    }

    const submitSearchHandler = e => {
        e.preventDefault();

        props.searchHandler(props.searchText);
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <MenuIcon className="navbar__menuLeft" />
                <a href="/">
                    <img
                        className="navbar__logoLeft"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="youtube logo"
                    />
                </a>
            </div>
            <form>
                <div className="navbar__input">
                    <input value={props.searchText} onChange={searchTextHandler} type="text" placeholder="Search" />
                    <button onClick={submitSearchHandler} type="submit" className="navbar__inputButton">
                        <SearchIcon />
                    </button>
                </div>
            </form>
            <div className="navbar__icons">
                <VideoCallIcon className="navbar__icon" />
                <AppsIcon className="navbar__icon" />
                <NotificationsIcon className="navbar__icon" />
                <Avatar className="navbar__avatar" />
            </div>
        </div>
    );
};

export default Navbar;