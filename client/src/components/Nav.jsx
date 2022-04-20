import React from 'react'
import Logo from './Logo'
import Search from './Search'
import styled from 'styled-components'
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Navv = styled.div`
    min-height:16vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    border-radius:1rem;
    padding: 0.25rem 2rem;
    background: #73BA9B;
    #user-profile{
        font-size: 1.25rem;
        background: #D5F2E3;
        color:#003E1F;
        padding: 1rem;
        border-radius: 1rem;
    }
`

const Mob = styled.div`
    display:flex;
    align-items:center;
    gap:3rem;
`



function Nav() {

  return (
    <Navv>
        <Logo/>
        <Mob>
            <Search/>
            <Link to='/login'><div className='logo-container'><BsFillPersonFill className="acc-logo"/></div></Link>
        </Mob>
        
    </Navv>
  )
}

export default Nav