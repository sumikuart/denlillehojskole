// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './linjefag.style.css'

// Context:
import { linjefagContext } from '../../../context/linjefag.context';



// images:
const LinjeFagPoster = (props) => {
    return(
        <div>
            <p className='fagHeadline'>{props.currentFag.navn}</p>
            <div className='fagFlexer'>
                <div className='fagIMG'>
                    <img src={window.location.origin +props.currentFag.imgSrc} alt=""/>
                </div>

                <div className='fagText'>
                    {props.currentFag.kortBeskrivelse}
                    <NavLink to={'/langekurser/linjefag/' + props.currentFag.navn }>læs mere....</NavLink>
                </div>
            </div>
        </div>
    )
}

const LinjefagComponent = () => {

    // Context:
    const { fag } = useContext(linjefagContext);


    const mapperLinjefag = (e) => {
        return fag.map(function(currentFag, i){
     
            return <LinjeFagPoster  currentFag={currentFag} key={i} />
        
    })
    }

    return (
        <div className="linjefagStyle">

            <div className="imgSection">

                <div className='omImgContainer' >

                    <img src={window.location.origin + '/assets/langekurser/linjefagbanner.png'} alt="" />

                </div>

            </div>

            <div className='linjefagContent'>

                <div className='linjefagTopContent'>
                    <p className='headline'>LINJEFAG </p>

                    <p className='bread'>
                    I dine første dage på Den lille højskole bruger vi en del tid på at introducere alle vores linjefag og valgfag således at du kan få valgt det skema der passer præcis til dig. Via din tilmelding har du allerede givet os en pejling på, hvilke linjefag du ønsker at følge, men du vælger altså først definitivt dine fag i løbet af de første dage på skolen.
                    </p>
                </div>

                
                <div className='linjefagBottomContent'>

                    {mapperLinjefag()}

                </div>

            </div>


    </div>




    )
}

export default LinjefagComponent