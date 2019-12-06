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
        <option value={props.currentHold.navn}> {props.currentHold.title} </option>
    )
}

const TilmeldComponent = (props) => {

    const { kurser } = useContext(kurserContext);
    var kursusType = props.match.params.type

    const { hold } = useContext(holdContext);

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

    // Validering:

    const [Name, setName] = useState('');;
    const [lastName, setLastName] = useState('');;
    const [adresse, setAdresse] = useState('');;
    const [postnummer, setPostnummer] = useState('');;
    const [by, setBy] = useState('');;
    const [mobil, setMobil] = useState('');;
    const [mail, setMail] = useState('');;
    const [besked, setBesked] = useState('');;

    // Local - Kort:
    const [kursus, setKursus] = useState('none');

    // Local - lang
    const [holdData, setholdData] = useState('none');
    const [fagData, setFagData] = useState('none' );
    const [studieTurValg, setStudieTurValg] = useState('none' );

    const HandelName = (e) => {
        setName(e.target.value);
    }
    const HandelLastName = (e) => {
        setLastName(e.target.value);
    }
    const HandelAdresse = (e) => {
        setAdresse(e.target.value);
    }
    const HandelPostnummer = (e) => {
        setPostnummer(e.target.value);
    }
    const HandelBy = (e) => {
        setBy(e.target.value);
    }
    const HandelMobil = (e) => {
        setMobil(e.target.value);
    }
    const HandelMail = (e) => {
        setMail(e.target.value);
    }
    const HandelBesked = (e) => {
        setBesked(e.target.value);
    }

    const HandelKursus = (e) => {
        setKursus(e.target.value);
    }

    const HandelHoldData = (e) => {

        setholdData(e.target.value);
    }
    const HandelFagData = (e) => {
        setFagData( e.target.value );  
    }
    const HandelStudieTurValg = (e) => {
        setStudieTurValg( e.target.value );
    }

// VALIDERINGS FUNCTIONER: 
const [valideringsCounter, setValideringsCounter] = useState (0);


const [errorHoldData, setErrorHoldData] = useState('');
const [errorFagData, setErrorFagData] = useState('');
const [errorStudieTurValg, setErrorStudieTurValg] = useState('');

const [errorKurusValg, seterrorKurusValg] = useState('');





// LOCAL VALIDERING KORT:
const validerKursusData = (e) => {
    const data = kursus

    console.log(data)
    if(data == 'none') {
        seterrorKurusValg('Du Mangler at Vælge Kursus')
    } else {
        seterrorKurusValg('')
        setValideringsCounter(0)
    }
}


// LOCAL VALIDERING LANG:
const validerHoldData = (e) => {
    const data = holdData

    console.log(data)
    if(data == 'none') {
        setErrorHoldData('Du Mangler at Vælge Hold')
    } else {
        setErrorHoldData('')
        setValideringsCounter(0)
    }
}

const validerFagData = (e) => {
    const data = fagData
    if(data == 'none') {
        setErrorFagData('Du Mangler at vælge Fag')
    } else {
        setErrorFagData('')
        setValideringsCounter(0)
    }
}

const validerStudieturValg = (e) => {
    const data = studieTurValg
    if(data == 'none') {
        setErrorStudieTurValg('Du Mangler at vælge om du vil med på tur')
    } else {
        setErrorStudieTurValg('')
        setValideringsCounter(0)
    }
}



// Global Validering:

// Global Error: 
const [errorfornavn, setErrorfornavn] = useState('');
const [errorEfternavn, setErrorEfternavn] = useState('');

const [errorAdresse, setErrorAdresse] = useState('');
const [errorPostnummer, setErrorPostnummer] = useState('');
const [errorBy, setErrorBy] = useState('');
const [errorMobil, setErrorMobil] = useState('');
const [errorMail, setErrorMail] = useState('');
const [errorBesked, setErrorBesked] = useState('');

var hasNumber = /\d/;

var hasLetter = /[a-z]/i;


const validerFornavn = (e) => {

    if(Name == '' || hasNumber.test(Name) ){
        setErrorfornavn('Der er fejl i fornavn')
    } else {
        setErrorfornavn('') 
    }

}

const validerEfternavn = (e) => {

    if(lastName == '' || hasNumber.test(lastName) ){
        setErrorEfternavn('Der er fejl i Efternavn')
    } else {
        setErrorEfternavn('') 
    }

}

const validerAdresse = (e) => {
    if(adresse == ''){   
        setErrorAdresse('Der er fejl i addresse')
    }  else {
        setErrorAdresse('')
    }
    
}


const validerPostnummer = (e) => {
    if(postnummer == '' || hasLetter.test(postnummer)){   
        setErrorPostnummer('Der er fejl i postnummer')
    }  else {
        setErrorPostnummer('')
    }
    
}

const validerBy = (e) => {
    if(by == '' || hasNumber.test(by)){   
        setErrorBy('Der er fejl i By')
    }  else {
        setErrorBy('')
    }
    
}

const validerMobil = (e) => {
    if(mobil == '' || hasLetter.test(mobil)){   
        setErrorMobil('Der er fejl i Mobil nummer')
    }  else {
        setErrorMobil('')
    }
    
}

const validerMail = (e) => {
    if(mail == '' || !mail.includes('@')  || !mail.includes('.')){   
        setErrorMail('Der er fejl i Mail')
    }  else {
        setErrorMail('')
    }
    
}

// const [besked, setBesked] = useState('');

const validerBesked = (e) => {
    if(besked == ''){   
        setErrorBesked('Der er fejl i Besked')
    }  else {
        setErrorBesked('')
    }
    
}



const finalValidering = (e) => {
if(kursusType=== 'langeKurser'){
        
        if(holdData === 'none') {
            setErrorHoldData('Du Mangler at Vælge Hold')
        }

        if(fagData === 'none') {
            setErrorFagData('Du Mangler at Vælge Hold')
        }

        if(studieTurValg === 'none') {
            setErrorStudieTurValg('Du Mangler at Vælge Hold')
        } 
    } 

    if(kursusType=== 'kortKurser'){ 

        if(kursus === 'none') {
            seterrorKurusValg('Du Mangler at Vælge Kursus')
        } 
    }

    validerFornavn()
    validerEfternavn()
    validerAdresse()
    validerPostnummer()
    validerBy()
    validerMobil()
    validerMail()
    validerBesked()
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
                                <div>
                                <label>Vælg Hold</label>
                                <div className='errorM'>{errorHoldData}</div>
                                <select onChange={HandelHoldData} onBlur={validerHoldData}>
                                    <option value='none'>vælg Hold</option>
                                    {holdMapper()}
                                </select>
                                </div>

                                <div className='linjeFagContainer'>
                                <label>Valg af linjefag:</label>
                                <div className='errorM'>{errorFagData}</div>
                                <select onChange={HandelFagData} onBlur={validerFagData}>
                                    <option value='none'>vælg Linjefag</option>
                                    <option value='FOTO'>FOTO</option>
                                    <option value='SANGSKRIVER'>SANGSKRIVER</option>
                                    <option value='E-MUSIK'>E-MUSIK</option>
                                    <option value='DANS'>DANS</option>
                                    <option value='ADVENTURESPORT'>ADVENTURESPORT</option>
                                </select>
                                </div>

                            </div>




                            <div className='formFlexer'>
                                <div>
                                    <label>Fornavn:</label>
                                    <div className='errorM'>{errorfornavn}</div>
                                    <input type="text" value={Name} onChange={HandelName} onBlur={validerFornavn}/>
                                </div>

                                <div>
                                    <label>efternavn:</label>
                                    <div className='errorM'>{errorEfternavn}</div>
                                    <input type="text" value={lastName} onChange={HandelLastName} onBlur={validerEfternavn} />
                                </div>
                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Adresse:</label>
                                    <div className='errorM'>{errorAdresse}</div>
                                    <input type="text" value={adresse} onChange={HandelAdresse} onBlur={validerAdresse} />
                                </div>

                                <div>
                                    <label>Postnummer:</label>
                                    <div className='errorM'>{errorPostnummer}</div>
                                    <input type="text" value={postnummer} onChange={HandelPostnummer} onBlur={validerPostnummer}/>
                                </div>

                                <div>
                                    <label>By:</label>
                                    <div className='errorM'>{errorBy}</div>
                                    <input type="text" value={by} onChange={HandelBy} onBlur={validerBy}/>
                                </div>
                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Mobil:</label>
                                    <div className='errorM'>{errorMobil}</div>
                                    <input type="text" value={mobil} onChange={HandelMobil} onBlur={validerMobil} />
                                </div>
                                <div>
                                    <label>Mail:</label>
                                    <div className='errorM'>{errorMail}</div>
                                    <input type="text" value={mail} onChange={HandelMail} onBlur={validerMail}/>
                                </div>
                            </div>


                            <label>Bemærkninger:</label>
                            <div className='errorM'>{errorBesked}</div>
                            <textarea placeholder='skriv en bemærkning' value={besked} onChange={HandelBesked} onBlur={validerBesked}></textarea>

                            <div className='formCenter'>
                                <label> Ønsker du at deltage i Studieturen:</label>
                                <div className='errorM'>{errorStudieTurValg}</div>
                                <select onChange={HandelStudieTurValg} onBlur={validerStudieturValg}>
                                    <option value='none'>Vælg</option>
                                    <option  value='ja'>Nej</option>
                                    <option  value='nej'>Ja</option>
                                </select>
                            </div>

                        </form>
                        <div className='tilmeldDiv' onClick={finalValidering}>

                         
                                <p className='symbol'>&radic;</p>
                                <p>Til Betaling</p>
                           
                        </div>
                    </div>

                    <div className={'kortdiv ' + kursusType}>

                        <p className='headline'> KORTE KURSER: </p>

                        <form>
                            <label>Vælg Kursus:</label>
                            <div className='errorM' >{errorKurusValg}</div>
                            <select onChange={HandelKursus} onBlur={validerKursusData}>
                                <option value='none'>vælg kursus</option>
                                {mapKurser()}
                            </select>


                            <div className='formFlexer'>
                            <div>
                                    <label>Fornavn:</label>
                                    <div className='errorM'>{errorfornavn}</div>
                                    <input type="text" value={Name} onChange={HandelName} onBlur={validerFornavn}/>
                                </div>

                                <div>
                                    <label>efternavn:</label>
                                    <div className='errorM'>{errorEfternavn}</div>
                                    <input type="text" value={lastName} onChange={HandelLastName} onBlur={validerEfternavn} />
                                </div>
                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Adresse:</label>
                                    <div className='errorM'>{errorAdresse}</div>
                                    <input type="text" value={adresse} onChange={HandelAdresse} onBlur={validerAdresse} />
                                </div>

                                <div>
                                    <label>Postnummer:</label>
                                    <div className='errorM'>{errorPostnummer}</div>
                                    <input type="text" value={postnummer} onChange={HandelPostnummer} onBlur={validerPostnummer}/>
                                </div>

                                <div>
                                    <label>By:</label>
                                    <div className='errorM'>{errorBy}</div>
                                    <input type="text" value={by} onChange={HandelBy} onBlur={validerBy}/>
                                </div>
                            </div>


                            <div className='formFlexer'>
                                <div>
                                    <label>Mobil:</label>
                                    <div className='errorM'>{errorMobil}</div>
                                    <input type="text" value={mobil} onChange={HandelMobil} onBlur={validerMobil} />
                                </div>
                                <div>
                                    <label>Mail:</label>
                                    <div className='errorM'>{errorMail}</div>
                                    <input type="text" value={mail} onChange={HandelMail} onBlur={validerMail}/>
                                </div>
                            </div>


                            <label>Bemærkninger:</label>
                            <div className='errorM'>{errorBesked}</div>
                            <textarea placeholder='skriv en bemærkning' value={besked} onChange={HandelBesked} onBlur={validerBesked}></textarea>


                        </form>
 
                        <div className='tilmeldDiv' onClick={finalValidering}>


                                <p className='symbol'>&radic;</p>
                                <p>Til Betaling</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TilmeldComponent