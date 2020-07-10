import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import * as Constants from '../constants/cards';

function CardOptions() {

    const { pathname } = useLocation();
    const { document } = useParams();
    const cards = [Constants.QC, Constants.FFC, Constants.QMC, Constants.FLC, Constants.FAR];
    
    let cardOptions = cards.map(card => {
        const url = card.replace(/ /g, '-').toLowerCase();
        return (
            <div>
                <NavLink to={ pathname+'/'+url }> { card } </NavLink> 
                <br/>
        </div>);
    });

    return (
    <div>
        <div>CardOptions page for { document } </div>
        <br/>
        <div>Choose a card:</div>
        <br/>
        <div>{ cardOptions }</div>
    </div>
    );
}

export default CardOptions;