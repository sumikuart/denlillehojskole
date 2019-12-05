// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './langekurser.style.css'

// Context:
import { kurserContext } from '../../../context/kortekurser.context';
import { holdContext } from '../../../context/elevhold.context';


// images:

const HoldListPoster = (props) => {
    return (
        <li><NavLink to={'./tilmeld/langeKurser/' + props.currentHold.id}>{props.currentHold.navn + ', ' + props.currentHold.dato + ', ' + props.currentHold.varighed}</NavLink></li>
    )
}

const LangekurserComponent = () => {

    // Context:
    const { kurser } = useContext(kurserContext);
    const { hold } = useContext(holdContext);


    // State:



    const mapperElevhold = (e) => {

        return hold.map(function (currentHold, i) {

            return <HoldListPoster currentHold={currentHold} key={i} />

        })

    }

    return (
        <div className="langekursusStyle">

            <div className="imgSection">

                <div className='omImgContainer' >

                    <img src={window.location.origin + '/assets/langekurser/langekurser.png'} alt="" />

                </div>

            </div>


            <div className='langekurserContent'>

                <p className='headline'>LANGE KURSER - FORLØB</p>

                <div className='kommendeElevContent'>

                    <p className='headline'>KOMMENDE ELEVHOLD</p>

                    <ul>

                        {mapperElevhold()}

                    </ul>

                </div>


                <div className='langKursusTextContent'>

                    <p className='underheadline'>De første dage på højskolen</p>
                    <p className='bread'>I dine første dage på Den lille højskole bruger vi tiden på at introducere alle vores linjefag og valgfag, således at du kan få valgt det skema, der passer præcis til dig. Via din tilmelding har du allerede markeret et uforpligtende valg af linjefag, men du vælger altså først definitivt dine fag i løbet af de første dage på skolen. Den almindelige skema-undervisning starter herefter onsdag eftermiddag.</p>
                    <p className='bread'>Sociale aktiviteter fylder meget i introugen, hvor vi gør rigtigt meget ud af at du hurtigt lærer dine nye højskole-kammerater godt at kende. Intro-ugen afsluttes altid med et brag af en fredags-fest, hvor du bl.a. vil opleve Nørgaards forrygende lærerband.</p>

                    <p className='underheadline'>Indkvartering</p>
                    <p className='bread'>Man indkvarteres på dobbeltværelse og får således en room-mate på sit højskoleophold. Ønsker man enkelt-værelse kan det imødekommes, men det koster ekstra (se menupunkt om priser & tilskud). Bemærk at vi har ganske få enkeltværelser til rådighed.</p>

                    <p className='underheadline'>Almindeligt skema</p>
                    <p className='bread'>Efter en tætpakket introuge, som har fået dig til at føle dig hjemme på højskolen, går de følgende uger med almindelig skemaundervisning via de mange spændende fag du har valgt. Hvis du har fortrudt nogle af dine valg ser vi gerne at du hurtigst muligt snakker med dine lærere om evt. at skifte.</p>

                    <p className='underheadline'>Filmskuespil</p>
                    <p className='bread'>Vælger du Filmskuespil skal du i løbet af dit ophold møde en række professionelle gæstelærere fra branchen (castere, instruktører m.fl.). Der er i den forbindelse en samlet merbetaling på 2.000 kr. hvis du vælger Filmskuespil.</p>

                    <p className='underheadline'>Storby-studieture</p>
                    <p className='bread'>Som elev på Den lille højskole kan du vælge mellem to studieture i løbet af dit ophold, nemlig Berlin eller New York. Berlin-turen er allerede betalt via tilmeldingsgebyret, men du har mulighed for at “opgradere” til en New York-tur mod en merbetaling på 8.500 kr. Begge ture er alt inklusive undtaget lommepenge</p>

                </div>

                <div className='tilmeldDiv'>

                    <NavLink to='./tilmeld/langeKurser/basic'>
                        <p className='symbol'>&radic;</p>
                        <p>Tilmeld dig her</p>
                    </NavLink>
                </div>

            </div>

        </div>




    )
}

export default LangekurserComponent