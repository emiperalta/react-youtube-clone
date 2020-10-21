import React from 'react';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <MenuIcon />
                <img
                    className="navbar__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="youtube logo"
                />
            </div>
            <div className="navbar__input">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="navbar__icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar />
            </div>
        </div>
    );
};

export default Navbar;