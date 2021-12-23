import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import ArrayofBlogs from '../ArrayOfBlogs/ArrayofBlogs';

let componentDidMount = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
componentDidMount();

const Hollywood = () => {
    const [state, setState] = useState(5);
    let arr = ArrayofBlogs.filter((val) => val.category === "Hollywood");
    
    useEffect(() =>{
        // window.scrollTo({top:0,left:0,behavior:"smooth"});
        console.log("called");
    })

    const createHollywoodCard = (card) => {
        return(
            <div key={card.id}>
                <img src={card.imgURL} alt="Default img" />
                <Link to={`/${card.category}/${card.id}`}><div>{card.title}</div></Link>
                <p>{card.desc.substring(0,150)}</p>
                <div><span>{card.category}</span><span>{card.time}</span></div>
            </div>
        )
    }


    return (
        <div>
            <div>{arr.slice(0,state).map(createHollywoodCard)}</div>
            <button onClick={() => setState(state + 2)}>Lode More</button>
        </div>
    )
}

export default Hollywood
