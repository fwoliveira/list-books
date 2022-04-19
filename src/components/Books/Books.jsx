import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';


const ItemContainer = styled.div`
 border-radius: 4px;
 background-color: #fff;
 height: 120px;
 width: 262px;
 color:#29303b;
 margin-botton: 10px;
 margin-right: 10px;
 padding: 10px;
 `;
const TitlePlane = styled.div`
font-weight: 700;
margin-bottom: 5px;
`;

 const ItemLink = styled.a`
   text-decoration:none;
 `;
 const PricePane = styled.div`
 margin-bottom: 5px;
 `;
 const Thumbnail = styled.img`
 width: auto;
 height: 100%;
 border: 0;
 vertical-align: middle;
 float: left;
 margin-right: 10px;
 `;



const ListBooks = ({books}) => {
    return (
      <ItemLink href={books.url} title= "clique para comprar">
          <ItemContainer>
           <Thumbnail src={books.image}></Thumbnail>
           <TitlePlane>{books.title}</TitlePlane>
           <PricePane> R$ {books.price}</PricePane>
           <Button variant="primary">Comprar</Button>
          </ItemContainer>
      </ItemLink>
    )
  }
  
  export default ListBooks;
  