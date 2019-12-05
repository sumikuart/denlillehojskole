// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './kursuscenter.style.css'

// Context:



// images:
import topimg from '../../../assets/kursuscenter.jpg'
import logo from '../../../assets/logo.png'

const KursuscenterComponent = () => {


    

    return(
        <div className="kursercenterStyle">

            <div className='imgContainer'>
                <img src={topimg} alt=""/>
            </div>

            <div className='kurususcenterContent'>

                <div className='infoText'> 

                <p className='headline'>KURSUSCENTER</p>

                <p>Den lille højskole ligger central placeret midt imellem Aarhus og Grenaa. Med en bred vifte af faciliteter i moderne bygninger og en beliggenhed i yderst attraktive omgivelser midt i Gudenådalen, fremstår Nørgaards Højskoles Kursuscenter som et ideelt udgangspunkt for inspiration, læring og samvær. Kursister kan reservere egen opholdsstue, hvilket betyder at kursusprocessen fortsætter, når undervisningslokalerne forlades, ligesom man er velkommen til at benytte højskolens mange skønne faciliteter og nærliggende rekreative arealer</p>

                <p className='smallHeadline'>INDKVARTERING</p>
                
                <p>Den lille højskole Kursuscenter tilbyder særdeles fine overnatningsmuligheder. Vi råder over 105 dobbeltværelser, som alle er udstyrede med toilet, bad, wifi, stol, skab og skrivebord.</p>

                <p className='smallHeadline'>MØDE OG KONFERENCEFACILITETERNE</p>
                
                <p>Omfatter grupperum, plenumlokaler, foredragssal samt multisal med plads til op til 350 deltagere samt fuldt udstyrede IT-lokaler med internetforbindelse. Vi råder over alt det gængse AV-udstyr heriblandt storskærmsprojektorer, OH-projektorer, mikrofoner, højttaleranlæg, DVD, CD mv. Vi dækker jeres behov efter aftale.</p>


                <p className='smallHeadline'>FORPLEJNING</p>
                
                <p>Den lille højskole økologiske køkken bærer Fødevarestyrelsens Elite-smiley og lægger vægt på årstidens råvarer, sund kost og varieret hverdagsmad. Dagens hovedmåltider serveres som buffet, med et bredt udvalg</p>

                <p>i prisen for New York-turen er inkulderet fly, fuld forplejning, entreer, transportudgifter i New York ect.</p>

                </div>

                <div className='signaturCenter'>
                    <p className='superheadline'>Velkommen på</p>
                    <img src={logo} alt="den lille hojeskole logo"/>
                </div>
            </div>


    
        </div>
    )
}

export default KursuscenterComponent