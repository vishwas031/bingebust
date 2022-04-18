import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'
import {SplideSlide } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'



function Details(){
    const params = useParams();
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading]= useState(true);
    const [casts, setCast] = useState({});
    const [gridSize, setGridSize] = useState(16)
    const POSTER_PATH = "https://image.tmdb.org/t/p/original"
  
    function getWindowDimensions() {
      const { innerWidth: width} = window;
      return {
        width
      };
    }

    useEffect(() => {
      getOverview(params.name);
    }, [params.name]);

    const getOverview = async(name)=>{
        const api = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const api2 = await fetch(`https://api.themoviedb.org/3/movie/${name}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const data = await api.json();
        const cast = await api2.json();
        setDetails(data)
        setCast(cast.cast)
        setIsLoading(false)
        console.log(data)
        console.log(cast)
    }
    return(
        <Wrapper
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}>
            { details ? 
            <>
            <div className='temp'>
              <img src={`${POSTER_PATH}${details.poster_path}`} alt="poster"/>
            </div>
            <Info>
                <div>
                    <h1>{details.title}</h1>
                    <h2>{details.tagline}</h2>
                    <h3 className='ratings'>{details.vote_average}/10<AiFillStar/></h3>  
                    <div className='rightAlign'>
                    <h2>Overview</h2>
                    <h3>{details.overview}</h3>
                    <h2>Genres</h2>
                    {!isLoading && <Genre>{details.genres.map((genre)=>{return(<Button>{genre.name}</Button>)})}</Genre>}
                    <br/>
                    <h2>Cast</h2>
                    <Drawer>
                      {!isLoading && casts.map((cast)=>{
                        var {name,id,profile_path} = cast;
                        return(
                          profile_path &&
                          <SplideSlide key={id}>
                          <Card>
                              <a href={`https://en.wikipedia.org/wiki/${name}`}>
                              <p>{name}</p>
                              <Poster><img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name}/></Poster>
                              </a>
                          </Card>
                          </SplideSlide>
                    );
                      })}
                    </Drawer>
                    </div>
                </div>
            </Info>
            </> :
            <h2>Loading....</h2>}
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
h3{
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
  font-size:1.25rem;
  font-weight:300;
}
h2{
  font-weight:400;
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
`
const Card = styled.div`
    padding-bottom: 0.5rem;
    text-align:center;
    width: 100%;
    height: 10rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    border: 1px solid white;
    font-size:small;
    a{
      text-decoration:none;
      font-family: 'Playfair Display', serif;
      color:#D5F2E3;
    }
`
const Poster = styled.div`
  img{
  width:110px;
  height:110px;
  border-radius:50%;
  object-fit: cover;
  }
`
const Drawer = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    grid-gap:1rem;
    `

const Info = styled.div`
  width:100%;
`
const Genre = styled.div`
  display:flex;
  justify-content:start;
  gap:2rem;
  @media (max-width: 600px) {
   {
    flex-direction: column;
  }
}
`
const Button = styled.div`
  border-radius:0.5rem;
  background-color:#D5F2E3;
  color: #003E1F;
  font-weight:600;
  padding: 0.4rem 1rem;
  width: fit-content;
`


export default Details