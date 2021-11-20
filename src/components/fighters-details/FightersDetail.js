import React from 'react';

import './FightersDetails.css';

export default function FighterDetails({ fighter }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <span className='title'>{fighter.name}</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-center'>
                    <img className='fighter' src={`/img/${fighter.img}`} alt={fighter.name}></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 text-center'>
                    <span className='description'>{fighter.description}</span>
                </div>
            </div>
        </div>
    );
}