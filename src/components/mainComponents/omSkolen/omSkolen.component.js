// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './omSkolen.style.css'

// Context:
import { kurserContext } from '../../../context/kortekurser.context';
import { holdContext } from '../../../context/elevhold.context';


// images:
 
const HoldListPoster = (props) => {
    return(
        <li><NavLink to={'./tilmeld/langeKurser/' + props.currentHold.id}>{props.currentHold.navn +', '+ props.currentHold.dato + ', ' +  props.currentHold.varighed}</NavLink></li>
    )
}

const OmSkolenComponent = () => {

    // Context:
    const { kurser } = useContext(kurserContext);
    const { hold } = useContext(holdContext);


    // State:
    const [showImg, setShowImg] = useState(0)
    
    
    const moveOmImgleft = () => {   
        
            if ( showImg <kurser.length -1) {
                setShowImg(showImg + 1)
            } else if (showImg == kurser.length -1) {
                setShowImg(0)
            }

    }

    const moveOmImgright = () => {
        
        if ( showImg > 0) {
            setShowImg(showImg - 1)
        } else if (showImg == 0) {
            setShowImg(kurser.length -1)
        }

    }

    const mapperElevhold = (e) => {

        return hold.map(function(currentHold, i){
     
                return <HoldListPoster  currentHold={currentHold} key={i} />
            
        })

    }

    return(
        <div className="omSkolenStyle">

                <div className="imgSection">

                <div className='omImgContainer' >

                    <img src={window.location.origin + kurser[showImg].imgSrc} alt="" />

                </div>

                <div className='rightImgMover' onClick={moveOmImgright}>
                    <p>&#60;</p>
                </div>

                <div className='leftImgMover' onClick={moveOmImgleft}>
                    <p>&#62;</p>
                </div>

            </div>

            <div className="omSkolenContent">
                <p className='headline'>VELKOMMEN TIL DEN LILLE HØJSKOLE</p>

                <p>Den lille Højskole er højskolen med linjefag i foto, sangskriver, musik, E-musik, filmskuespil, dans, kunst, adventuresport og friluftsliv. <span></span>

                    Den lille Højskole tilbyder lange højskoleophold fra 13 og op til 21 uger, og tager på storbystudieture til Berlin og New York på alle ophold. <span></span>

                    Vi giver dig mulighed for at dyrke dine interesser, og opdage helt nye sider af dig selv gennem fag du måske slet ikke vidste du brændte for! <span></span>
                    
                    Hos os vil dit højskoleophold først og fremmest være drevet af din lyst til at dyrke det du holder af, og vi lover dig høj faglighed i alle de fag vi tilbyder. <span></span>

                    Vi tager imod dig med fantastiske rammer såvel inde som ude, et meget bredt fagudbud og ikke mindst et ungt og dedikeret lærerteam, som glæder sig til at møde dig og lære dig at kende. <span></span>
                </p>

                <div className='kommendeElevContent'>

                    <p className='headline'>KOMMENDE ELEVHOLD</p>
                    
                    <ul>

                        {mapperElevhold()}

                    </ul>

                    <div className='tilmeldDiv'>

                        <NavLink to='./tilmeld/langeKurser/basic'>
                            <p className='symbol'>&radic;</p>
                            <p>Tilmeld dig her</p>
                        </NavLink>
                    </div>

                </div>

            </div>

             



        </div>
    )
}

export default OmSkolenComponent