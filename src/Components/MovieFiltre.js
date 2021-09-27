import React from 'react'
import ReactStars from "react-rating-stars-component";


function MovieFilter({filterText,filterRate}) {
    return (
        <div>
            <input onChange={(e)=>{filterText(e.target.value)}}  />

            <ReactStars
    count={5}
    size={24}
    onChange={(newRating)=>filterRate(newRating)}
    edit={true}
    activeColor="#ffd700"
  />
        </div>
    )
}

export default MovieFilter;