import React from 'react';
import { NavLink } from 'react-router-dom';
import { documentOptions } from '../constants/documentOptions';

// Set strings to be used on this page
const HEADER_MSG = 'FlexiCards - Sending Options';
const CHOOSE_DOCUMENT = 'Choose which document you would like to send:';

function Home() {

    return (
        <div>
            <h1>{ HEADER_MSG }</h1>
            <h4>{ CHOOSE_DOCUMENT }</h4>
            <ul>
                { documentOptions.map(option => {
                    return <li><NavLink to={ option.url }> { option.message } </NavLink></li>
                }) }
            </ul>
        </div>
    );
}

export default Home;