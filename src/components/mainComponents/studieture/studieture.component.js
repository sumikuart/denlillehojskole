// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './studieture.style.css'

// Context:



// images:



const StudieTureCompnent = () => {

    const [galleriState, setGalleriState] = useState(['hide'])
    const [galleriImgShow, setGalleriImgShow] = useState(['/assets/studieture/berlin1.jpg'])

const openGalleri = (e) => {
console.log(e.target.src)
setGalleriState('show')
setGalleriImgShow(e.target.src)
}

const closeGalleri = (e) => {
    setGalleriState('hide')
    console.log(galleriState)
}


    return (
        <div className="studietureStyle">
            
            <div className='omImgContainer' >
                <img src={window.location.origin + '/assets/studieture/studieture.jpg'} alt="" />
            </div>


            <div className='studieTureContent'>

                <div className='studietureText'>

                    <p className='headline'>STUDIETURE</p>
                    <p className='bread'>I løbet af et semester på Den lille højskole har du mulighed for at komme med på to storby-studieture hhv. til Berlin og New York. Berlin-turen er den obligatoriske tur for alle elever, mens New York-turen er et ekstra tilbud, som skal tilkøbes, og som gennemføres i umiddelbar forlængelse af opholdet.  Det koster ekstra 10.000 kr. at komme med på New York-turen, som man uforpligtende markerer sin interesse i når man tilmelder sig et ophold på Den lille højskole (via afkrydsning på on line-tilmeldingsskemaet). Først når man er startet på højskolen afkræves man en bindende tilmelding til turen.</p>

                    <p className='underheadline'>Berlin</p>
                    <p className='bread'>Studieturen til Berlin byder på 5 dage i den stærkt oplevelsesmættede tyske hovedstad. Du får set de sædvanlige turist must-sees, men vil også opleve nogle af Berlins knap så turistede attraktioner samt en stor dosis kultur-leben. Endelig får du masser af tid til at cruise rundt i Berlin på egen hånd.
Vi kører i bus fra højskolen tur/retur og er i Berlin fra mandag til fredag.
</p>

                    <p className='underheadline'>New York</p>
                    <p className='bread'>I modsætning til Berlin-turen, som bærer præg af at være en fælles studietur for hele den samlede gruppe, adskiller New York-turen sig ved også at tilbyde eleverne nogle linjefags-relaterede oplevelser. Disse kunne være skuespiller-workshop for filmskuespillerne, danse-workshop for danserne, fotoekskursion for foto-eleverne etc. Derudover ser man naturligvis en række af de seværdigheder man bare bør se, når man er i New York.
I prisen for New York-turen er inkluderet fly, fuld forplejning, entréer, transportudgifter i New York etc.
</p>

                </div>

                <div className='studieTureGalleri'>
                <p className='headline'>GALLERI</p>

                <div className='studieTureGalleriFlexer'>

                    <div className='imgContainer'>
                        <img src={window.location.origin + '/assets/studieture/berlin1.jpg'} alt="Studie Ture" onClick={openGalleri}/>
                    </div>

                    <div className='imgContainer'>
                        <img src={window.location.origin + '/assets/studieture/berlin2.jpg'} alt="Studie Ture" onClick={openGalleri}/>
                    </div>

                    <div className='imgContainer'>
                        <img src={window.location.origin + '/assets/studieture/berlin3.jpg'} alt="Studie Ture" onClick={openGalleri}/>
                    </div>

                     <div className='imgContainer'>
                        <img src={window.location.origin + '/assets/studieture/newyork1.jpg'} alt="Studie Ture" onClick={openGalleri}/>
                    </div>

                    <div className='imgContainer'>
                        <img src={window.location.origin + '/assets/studieture/newyork2.jpg'} alt="Studie Ture" onClick={openGalleri}/>
                    </div>

                    <div className='imgContainer'>
                        <img src={window.location.origin + '/assets/studieture/newyork3.jpg'} alt="Studie Ture" onClick={openGalleri}/>
                    </div>
                    

                </div>

                </div>


                <div className={'galleriContainer '+ galleriState}>

                    <div className="galleriPosition">
                        
                        <div className='galleriCloser' onClick={closeGalleri}>
                            <p>X</p>
                        </div>

                        <div className='galleriImgHolder'>
                            <img src={galleriImgShow} alt="studieture galleri" />
                        </div>

                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default StudieTureCompnent