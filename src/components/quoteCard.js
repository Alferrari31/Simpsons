import React from 'react'

export default function Cards(props) {
    return (
        <div>
            <p>{props.character}</p>
            <p>{props.characterDirection}</p>
            <img src={props.image} alt="Simpsons"/>
            <p>{props.quote}</p>
        </div>
    )
}
