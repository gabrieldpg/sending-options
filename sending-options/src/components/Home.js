import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Constants from '../constants/documentOptions';

function Home() {
    
    const url = Constants.TEST_FORM.replace(/ /g, '-').toLowerCase();

    return (
        <NavLink to={ url }> { Constants.TEST_FORM } </NavLink>
    );
}

export default Home;