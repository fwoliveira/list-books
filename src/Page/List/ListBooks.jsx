import React,{useState, useEffect} from 'react';
import ListBooks from '../../components/Books/Books'
import axios from 'axios';

const PagesPromotionlist = () => {
 
    const [promotions, setPromotions] =  useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        console.log(response.data);
        setPromotions(response.data);

      }
      );
     }, [])

    
     
     return(
        
        <>
          {promotions.map((promotion) =>(
            <listBooks promotion={promotion} key={promotion.id}/>
           ) )}
            
        </>
    )
}


export default ListBooks;







