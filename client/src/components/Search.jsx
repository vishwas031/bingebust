import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const navigate = useNavigate();
    const [input,setInput]= useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/'+ input);
    }

  return (
    <Align>
      <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e)=> setInput(e.target.value)} 
            type="text" 
            value={input}/>
        </div>
      </FormStyle>
    </Align>
  )
}


const Align = styled.div`
    display: flex;
    align-items:center;
`

const FormStyle = styled.form`
    div{
        position: relative;
        width: 80%;
    }
    input{
        border:none;
        background: #D5F2E3;
        font-size: 0.75rem;
        font-weight:bold;
        color: #003E1F;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 80%;
    }
    svg{
        position: absolute;
        z-index:1;
        top: 50%;
        left: 0%;
        transform: translate(90%, -50%);
        color: #003E1F;
    }
`

export default Search