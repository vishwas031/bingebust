import React, { Component } from "react";
import { motion } from 'framer-motion';
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
    display:flex;
    flex-direction:column;
    justify-content:center;
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
.moviepage{
  text-decoration:none;
  color:#D5F2E3;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
  svg{
    font-size:1.5rem;
  }
}
.margin-less{
  margin: 0.5rem 0;
}
.play-btn{
  display:block;
  position:relative;
  bottom: 6rem;
  left:90%;
  font-size:4rem;
}

a{
  text-decoration:none;
  color:#D5F2E3;
}
.active{
  background: linear-gradient(35deg, #494949,#313131);
  color: white;
}
h3{
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
  font-size:1.25rem;
  font-weight:300;
  margin-left:20px;
}
h2{
  font-weight:600;
}

.ratings{
  svg{margin-left:7px;}
  font-weight:bold;
  margin-top:0rem;
}
.temp{
  img{
      border-radius: 1rem;
      width: 15rem;
      height:22rem;
      object-fit: cover;
      border: 1px solid white;
  }
}
.rightAlign{
  text-align:start;
}
.form-group{
    display:flex;
    align-items:center;
    gap: 2rem;
}
.form-control{
    border-radius:4px;
    height:2rem;
    background-color:#003E1F;
    color:#D5F2E3;
    padding-left:10px;
    placeholder{
        color:#D5F2E3;
    }
}
label{
    font-weight:600;
}
`
const Button = styled.button`
  border-radius:0.5rem;
  background-color:#D5F2E3;
  color: #003E1F;
  font-weight:600;
  padding: 0.5rem 1rem;
  width: fit-content;
  font-size:1rem;
  margin-top: 2rem;
`


function Login() {
        return (
            <Wrapper
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}>
            <form className="form-container">
                <h1>Sign In</h1>

                <div className="form-group">
                    <h2>Email address :</h2>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <h2>Password :</h2>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
            </Wrapper>
        );
}
export default Login;