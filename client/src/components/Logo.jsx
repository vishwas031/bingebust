import React from 'react'
import {FaDesktop} from 'react-icons/fa'
import styled from 'styled-components'

const Logoo = styled.a`
    display:flex;
    align-items:center;
    gap:0.5rem;
    text-decoration: none;
    font-family: 'Abril Fatface', cursive;
    color: #003E1F;
    svg{
        font-size: 2.5rem;
    }
    h2{
      margin:1rem;
      font-size: 2.5rem;
      font-weight: lighter;
    }
`


function Logo() {
  return (
    <Logoo href='/'>
        <FaDesktop></FaDesktop>
        <h2>Binge Bust</h2>
    </Logoo>
  )
}

export default Logo