import React from 'react';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const Navbar = () => {
    const submitHandler = e => {
        console.log(e);
    };

    return (
        <div className="navbar">
            <div className="navbar__left">
                <MenuIcon className="navbar__menuLeft" />
                <img
                    className="navbar__logoLeft"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="youtube logo"
                />
            </div>
            <form>
                <div className="navbar__input">
                    <input type="text" placeholder="Search" />
                    <SearchIcon className="navbar__inputButton" />
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