import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerIcon = styled.div`
  display: block;
  width: 30px;
  height: 2px;
  margin-left:20px;
  background-color: white;
  position: relative;
  margin-bottom: 5px;
  transition: transform 0.3s ease;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: transform 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }

  ${({ open }) =>
    open &&
    `
    transform: rotate(45deg);
    &::before {
      transform: translateY(8px) rotate(90deg);
    }
    &::after {
      transform: translateY(-8px) rotate(90deg);
    }
  `}
`;

const SlideMenu = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #333;
  padding: 20px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 2;
`;

const SlideUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction:column;
`;

const SlideLi = styled.li`
margin: 20px auto; /* Adjust as needed */

`;

const SlideLink = styled.a`
  text-decoration: none;
  color: black; /* Change color as needed */
`;

const Slidemenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav>
        <HamburgerIcon open={isOpen} onClick={toggleMenu} />
        <SlideMenu open={isOpen}>
          {/* Add your navigation links or any content for the slide menu here */}
          <SlideUl>
      <SlideLi><SlideLink href="#">Home</SlideLink></SlideLi>
      <SlideLi><SlideLink href="#">About</SlideLink></SlideLi>
      <SlideLi><SlideLink href="#">Services</SlideLink></SlideLi>
      <SlideLi><SlideLink href="#">Contact</SlideLink></SlideLi>
    </SlideUl>
        </SlideMenu>
      </nav>
    );
}

export default Slidemenu