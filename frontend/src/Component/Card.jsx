import React, {useState} from 'react';
import './Card.css';

function Card(props){


return (
    <>
    <div className='cardmain'>
        <div className='cardimage'><img id="cardimg" src={props.src}/></div>
        <div className='cardtitle'>{props.title}</div>
        <div className='cardbtns'><button id="buynow">Buy now</button><button id="addtocart">Add to cart</button></div>
    </div>

    </>
)

}

export default Card;