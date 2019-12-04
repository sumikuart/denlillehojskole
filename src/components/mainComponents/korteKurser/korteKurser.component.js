// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './korteKurser.style.css'

// Context:
import { kurserContext } from '../../../context/kortekurser.context';


// images:

const KurserTilmeldingTabelPoster = (props) => {
    return(

                    <tr>
                        <td>{props.currentHold.title}</td>
                        <td>{props.currentHold.start}</td>
                        <td>{props.currentHold.slut}</td>
                        <td>{props.currentHold.pris}</td>
                        <td>
                            <div className="tilmeldKnap">
                                <NavLink to={'/tilmeld/kortKurser/' + props.currentHold.id }>
                                    <p className='symbol'>&radic; Tilmeld dig her</p>
                                </NavLink>
                            </div>
                        </td>
                    </tr>


    )
}

const KorteKurserComponent = () => {

    // Context:
    const { kurser } = useContext(kurserContext);
  

    
    const mapKorteKurserTilmeldingsTable = (e) => {

        return kurser.map(function(currentHold, i){
     
            return <KurserTilmeldingTabelPoster  currentHold={currentHold} key={i} />
        
    })

    }
    
    

    return(
        <div className="korteKurserStyle">

            <div className='imgContainer'>
                <img src={window.location.origin + kurser[3].imgSrc} alt=""/>
            </div>


            <div className="korteKurserTextContent">
                <p className='headline'>KORTE KURSER PÅ DEN LILLE HØJSKOLE</p>


                <p>Velkommen til alle. Vi glæder os meget til at møde både nye kursister og gamle kendinge. <span></span>
                    Højskolen er kendt for at have højt til loftet og plads til begejstring. <span></span>
                    Vi er desuden kendte for at have en god og varm omgangstone med respekt for det enkelte menneske.<span></span>
                    I hjemlige og hyggelige rammer vil du få input af forskellig karakter, så du på bare en enkelt uge vil være i stand til at flytte dig både fagligt og socialt.<span></span>
                </p>

            </div>
              
              <div className='kortekurserOversigt'>

                  <p className='headline'>KORTE KURSER</p>

                <table>
                    <tr>
                        <th>TITLE</th>
                        <th>START</th>
                        <th>SLUT</th>
                        <th>PRIS</th>
                        <th>TILMELDING</th>
                    </tr>
                   

                     {mapKorteKurserTilmeldingsTable()}

                </table>

              </div>
        </div>
    )
}

export default KorteKurserComponent