import React from 'react'
import Home from './Home'
import {Route, Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Details from '../components/Details'
import Searched from './Searched'
import Login from '../components/Login'

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/movie/:name' element={<Details/>}/>
      </Routes>
      </AnimatePresence>
  )
}

export default Pages