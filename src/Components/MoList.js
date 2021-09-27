import React, { useState } from 'react'
import MoCard from './MoCard'
import MovieFiltre from './MovieFiltre';


function MoList({ films }) {
    const [text, setText] = useState('')
    const [rate, setRate] = useState('')

    const filterText = (text) => {
        setText(text)
    }


    const filterRate = (rate) => {
        setRate(rate)
    }
    return (
        <div>
            <MovieFiltre filterText={filterText} filterRate={filterRate} />

            <div style={{ display: 'flex', justifyContent: 'center', justifyContent: 'space-evenly' }}>



                {films.filter(el => el.titre.toLowerCase().includes(text.toLowerCase()) && el.rate >= rate).map(el => <MoCard film={el} />)}

            </div>  </div>
    )
}

export default MoList;