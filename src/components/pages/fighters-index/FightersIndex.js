import React, { useState, useEffect } from 'react';

import './FightersIndex.css';
import { Link, useLocation } from 'react-router-dom';
import FighterDetails from './../../fighters-details/FightersDetail';
import Skills from './../../skills/skills';

export default function FightersIndex({ fighters }) {

    const useQuery = () => useLocation().search;

    const getCurrentQueryfromUrl = Number(useQuery().substring(1));

    const [currentQuery, setCurrentQuery] = useState(getCurrentQueryfromUrl || 0);
    const [fighterSelected, setFighterSelected] = useState(fighters[currentQuery]);

    const showFighterDetails = () => {

        setCurrentQuery(getCurrentQueryfromUrl);

        setFighterSelected(fighters[currentQuery]);

    };

    useEffect(showFighterDetails, [currentQuery, fighters, getCurrentQueryfromUrl]);

    return (
        <>
            <div className='d-flex justify-content-around align-items-start mx-5'>

                <div className='section-avatar'>
                    {fighters.map((fighter, idx) => {
                        return (
                            <Link to={`?${idx}`}>
                                <img className='avatar' src={`/img/${fighter.avatar}`} alt={fighter.name} />
                            </Link>
                        );
                    })}
                </div>
                <div className='section-fighter'>
                    <FighterDetails fighter={fighterSelected} />
                </div>
                <div className='section-skills'>
                    <Skills fighter={fighterSelected} />
                </div>
            </div>
        </>
    );
}
