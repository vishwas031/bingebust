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
        setCast(cast)
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
            <div>
              <img src={`${POSTER_PATH}${details.poster_path}`} alt="poster"/>
            </div>
            <Info>
                <div>
                    <h1>{details.title}</h1>
                    <h2>{details.tagline}</h2>
                    <h3 className='ratings'>{details.vote_average}/10<AiFillStar/></h3>  
                    <h3>{details.overview}</h3>
                    {/* <h3>{details.genres[1].name}</h3> */}
                    <Drawer>
                      {/* {casts.map((cast)=>{
                        var {name, character,id,profile_path} = cast;
                        return(
                          <SplideSlide key={id}>
                          <Card>
                              <Link to={'/movie/'+ id}>
                              <p>{name}</p>
                              <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name}/>
                              </Link>
                          </Card>
                          </SplideSlide>
                    );
                      })} */}
                    </Drawer>
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
  margin-top:2.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
  font-size:1.25rem;
  font-weight:300;
}
h2{
  font-weight:400;
  transform:translate(0,-1rem);
}
img{
    border-radius: 1rem;
      width: 15rem;
      height:22rem;
      object-fit: cover;
      border: 1px solid white;
  }
.ratings{
  svg{margin-left:7px;}
  font-weight:bold;
  margin-top:0rem;
}
`
const Card = styled.div`
    width: 100%;
    min-height: 16rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    border: 1px solid white;
`
const Drawer = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap:1rem;
    `

const Info = styled.div`
  width:100%;
`


export default Details