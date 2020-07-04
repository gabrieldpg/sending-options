import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Constants from '../constants/cards';

class CardOptions extends Component {

    renderCardOptions() {

        const cards = [Constants.QC, Constants.FFC, Constants.QMC, Constants.FLC, Constants.FAR];
        
        let cardOptions = cards.map(card => {
            const url = card.replace(/ /g, '-').toLowerCase();
            return (
                <div>
                    <NavLink to={ this.props.location.pathname+'/'+url }> { card } </NavLink> 
                    <br/>
            </div>);
        });

        return cardOptions;
    }

    render() {

        return (
        <div>
            <div>CardOptions page for { this.props.match.params.document } </div>
            <br/>
            <div>Choose a card:</div>
            <br/>
            <div>{ this.renderCardOptions() }</div>
        </div>
        );
    }
}

export default CardOptions;