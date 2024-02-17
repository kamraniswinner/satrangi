import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Heading from './Heading';

const Maindiv = styled.div`
  width: 100%;
  height: 90vh;
  padding-bottom:50px;
  position: relative;
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position:relative;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SlideItem = styled.img`
  width: 24.5%;
  margin: 0 5px;
`;

const Button = styled.button`
background-color: none; /* Transparent background */
border: none; /* Remove border */
cursor: pointer; /* Show pointer cursor */
position:absolute; /* Position the button absolutely */
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

const NewArrivalslider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1651160670627-2896ddf7822f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8andlbGxlcnl8ZW58MHwxfDB8fHww',
    'https://images.unsplash.com/photo-1656428361267-b309fd9b20f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8andlbGxlcnl8ZW58MHwxfDB8fHww',
    'https://images.unsplash.com/photo-1656428361240-47e1737b7dce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8andlbGxlcnl8ZW58MHwxfDB8fHww',
    'https://images.unsplash.com/photo-1679156271456-d6068c543ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGp3ZWxsZXJ5fGVufDB8MXwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp3ZWxsZXJ5fGVufDB8MXwwfHx8MA%3D%3D',
    // Add more image URLs here
  ];

  const moveLeft = () => {
    const newIndex = (slideIndex - 1 + images.length) % images.length;
    /*setSlideIndex(slideIndex > 0 ? slideIndex - 1 : images.length - 1);*/
    setSlideIndex(newIndex)
  };

  const moveRight = () => {
    const newIndex = (slideIndex + 1) % images.length;
    /*setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1 : 0);*/
    setSlideIndex(newIndex);
  };

  return (
    <>
    <Heading text="New Arrivals" />
    <SliderContainer>
      <Button onClick={moveLeft} role="left"><FontAwesomeIcon icon={faChevronLeft} /></Button>
      <Button onClick={moveRight} role="right"><FontAwesomeIcon icon={faChevronRight} /></Button>
      <SlideWrapper style={{ transform: `translateX(-${slideIndex * 25}%)` }}>
        {images.map((image, index) => (
          <SlideItem key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </SlideWrapper>
    </SliderContainer>
    </>
  );
};

export default NewArrivalslider;

