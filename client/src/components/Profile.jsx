import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {FaUserCircle} from 'react-icons/fa'

function Profile() {
  return (
    <Wrapper
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}>
        <FaUserCircle/>
        <h1>My Profile</h1>
        <h2>Username : User 1</h2>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 0.25rem 0;
    padding: 2rem 2rem 2rem 2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    border-radius: 1rem;
    letter-spacing:1px;
    background: #003E1F;
    min-height:77vh;
    color:#D5F2E3;
    justify-items:center;
  text-align:center;

.active{
  background: linear-gradient(35deg, #494949,#313131);
  color: white;
}
h2{
  font-family: 'Source Sans Pro', sans-serif;
  font-weight:400;
}
svg{
    width:100px;
    height:100px;
}
`
export default Profile