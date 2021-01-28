import React,{useState,useEffect} from 'react'
import * as MovieAPI from '../lib/MovieAPI';

export default function Home2() {
const [state,setState] = useState({
    allMovies:[],
    allGenres:[],
    groupedMovies:[]
  })
    const allMoviesCollection=async()=>{
        const data =await MovieAPI.getAll();
        const response = await data
        console.log(response)
        setState({...state,allMovies:response})
      }
      const allGenreCollection = async ()=>{
        const data =await MovieAPI.genres();
        const response = await data
        setState({...state,allGenres:response})
    
        // console.log(response)
        mappedMovie()
      }
    const  mappedMovie = ()=>{
        let movie = {};
        let allMovie = []
          state.allGenres.forEach(genre=>{
            movie.genre=genre.name;
            let col =state.allMovies.filter(item=>item.genre_ids.includes(genre.id))
            movie.col=col
            allMovie.push(movie)
            movie={}
          })
          setState({groupedMovies:allMovie})
      }
      useEffect(()=>{
          allGenreCollection()
          allMoviesCollection()
          console.log(state)
        
      },[])
    return (
        <div>
            hello
        </div>
    )
}
