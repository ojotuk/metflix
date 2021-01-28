import React, { Component, Fragment } from 'react';
import MovieComponent from './MovieComponent';
import * as MovieAPI from '../lib/MovieAPI';

class App extends Component {


  state={
    allMovies:[],
    allGenres:[],
    groupedMovies:[]
  }

  componentDidMount(){
    this.allMoviesCollection()
    this.allGenreCollection()
    // this.mappedMovie()
  }
  
  
  allMoviesCollection=async()=>{
    const data =await MovieAPI.getAll();
    const response = await data
    // console.log(response)
    this.setState({allMovies:response})
  }
  allGenreCollection = async ()=>{
    const data =await MovieAPI.genres();
    const response = await data
    this.setState({allGenres:response})

    // console.log(response)
    this.mappedMovie()
  }
  mappedMovie = ()=>{
    let movie = {};
    let allMovie = []
      this.state.allGenres.forEach(genre=>{
        movie.genre=genre.name;
        let col =this.state.allMovies.filter(item=>item.genre_ids.includes(genre.id))
        movie.col=col
        allMovie.push(movie)
        movie={}
      })
      allMovie.sort((a,b)=>{
        if(a.genre>b.genre) return -1
      })
      this.setState({groupedMovies:allMovie.reverse()})
      // console.log(this.state.groupedMovies)
  }
  updateMovieRecord =(id)=>{
    let update = this.state.groupedMovies.filter(item=>item.col.find(data=>data.id!==id))
    this.setState({groupedMovies:update})
  }
  
  addMovieToList=(movie,inList)=>{
      switch (inList) {
          case false:
            MovieAPI.addToList(movie)
            this.allMoviesCollection()

    this.allGenreCollection()
this.updateMovieRecord(movie.id)
              break;
          case true:
            MovieAPI.removeFromList(movie)
    this.allGenreCollection()

            this.allMoviesCollection()
this.updateMovieRecord(movie.id)

              break;
          default:
              break;
      }
      }
  render = () => {
    return (
      <Fragment>
        <header className="header">
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </a>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li>
                  <a href="/myList">My List</a>
                </li>
              </ul>
            </nav>
          </div>
          <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div className="searchResults"></div>
          </form>
        </header>
          {this.state.groupedMovies.map(item=><>
          {item.col.length!==0 ? 
            <div className="titleList">
          <div className="title">
            
            <h1>{item.genre}</h1>
            <div className="titles-wrapper">
                  <MovieComponent movie={item} onClickHandler={this.addMovieToList.bind(this)}/>
              </div>
              </div>
            </div>: null}
          </>)}
             </Fragment>
    );
  };
}

export default App;
