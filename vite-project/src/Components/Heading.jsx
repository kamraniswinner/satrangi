import React from 'react'
import styled from 'styled-components'

const Maindiv = styled.div`
width: 100%;
height: 15vh;
display:flex;
justify-content: center;
align-items: center;
background-color: #000;
`

const Heading = ({ text }) => { // Destructuring props directly here
  return (
    <Maindiv>
      {text} {/* Accessing text directly */}
    </Maindiv>
  );
};

export default Heading