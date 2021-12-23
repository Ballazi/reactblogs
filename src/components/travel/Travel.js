import React, {useState} from 'react'
import ArrayofBlogs from '../ArrayOfBlogs/ArrayofBlogs';
import { Link } from 'react-router-dom';


let createTravelCards = (card) => {
    return <div key={card.id} className="home-latest-post5">
        <img src={card.imgURL} alt="latest post" />
        <Link to={`/${card.category}/${card.id}`}>
             <div className="latest-post-title-11">{card.title}</div>
        </Link>
        <p> {card.desc.substring(0,150)}</p>
        <div>
            <span className="latest-home-type1"> {card.category}</span> <span className="latest-home-date1"> {card.time}</span>
        </div>
    </div>
}



const Travel = () => {
    const [state, setState] = useState(5);
    let arr = ArrayofBlogs.filter((val) => val.category === "Travel");
    return (
        <div>
            <div className='home-latest-flex'>{arr.slice(0,state).map(createTravelCards)}</div>
            <button onClick={() => setState(state +2)}>Load More</button>
        </div>
    )
}

export default Travel
