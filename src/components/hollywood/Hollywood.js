import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";




let componentDidMount = () => {
    window.scrollTo(0, 0);
}
componentDidMount()



const Hollywood = () => {
    const [state, setState] = useState(5);
    // let arr = ArrayofBlogs.filter((val) => val.category === "Hollywood");
    const [blogs,setBlogs] = useState([]);
    
    useEffect(() =>{
        // window.scrollTo({top:0,left:0,behavior:"smooth"});
        const category = "Hollywood";
        const url = "https://testing-react-blog.herokuapp.com/api/v1/hollywood/";
        axios.get(url,{params:{category:category}}).then((res) => {setBlogs(res.data.arr)}).catch((err) => {console.log(err);})

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
            <div>{blogs.slice(0,state).map(createHollywoodCard)}</div>
            <button onClick={() => setState(state + 2)}>Lode More</button>
        </div>
    )
}

export default Hollywood
