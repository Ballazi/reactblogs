import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



let componentDidMount = () => {
    window.scrollTo(0, 0);
}
componentDidMount()




const Technology = () => {
    const [state, setState] = useState(5);
    const [blogs,setBlogs] =useState([]);

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

    useEffect(()=>{
        const url = "https://react-blog-node-pro.herokuapp.com/api/v1/technology";
        axios.get(url).then((res) => {setBlogs(res.data.arr)}).catch((err) => {console.log(err)});
    })


    return (
        <div>
            <div className='home-latest-flex'>{blogs.slice(0,state).map(createTechnologyCards)}</div>
            <button onClick={() => setState(state +2)}>Load More</button>
        </div>
    )
}

export default Technology
