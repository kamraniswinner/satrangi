import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Heading from './Heading';

const Maindiv = styled.div`
   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, 1fr)); /* Adjust the width of the cards */
  gap: 5px; /* Adjust the gap between cards */
`

const Carddiv = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display:flex;
  flex-direction:column;
  height:60vh;
  position:relative;
`;

const Imgdiv = styled.img`
width: 100%;
height: 100%;
object-fit: cover; /* Ensure the image covers the entire container */
background-repeat: no-repeat;
`
const Productheading = styled.h1`
  color: white;
  position: absolute;
  bottom: 10px;
  left: 20px;
  padding: 10px; /* Add padding to give some space around the text */
  display:flex;
  justify-content:center;
`
/*const Productprice = styled.p`
color:black;
position:absolute;
bottom: 0px;
`*/
const Buttondiv = styled.div`
  background-color: transparent;
  border: none;
  padding: 10px 20px; /* Add padding for some clickable area */
  color: rgba(0, 0, 0, 0.5); /* Set text color */
  cursor: pointer; /* Add pointer cursor on hover */
  left: 20px;
  bottom: 20px;
  position: absolute;
`

const Icondiv = styled.div`
left: 20px;
bottom: 0px;
position: absolute;
`

const Productdata = [
  {image:"https://images.unsplash.com/photo-1665159882377-385d68d2bdff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8andlbGxlcnl8ZW58MHwwfDB8fHww",name:"earring",price:14.99},
  {image:"https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8andlbGxlcnl8ZW58MHwwfDB8fHww",name:"rings",price:14.99},
  {image:"https://images.unsplash.com/photo-1656428851610-a2de17b056a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8andlbGxlcnl8ZW58MHwwfDB8fHww",name:"necklace",price:14.99},
  {image:"https://images.unsplash.com/photo-1665159882686-3d4fc7b036a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp3ZWxsZXJ5fGVufDB8MHwwfHx8MA%3D%3D",name:"Bracelets",price:14.99},
  {image:"https://images.unsplash.com/photo-1656427743458-9594c83afd72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp3ZWxsZXJ5fGVufDB8MHwwfHx8MA%3D%3D",name:"piercing",price:14.99},
  {image:"https://images.unsplash.com/photo-1656427743666-d6507c12b04e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGp3ZWxsZXJ5fGVufDB8MHwwfHx8MA%3D%3D",name:"Anklets",price:14.99}
]

const Card = () => {
  return (
    <>
    <Heading text="Categories" />
    <Maindiv>
  {Productdata.map((data, index) => (
    <Carddiv key={index}>
      <Imgdiv style={{ backgroundImage: `url(${data.image})` }} />
      <Productheading>{data.name}</Productheading>
      <Buttondiv>see more <FontAwesomeIcon icon={faAngleDown} /></Buttondiv>
    </Carddiv>
  ))}
</Maindiv>
    </>
  )
}

export default Card