import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ArrayofBlogs from '../ArrayOfBlogs/ArrayofBlogs';


const createTechnologyCards = (card) => {
    return(

        <div key={card.id}>
            <img src={card.imgURL} alt="default img" />
            <Link to={`/${card.category}/${card.id}`}><div>{card.title}</div></Link>
            <p> {card.desc.substring(0,150)}</p>
            <div>
                <span className="latest-home-type1"> {card.category}</span> <span className="latest-home-date1"> {card.time}</span>
            </div>
        </div>
    )
}



const Technology = () => {
    const [state, setState] = useState(5);
    let arr = ArrayofBlogs.filter(val => val.category === "Technology");
    return (
        <div>
            <div className='home-latest-flex'>{arr.slice(0,state).map(createTechnologyCards)}</div>
            <button onClick={() => setState(state +2)}>Load More</button>
        </div>
    )
}

export default Technology
