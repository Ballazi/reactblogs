import React, {useState} from 'react'
import ArrayofBlogs from '../ArrayOfBlogs/ArrayofBlogs';
import { Link } from 'react-router-dom';
// import "./bollywood.css";


let createCards = (card) => {
    return <div key={card.id} className="home-latest-post">
        <img src={card.imgURL} alt="latest post" />

        <Link to={`/${card.category}/${card.id}`}> <div className="latest-post-title-1">
            {card.title}     </div></Link>

        <p> {card.desc.substring(0, 150)}</p>
        <div>
            <span className="latest-home-type"> {card.category}</span> <span className="latest-home-date"> {card.time}</span>
        </div>
    </div>
}




const Bollywood = () => {
    const [state, setState] = useState(5);
    let arr = ArrayofBlogs.filter((val) => val.category === "Bollywood");
    // const disable = () =>{
    //     if(state === arr.length)
    //         return true;
    //     else
    //         return false;
    // }
    return (
        <div>
            <div className='home-latest-flex'>{arr.slice(0,state).map(createCards)}</div>
            <button onClick={() => setState(state +2)} >Load More</button>
        </div>
    )
}

export default Bollywood
