import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ArrayofBlogs from '../ArrayOfBlogs/ArrayofBlogs'

const createFoodCard = (card) => {
    return (
        <div key={card.id}>
            <img src={card.imgURL} alt="Default image" />
            <Link to={`/${card.category}/${card.id}`}><div>{card.title}</div></Link>
            <p>{card.desc.substring(0,150)}</p>
            <div><span>{card.category}</span><span>{card.time}</span></div>
        </div>
    )
}




const Food = () => {
    const [state, setState] = useState(5)
    const arr = ArrayofBlogs.filter((val) => val.category === "Food");
    return (
        <div>
            <div>{arr.slice(0,state).map(createFoodCard)};</div>
            <button onClick={() => setState(state + 2)}>load more</button>
        </div>
    )
}

export default Food
