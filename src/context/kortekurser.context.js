import React, { createContext, useState } from 'react';

export const kurserContext = createContext();

const KurserContextProvider = (props) =>{

    const [kurser, setKurser] = useState([
        {title:'Dansk filmhistorie', imgSrc:'/assets/kortKurser/danske_film.jpg', start:'17/11/19', slut:'22/11/19', pris:'4075', id:1},
        {title:'Havkajak', imgSrc:'/assets/kortKurser/Havkajak.jpg',start:'08/07/19', slut:'14/07/19', pris:'4695', id: 2},
        {title:'Jagttegn og natur', imgSrc:'/assets/kortKurser/jagt_og_natur.jpg',start:'07/04/19', slut:'13/04/19', pris:'4495', id: 3},
        {title:'Krimi, virkelighed og fiktion', imgSrc:'/assets/kortKurser/krimi_virkelighed_og_fiktion.jpg',start:'09/06/19',slut:'13/06/19', pris:'4295',   id: 4},
        {title:'Ølbrygning', imgSrc:'/assets/kortKurser/oelbrygning.jpg',start:'21/06/19', slut:'23/06/19', pris:'4525',  id: 5},
        {title:'Mad på dansk', imgSrc:'/assets/kortKurser/mad_paa_dansk.jpg',start:'10/07/19', slut:'15/07/19', pris:'5500', id: 6},
        {title:'Kor, sang og musik ', imgSrc:'/assets/kortKurser/kor_sang_og_musik.jpg',start:'19/07/19', slut:'25/07/19', pris:'3790',  id: 7},
        {title:'Wellness og Yoga', imgSrc:'/assets/kortKurser/yoga_og_wellness.jpg',start:'25/08/19', slut:'29/08/19', pris:'4875',  id: 8},
    ])





return(

    <kurserContext.Provider value={{kurser}}>
          {props.children}
    </kurserContext.Provider>

)

}

export default KurserContextProvider