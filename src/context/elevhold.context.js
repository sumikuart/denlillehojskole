import React, { createContext, useState } from 'react';

export const holdContext = createContext();

const HoldContextProvider = (props) =>{

    const [hold, setHold] = useState([
        {navn:'Efterårs-semester 2019', varighed:'17 uger', dato:'18. august til 14 december 2019',  id:1},
        {navn:'Efterårs-semester 2019', varighed:'13 uger', dato:'15. september til 14 december 2019',  id:2},
        {navn:'Forårs-semester 2020', varighed:'21 uger', dato:'19. januar til 13 juni 2020',  id:3},
        {navn:'Forårs-semester 2020', varighed:'16 uger', dato:'23. febuar til 13 juni 2020',  id:4}
    ])





return(

    <holdContext.Provider value={{hold}}>
          {props.children}
    </holdContext.Provider>

)

}

export default HoldContextProvider