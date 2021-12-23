import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinkRouter from "./nav/router";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <LinkRouter />
      </div>
    </BrowserRouter>
  )
}

export default App;
