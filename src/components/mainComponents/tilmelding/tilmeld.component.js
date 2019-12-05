// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './tilmeld.style.css'

// Context:
import { kurserContext } from '../../../context/kortekurser.context';
import { holdContext } from '../../../context/elevhold.context';


// images:

const HoldOptionsPoster = (props) => {
    return (
        <option value={props.currentHold.id}> {props.currentHold.navn + ', ' + props.currentHold.dato + ', ' + props.currentHold.varighed} </option>
    )
}

const KurserOptionsPoster = (props) => {
    return (
        <option value={props.currentHold.id}> {props.currentHold.title} </option>
    )
}

const TilmeldComponent = (props) => {

    const { kurser } = useContext(kurserContext);
    var kursusType = props.match.params.type

    const { hold } = useContext(holdContext);


    const [longName, setLongName] = useState([{ name: 'a' }])


    const holdMapper = (e) => {
        return hold.map(function (currentHold, i) {

            return <HoldOptionsPoster currentHold={currentHold} key={i} />

        })
    }

    const mapKurser = (e) => {
        return kurser.map(function (currentHold, i) {

            return <KurserOptionsPoster currentHold={currentHold} key={i} />

        })
    }

    const langHandelName = (e) => {
        setLongName([{ name: e.target.value }]);
    }

    return (
        <div className="tilmeldStyle">

            <div className='imgContent'>
                <img src={window.location.origin + kurser[3].imgSrc} alt="" />
            </div>


            <div className='tilmeldContent'>

                <div className='CoursLengthContainer'>

                    <div className='kortCourse'>

                        <NavLink to='/tilmeld/kortKurser/basic'>Korte Kurser</NavLink>

                    </div>

                    <div className='langCourse'>

                        <NavLink to='/tilmeld/langeKurser/basic'>Lange Kurser</NavLink>

                    </div>

                </div>


                <div className={'formMappterDiv'}>

                    <div className={'langdiv ' + kursusType}>
                        {/* HUSK AT LAV ONCHANGE OG PUT DEM I STATE */}

                        <p className='headline'> LANGE KURSER: </p>

                        <form>

                            <div className='selectFormFlexer'>
                                <label>Vælg Hold:</label>
                                <select>
                                    <option>vælg Hold</option>
                                    {holdMapper()}
                                </select>

                                <label>Valg af linjefag:</label>
                                <select>
                                    <option>vælg Linjefag</option>
                                    <option>FOTO</option>
                                    <option>SANGSKRIVER</option>
                                    <option>E-MUSIK</option>
                                    <option>DANS</option>
                                    <option>ADVENTURESPORT</option>
                                </select>

                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Fornavn:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>efternavn:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Adresse:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>Postnummer:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>By:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Mobil:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                                <div>
                                    <label>Mail:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                            </div>


                            <label>Bemærkninger:</label>
                            <textarea placeholder='skriv en bemærkning'></textarea>

                            <div className='formCenter'>
                                <label> Ønsker du at deltage i Studieturen:</label>
                                <select>
                                    <option>Nej</option>
                                    <option>Ja</option>
                                </select>
                            </div>

                        </form>
                        <div className='tilmeldDiv'>

                            <NavLink to='/'>
                                <p className='symbol'>&radic;</p>
                                <p>Tilmeld dig her</p>
                            </NavLink>
                        </div>
                    </div>

                    <div className={'kortdiv ' + kursusType}>

                        <p className='headline'> KORTE KURSER: </p>

                        <form>
                            <label>Vælg Kursus:</label>
                            <select>
                                <option>vælg kursus</option>
                                {mapKurser()}
                            </select>


                            <div className='formFlexer'>
                                <div>
                                    <label>Fornavn:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>efternavn:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                            </div>

                            <div className='formFlexer'>
                                <div>
                                    <label>Adresse:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>Postnummer:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>By:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                            </div>

                            <div className='formFlexer'>
                                <div>
                                    <label>Mobil:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>

                                <div>
                                    <label>Mail:</label>
                                    <input type="text" value={longName[0].name} onChange={langHandelName} />
                                </div>
                            </div>

                            <label>Bemærkninger:</label>
                            <textarea placeholder='skriv en bemærkning'></textarea>
                        </form>

                        <div className='tilmeldDiv'>

                            <NavLink to='/c'>
                                <p className='symbol'>&radic;</p>
                                <p>Tilmeld dig her</p>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TilmeldComponent