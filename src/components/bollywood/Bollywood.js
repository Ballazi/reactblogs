import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
// import "./bollywood.css";


let componentDidMount = () => {
    window.scrollTo(0, 0);
}
componentDidMount()




const Bollywood = () => {
    const [state, setState] = useState(5);
    const [blogs,setBlogs] = useState([]);

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

    useEffect (() => {
        const url = "https://react-blog-node-pro.herokuapp.com/api/v1/bollywood/";
        axios.get(url).then((res) => {setBlogs(res.data.arr)}).catch((err) => {console.log(err)});
    })



    return (
        <div>
            <div className='home-latest-flex'>{blogs.slice(0,state).map(createCards)}</div>
            <button onClick={() => setState(state +2)} >Load More</button>
        </div>
    )
}

export default Bollywood
