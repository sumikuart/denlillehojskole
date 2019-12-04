// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './tilmeld.style.css'

// Context:
import { kurserContext } from '../../../context/kortekurser.context';
import { holdContext } from '../../../context/elevhold.context';


// images:

const HoldOptionsPoster = (props) => {
    return(
        <option value={props.currentHold.id}> {props.currentHold.navn +', '+ props.currentHold.dato + ', ' +  props.currentHold.varighed} </option>
    )
}

const KurserOptionsPoster = (props) => {
    return(
        <option value={props.currentHold.id}> {props.currentHold.title} </option>
    )
}

const TilmeldComponent = (props) => {

    const { kurser } = useContext(kurserContext);
    var kursusType = props.match.params.type

    const { hold } = useContext(holdContext);


   const [longName, setLongName] = useState([{name:'a'}])


    const holdMapper = (e) => {
        return hold.map(function(currentHold, i){
     
            return <HoldOptionsPoster  currentHold={currentHold} key={i} />
        
    })
    }

    const mapKurser = (e) => {
        return kurser.map(function(currentHold, i){
     
            return <KurserOptionsPoster  currentHold={currentHold} key={i} />
        
    })
    }

const langHandelName = (e) => {
setLongName([{name: e.target.value}]);
}

    return(
        <div className="tilmeldStyle">

            <div className='imgContent'>
                <img src={window.location.origin + kurser[3].imgSrc} alt=""/>
            </div>

            <div className='CoursLengthContainer'>

                <div className='kortCourse'>

                    <NavLink to='/tilmeld/kortKurser/basic'>Korte Kurser</NavLink>

                </div>

                <div className='langCourse'>

                    <NavLink to='/tilmeld/langeKurser/basic'>Lange Kurser</NavLink>

                </div>

            </div>

            <p> {kursusType} </p>

            <div className={'formMappterDiv'}>
                <div className={'langdiv ' + kursusType}>
                    {/* HUSK AT LAV ONCHANGE OG PUT DEM I STATE */}

                   <form>
                        <label>Vælg Hold:</label>
                        <select>
                            {holdMapper()}
                        </select>

                        <label>Valg af linkefag:</label>
                        <select>
                            <option>FOTO</option>
                            <option>SANGSKRIVER</option>
                            <option>E-MUSIK</option>
                            <option>DANS</option>
                            <option>ADVENTURESPORT</option>
                        </select>

                        <label>Fornavn:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>
                         
                        <label>efternavn:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                        <label>Adresse:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Postnummer:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         
                         <label>By:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Mobil:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Mail:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Bemærkninger:</label>
                         <textarea></textarea>

                         <label>Studietur:</label>

                   </form>

                </div>
               
                <div className={'kortdiv ' + kursusType}>
                    <form>
                        <label>Vælg Kursus:</label>
                        <select>
                           {mapKurser()}
                        </select>
                   

                        <label>Fornavn:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>
                         
                        <label>efternavn:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                        <label>Adresse:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Postnummer:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         
                         <label>By:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Mobil:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Mail:</label>
                         <input type="text" value={longName[0].name} onChange={langHandelName}/>

                         <label>Bemærkninger:</label>
                         <textarea></textarea>
                    </form>
                </div>
      

            </div>
        </div>
    )
}

export default TilmeldComponent