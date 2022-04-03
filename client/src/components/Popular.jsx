import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Wrapper = styled(motion.div)`
    margin: 1rem 0rem;
    padding: 0;
`;
const Drawer = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    grid-gap:1rem;
    `


const Card = styled.div`
    width: 100%;
    min-height: 17rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;

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
        color: white;
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


function Popular() {
    const [popular,setPopular]=useState([]);
    useEffect(()=>{
        updateDimensions();
        getPopular();
    },[]);

    const [Num,setNum]= useState(7);
    const [width, setWindowWidth] = useState(0);
    const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    if(width<1400)
        setNum(5)
    }
    const getPopular = async()=>{
            const api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=453762e716c58e7d11e2166114b99e36&language=en-US&page=1`);
            const data = await api.json();
            setPopular(data.results)
            console.log(data.results)

    }
  return (
    <div>
            <Wrapper
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
            >
                <h2>Latest Released</h2>
                {/* <Splide options={{
                    perPage: `${Num}`,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "2rem",
                }}> */}
                <Drawer>
                {popular.map((movie)=>{
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
                })}
                {/* </Splide> */}
                </Drawer>
            </Wrapper>
    </div>
  );
}


export default Popular;