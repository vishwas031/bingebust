import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
    const [popular,setPopular]=useState([]);
    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async()=>{

        const check = localStorage.getItem("popular");

        if(check){
            setPopular(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
            const data = await api.json();
            localStorage.setItem('popular',JSON.stringify(data.results))
            setPopular(data.results)
            console.log(data.results)
        }

    }
  return (
    <div>
            <Wrapper
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
            >
                <h1>Latest Release</h1>
                <Drawer>
                {popular ? popular.map((movie)=>{
                    const {poster_path}=movie
                    return(
                        <SplideSlide key={movie.id}>
                        <Card>
                            <Link to={'/movie/'+ movie.id}>
                            <p>{movie.title}</p>
                            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={movie.title}/>
                            <Gradient/>
                            </Link>
                        </Card>
                        </SplideSlide>
                    );
                }):
                <h2>Loading...</h2>}
                </Drawer>
            </Wrapper>
    </div>
  );
}

const Wrapper = styled(motion.div)`
    margin: 0.25rem 0;
    padding: 0.5rem 2rem 2rem 2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    border-radius: 1rem;
    letter-spacing:1px;
    background: #003E1F;
    min-height:77vh;
    color:#D5F2E3;
`;
const Drawer = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap:1rem;
    `
const Card = styled.div`
    width: 100%;
    min-height: 16rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    border: 1px solid white;

    img{
        border-radius:1rem;
        position: absolute;
        left:0;
        width: 100%;
        height:100%;
        object-fit: fill;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom:0%;
        transform: translate(-50%,0%);
        color: rgb(240, 240, 240);
        width: 100%;
        text-center: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0, 0,0.45));
`


export default Popular;