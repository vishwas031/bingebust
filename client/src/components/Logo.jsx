import React from 'react'
import {FaDesktop} from 'react-icons/fa'
import styled from 'styled-components'

const Logoo = styled.div`
    display:flex;
    align-items:center;
    gap:0.5rem;
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
    <Logoo>
        <FaDesktop></FaDesktop>
        <h2>Binge Bust</h2>
    </Logoo>
  )
}

export default Logo