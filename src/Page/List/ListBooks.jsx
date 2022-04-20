import React,{useState, useEffect} from 'react';
import Books from '../../components/Books/Books'
import axios from 'axios';

const PagesListBooks = () => {
 
    const [listbooks, setbooks] =  useState([]);

    useEffect(() => {
      axios.get(' http://localhost:5000/books')
      .then((response) => {
        console.log(response.data);
        setbooks(response.data);

      }
      );
     }, [])

    
     
     return(
        
        <>
          {listbooks.map((books) =>(
            <Books books={books} key={books.id}/>
           ) )}
            
        </>
    )
}


export default PagesListBooks;







