// Main:
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './linjefagdetaljeside.style.css'

// Context:
import { linjefagContext } from '../../../../context/linjefag.context';



class LinjefagDetailComponent extends Component {

    static contextType = linjefagContext

    state ={
        navn:'',
        Beskrivelse: '',
        imgSrc:'', 
        id: ''
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        const fag = this.context

        console.log(fag)
        
        console.log(fag.fag.length)

        var valgtFag = this.props.match.params.valgfag

        console.log(valgtFag)

        for (var i=0; i < fag.fag.length; i++) {
            if(fag.fag[i].navn === valgtFag){
                this.setState({
                    navn: fag.fag[i].navn,
                    imgSrc:fag.fag[i].imgSrc,
                    Beskrivelse:fag.fag[i].Beskrivelse
                })
            }
        }


    }

    render() {

    return (
        <div className="linjefagDetaljerStyle">

         <div className='imgContainer'>
         <img src={window.location.origin +this.state.imgSrc} alt=""/>
            </div>


            <div className='linjefagDetaljerContent'>
                <div className='backToOverview'>
                    <NavLink to='/langekurser/linjefag/'> tilbage</NavLink>
                </div>
         
                <p className='headline'>{this.state.navn}</p>

                <p className='bread'>{this.state.Beskrivelse}</p>


                <div className="tilmeldKnap">
                    <NavLink to={'/tilmeld/langeKurser/basic'}>
                        <p className='symbol'>&radic; Tilmeld dig her</p>
                    </NavLink>
                </div>


            </div>
            
    
          </div>
    );
}
}

export default LinjefagDetailComponent