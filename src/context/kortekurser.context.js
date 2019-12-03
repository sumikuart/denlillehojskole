import React, { createContext, useState } from 'react';

export const kurserContext = createContext();

const KurserContextProvider = (props) =>{

    const [kurser, setKurser] = useState([
        {title:'Dansk filmhistorie', id:1},
        {title:'Havkajak', id: 2},
        {title:'Jagttegn og natur', id: 3},
        {title:'Krimi, virkelighed og fiktion', id: 4},
        {title:'Ølbrygning', id: 5},
        {title:'Mad på dansk', id: 6},
        {title:'Kor, sang og musik ', id: 7},
        {title:'Wellness og Yoga', id: 8},
    ])





return(

    <kurserContext.Provider value={{kurser}}>
          {props.children}
    </kurserContext.Provider>

)

}

export default KurserContextProvider