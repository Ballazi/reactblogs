import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



let componentDidMount = () => {
    window.scrollTo(0, 0);
}
componentDidMount()

const Food = () => {
    const [state, setState] = useState(5)
    const [blogs,setBlogs] =useState([]);

    const createFoodCard = (card) => {
        return (
            <div key={card.id}>
                <img src={card.imgURL} alt="Default img" />
                <Link to={`/${card.category}/${card.id}`}><div>{card.title}</div></Link>
                <p>{card.desc.substring(0,150)}</p>
                <div><span>{card.category}</span><span>{card.time}</span></div>
            </div>
        )
    }
    useEffect(() => {
        const url="https://react-blog-node-pro.herokuapp.com/api/v1/food";
        axios.get(url).then((res) => {setBlogs(res.data.arr)}).catch((err) => {console.log(err)});
    })

    return (
        <div>
            <div>{blogs.slice(0,state).map(createFoodCard)};</div>
            <button onClick={() => setState(state + 2)}>load more</button>
        </div>
    )
}

export default Food
