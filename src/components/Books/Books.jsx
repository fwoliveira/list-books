import React from 'react';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import UIButton from '../UI/Button/Button'
import {Link} from "react-router-dom";

const ItemContainer = styled.div`
 aling-items: center;
 border-radius: 4px;
 background-color: #ccc;
 height: 120px;
 width: 262px;
 color:#29303b;
 margin-botton: 40px;
 margin-right: 10px;
 padding: 10px;
 display: inline-block;
  mar`;
 
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



const Books = ({books}) => {
    return (
      <ItemLink href={books.url} title= "clique para comprar">
          <ItemContainer>
           <Thumbnail src={books.image}></Thumbnail>
           <TitlePlane>{books.title}</TitlePlane>
           <PricePane> R$ {books.price}</PricePane>
           <UIButton component="a" >Comprar</UIButton>
           <UIButton component={Link} to={`/edit/${books.id}`} >editar</UIButton>
          </ItemContainer>
      </ItemLink>
    )
  }
  
  export default Books;
  