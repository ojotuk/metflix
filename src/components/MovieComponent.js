import React from 'react'

export default function MovieComponent({movie,onClickHandler}) {
    const {col} = movie
    return (<>
            {col.map(mov=>
        <div className="movie">
                <img src={mov.backdrop_path} />
                <div className="overlay">
                  <div className="title">{mov.title}</div>
                  <div className="rating">{mov.voting_average}</div>
                  <div className="plot">
                    {mov.overview}
                  </div>
                  <div data-toggled={`${mov.my_list}`} className="listToggle" onClick={()=>onClickHandler(mov,mov.my_list)} >
                    <div>
                        
                      <i className="fa fa-fw fa-plus"></i>
                      <i className="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>)}
    </>)
}
