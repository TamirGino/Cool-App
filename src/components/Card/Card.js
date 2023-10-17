import React from 'react';
import card from './card.css'

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <>
        <div className='card grow'>
                <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
                <div>
                <h2>{name}</h2>
                <p>{email}</p>
                </div>
        </div>
    </>
    );
}

export default Card;