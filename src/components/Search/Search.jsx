import React, {useEffect, useState} from "react";
import searchCss from './Search.module.css';
import axios from 'axios';
import Books from '../Books/Books';
import { Link } from "react-router-dom";


const PromotionSearch = () => { 
        const [books, setbooks] =  useState([]);
        const[ search, setSearch] = useState('');
    
        useEffect(() => {
          const params = {};
          if (search) {
            params.title_like = search;
          }

          axios.get('http://localhost:5000/books', { params })
          .then((response) => {
            console.log(response.data);
            setbooks(response.data);
    
          }
          );
         }, [search])
          return (
         <>
         <header className={searchCss.PromotionSearchHeader}>
           <h1> Promoção de livros</h1>
           <Link to= "/create">Novo livro</Link>
         </header>
         <input type="search"
         className={searchCss.BooksSearchInput} 
         placeholder="Busca"
         value={search}
         onChange={(ev) => setSearch(ev.target.value)}
         />
          {books.map((books) =>(
            <Books books={books} key={books.id}/>
           ) )}  
         </>
    );

};

export default PromotionSearch;
