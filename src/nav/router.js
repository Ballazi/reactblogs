import Catogary from "./links";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Bollywood from "../components/bollywood/Bollywood";
import Technology from "../components/technology/Technology";
import Hollywood from "../components/hollywood/Hollywood";
import Food from "../components/food/Food";
import Travel from "../components/travel/Travel";

const LinkRouter = () => {
    return (
        <div>
            <Catogary />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/bollywood" element={<Bollywood />} />
                <Route exact path="/technology" element={<Technology />} />
                <Route exact path="/hollywood" element={<Hollywood />} />
                <Route exact path="/travel" element={<Travel />} />
                <Route exact path="/food" element={<Food />} />
            </Routes>
        </div>
    )
}

export default LinkRouter
