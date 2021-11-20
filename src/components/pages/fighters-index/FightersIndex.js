import React, { Component } from 'react';

import fightersArray from '../../../fighter-info'
import './FightersIndex.css'
import { Link } from 'react-router-dom'
import Fighter from '../fighters-details/FighterDetail'
import Skills from '../skills/skills'


class Fighters extends Component {

    constructor(props) {

        super(props)

        this.state = {

            fighters: fightersArray,

        }

    }

    componentDidMount() {

        console.log(this.props)
    }

    render() {

        return (
            <>
                <div className="d-flex justify-content-around align-items-start mx-5">
                    <div className="section-avatar">
                        {this.state.fighters.map((fighter, idx) => {

                            return (

                                <Link to={`?${idx}`}><img className="avatar" src={`/img/${fighter.avatar}`} alt={fighter.name} /></Link>

                            )
                        })}
                    </div>
                    <div className="section-fighter">
                        <Fighter />
                    </div>
                    <div className="section-skills">
                        <Skills />
                    </div>
                </div>
            </>
        )
    }
}

export default Fighters;