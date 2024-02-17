import React from 'react'
import styled from 'styled-components'

const Maindiv = styled.div`
width:100%;
height:60vh;
margin: 20px auto;
`
const Imagediv = styled.img`
 width:100%;
 height:100%;
 object-fit: cover; /* Ensure the image covers the entire container */
`

const Offerbanner = () => {
  return (
    <Maindiv>
     <Imagediv src="https://images.unsplash.com/photo-1542992015-4a0b729b1385?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </Maindiv>
  )
}

export default Offerbanner