import React, { useState } from 'react'; // Import useState hook
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Maindiv = styled.div`
  width: 100%;
  height: 90vh;
`;

const Button = styled.button`
background-color: transparent; /* Transparent background */
border: none; /* Remove border */
cursor: pointer; /* Show pointer cursor */
position: absolute; /* Position the button absolutely */
top: 50%; /* Position the button vertically centered */
transform: translateY(-50%); /* Center the button vertically */
z-index: 1; /* Ensure the button is above other content */
color: white; /* Button text color */
font-size: 24px; /* Button font size */
width: 40px; /* Button width */
height: 40px; /* Button height */
/* Adjust positioning based on button role */
${({ role }) => (role === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;


const Img = styled.img`
  width: 100%; /* Set image width to fill its container */
  height: 100%; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure the image covers the entire container */
`;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize state using useState hook

  const images = [
    'https://images.unsplash.com/photo-1696527018164-1cf3fdeb0255?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1667419941781-467523673d82?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1667420180324-79fc21e4af7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGp3ZWxsZXJ5fGVufDB8MHwwfHx8MA%3D%3D',
  ];

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <Maindiv>
      <Button onClick={goToPrevSlide} role="left"><FontAwesomeIcon icon={faChevronLeft} /></Button>
      <Img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <Button onClick={goToNextSlide} role="right"><FontAwesomeIcon icon={faChevronRight} /></Button>
    </Maindiv>
  );
};

export default Hero;

/*
const Button = styled.button`
  background-color: transparent; 
  border: none; 
  cursor: pointer; 
  position: absolute; 
  top: 0%; 
  bottom:0%
  transform: translateY(-50%); 
  z-index: 1; 
  color: white; 
  font-size: 24px;
  width: 40px;
  height:100%;
  display:flex;
  align-items:center;
  justify-content: center; 
  /* Adjust positioning based on button role */
  /*${({ role }) => (role === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;
*/


