// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './navigation.style.css'

// Context:
import { kurserContext } from '../../../context/kortekurser.context';

// images:
import searchIcon from '../../../assets/search.png'

const CoursePoster = (props) => {


    return(
        <li><NavLink to={'/kortekurser/' + props.currentCourse.id}> {props.currentCourse.title} </NavLink></li>
    )

}


const NavigationsBar = () => {

    const { kurser } = useContext(kurserContext);


    const [ navFunctionState, setNavFunctionState] = useState(['nav'])
    console.log(kurser)

    const korteKurserMapper = (e) =>{

        return kurser.map(function(currentCourse, i){
                return <CoursePoster  currentCourse={currentCourse} key={i} />
        })

    }

const searchOrNavSelect = (e) => {

    if(navFunctionState == 'nav') {
        setNavFunctionState(['seach'])
    } else {
        setNavFunctionState(['nav'])
    }

}


    return(
        <div className="navStyle">


            <nav className={navFunctionState}>
                <ul className="topUl">
                    <li>
                        <NavLink to='/'>Lange kurser</NavLink>
                        <ul>
                            <li><NavLink to='/'>Priser og tilskud</NavLink></li>
                            <li><NavLink to='/'>Linjefag</NavLink></li>
                        </ul>
                    </li>

                    <li>
                        <NavLink to='/kortekurser'>Korte kurser</NavLink>
                        <ul>
                            {korteKurserMapper()}
                        </ul>
                    </li>

                    <li><NavLink to='/'>Studieture </NavLink></li>
                    <li><NavLink to='/'>Kursuscenter</NavLink></li>
                    <li><NavLink to='/'>Om skolen</NavLink></li>
                </ul>
            </nav>

            <div className="searchIconHolder" onClick={searchOrNavSelect}>
                <img src={searchIcon} alt="icon"/>
            </div>


                <form className={navFunctionState}>
                    <input type="text" placeholder="Search" className='textSearch'/>
                    <input type="submit" value="Søg"  className='submitSearch'/>
                </form>



        </div>
    )
}

export default NavigationsBar