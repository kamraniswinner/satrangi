import React from 'react'
import styled from 'styled-components'
import Slidemenu from './Slidemenu'


const Maindiv = styled.div`
width:100vw;
height:10vh;
display:flex;
flex-direction:row;
background-color:black;
color:white;
justify-content:center;
align-items:center;
`

const Navleft = styled.div`
flex:2;
`
const Navcenter = styled.div`
flex:8;
display:flex;
justify-content:center;
align-items:center;
`

const Navright = styled.div`
flex:2;
`
const Navbar = () => {
  return (
    <Maindiv>
        <Navleft><Slidemenu/></Navleft>
        <Navcenter><i>Satrangi</i></Navcenter>
        <Navright></Navright>
    </Maindiv>
  )
}

export default Navbar