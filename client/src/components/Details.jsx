import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { motion } from 'framer-motion';
import styled from 'styled-components'



function Details(){
    const params = useParams();
    const [details, setDetails] = useState({});
    const POSTER_PATH = "https://image.tmdb.org/t/p/original"
    const { movieId } = useParams()

  
    useEffect(() => {
      if (currentMovie) return;
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentMovie(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [currentMovie, movieId]);

    console.log(details.genres)
    return(
        <Wrapper
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}>
            {details && <><div>
              <img src={`${POSTER_PATH}${details.poster_path}`} alt="poster"/>
            </div>
            <Info>
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: details.title}}></h1>
                    <h3 dangerouslySetInnerHTML={{ __html: details.overview}}></h3>
                    <h3 dangerouslySetInnerHTML={{ __html: details.genres[0].name}}></h3>
                </div>
            </Info>
            </>}
            {details==null && <>
              <h2>Loading....</h2>
            </>}
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
  background: linear-gradient(35deg, #494949,#313131);
  color: white;
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height: 2.5rem;
}
ul{
  margin-top:2rem;
}
img{
    border-radius: 2rem;
      width: 23rem;
      height:17rem;
      object-fit: cover;
  }
`
const Info = styled.div`
  margin-left: 10rem;
`


export default Details