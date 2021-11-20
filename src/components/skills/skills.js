import React from 'react';

export default function Skills({ fighter }) {
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-12 px-5'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <span className='title'>Skills</span>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 text-left'>
                            <span className='description'>SPEED</span>
                        </div>
                        <div className='col-6 text-left'>
                            <span className='description'>{fighter.speed}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <span className='description'>STRENGTH</span>
                        </div>
                        <div className='col-6 text-left'>
                            <span className='description'>{fighter.strength}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <span className='description'>DEFENSE</span>
                        </div>
                        <div className='col-6 text-left'>
                            <span className='description'>{fighter.defense}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <span className='description'>COOLDOWN</span>
                        </div>
                        <div className='col-6 text-left'>
                            <span className='description'>{fighter.cooldown}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <span className='description'>ACCURACY</span>
                        </div>
                        <div className='col-6 text-left'>
                            <span className='description'>{fighter.accuracy}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
