import React from 'react'
import Home from './Home'
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter> 

      <Route exact path="/" component={Home}/>


      </BrowserRouter>
    </div>
  )
}

export default App ;