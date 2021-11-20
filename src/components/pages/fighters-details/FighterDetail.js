import React, { Component } from 'react'


import fightersArray from './../../../fighter-info'
import './FighterDetails.css'


class FighterDetail extends Component {

    constructor() {

        super()

        this.state = { fighter: fightersArray[7] }
    }
    render() {

        return (

            <div className="container ">
                <div className="row">
                    <div className="col-12 text-center"><span className="title">{this.state.fighter.name}</span></div>
                </div>
                <div className="row">
                    <div className="col-12 text-center"><img className="fighter" src={`/img/${this.state.fighter.img}`} alt={this.state.fighter.name}></img></div>
                </div>
                <div className="row">
                    <div className="col-12 text-center"><span className="description">{this.state.fighter.description}</span></div>
                </div>
            </div>
        )
    }
}
export default FighterDetail;

