import React, { Component } from 'react'
import './App.css'


class Snowman extends Component {

    render() {
        return (
            <div>
                <div className='hangmanContainer'>
                    <div className="hat">
                        <div className="hat__brim"></div>
                    </div>
                    <div className='head'>
                        <div className="head__eye head__eye--left"></div>
                        <div className="head__eye head__eye--right"></div>    
                        <div className="head__nose"></div>
                    </div> 
                    <div className="hat"></div>
                    <div className='body--top'>
                        <div className="body__button body__button--top"></div>
                        <div className="body__button body__button--middle"></div>
                        <div className="body__button body__button--bottom"></div>
                    </div>
                    <div className="body--bottom">

                    </div> 
                    
                    <div className='leftArm'></div>
                    <div className='rightArm'></div>
                </div>
                <div className='gameContainer'>
                    <h1>Currently Selected Guess is:</h1>
                    <h1>Your word is:</h1>
                    <h2>Your current guesses are:</h2>
                </div>
            </div>
        )
    }
}

export default Snowman