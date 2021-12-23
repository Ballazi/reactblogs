import React from 'react'
import { Link } from 'react-router-dom';


const Catogary = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bollywood">Bollywood</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/hollywood">Hollywood</Link></li>
                    <li><Link to="/travel">Travel</Link></li>
                    <li><Link to="/food">Food</Link></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Catogary
