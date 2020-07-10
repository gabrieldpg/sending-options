import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cards } from '../constants/cards';

// Set strings to be used on this page
const CHOOSE_CARD = 'Choose which card this document is for:';

function CardOptions() {

    const { pathname } = useLocation();

    return (
        <div>
            <h4>{ CHOOSE_CARD } </h4>
            <ul>
                { cards.map(card => {
                    return <li><NavLink to={ pathname+'/'+card.url }> { card.message } </NavLink> </li>
                }) }
            </ul>
        </div>
    );
}

export default CardOptions;