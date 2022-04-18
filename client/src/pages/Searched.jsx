import{useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {SplideSlide } from '@splidejs/react-splide';


function Searched() {
    const [searchedMovies , setSearchedMovies] = useState([]);
    const params = useParams();
    const getSearched = async(name)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f569e379d2c0bc46e541ef9379a90215&language=en-USpage=1&query=${name}`);
        const movies = await data.json()
        setSearchedMovies(movies.results)
    };

    useEffect(()=>{
        getSearched(params.search);
    },[params.search])

  return (
    <div>
    <Wrapper
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <h1>Results</h1>
        <Drawer>
        {searchedMovies.map((item)=>{
                const {poster_path}=item
                    return(
                        <SplideSlide key={item.id}>
                        <Card>
                            <Link to={'/movie/'+ item.id}>
                            <p>{item.title}</p>
                            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={item.title}/>
                            <Gradient/>
                            </Link>
                        </Card>
                        </SplideSlide>
                    );
            })}
        </Drawer>
    </Wrapper>
    </div>
  )
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


export default Searched