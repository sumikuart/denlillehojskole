// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './footer.style.css'

// Context:


// images:
import fbLogo from '../../../assets/facebook-logo-button.png'


const Footer = () => {


    return(
        <div className="footerStyle">

            <div className='footerFlexContainer'>

                <div className="addressContainer">
                    <div className="mainInfo">
                        <p className='headliner'>Den Lille Højskole</p>
                        <p>Mindevej 19</p>
                        <p>8543 Hornslet</p>
                        <p>Danmark</p>
                    </div>

                    <div className="secondInfo">
                        <p>+45 77 34 77 22</p>
                        <p>info@dlhoejskole.dk</p>
                        <p>www.dlhoejskole.dk</p>
                        <img src={fbLogo} alt="Facebook"/>
                    </div>
                    
                </div>

                
                <div className="contactContainer">
                    <p className='headliner'>Spørg os</p>

                    <form>
                        <div className='flexerformfooter'> 
                                <input type="text" placeholder='Navn...'/>
                                <input type="text" placeholder='Email...'/>
                        </div>

                        <textarea  placeholder='Besked...'></textarea>
                        <input type="submit" value="Send"/>
                    </form>

                </div>


            </div>


        </div>
    )
}

export default Footer