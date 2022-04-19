import React from 'react'
import{Container} from 'react-bootstrap';
// import Header from './components/Hearder';
import ListBooks from './components/Books/Books';


const books ={
        "title": "Programação Web com Node.js",
        "image": "https://m.media-amazon.com/images/I/4110e7iseFL.jpg",
        "price": 14.99,
        "url": "https://www.luiztools.com.br/livro-node-amazon"
       
  
}


function App() {
  return (
    <Container>
     <h1>Lista de livros</h1>
     <ListBooks books={books}/>
    </Container>
  );
}

export default App;
