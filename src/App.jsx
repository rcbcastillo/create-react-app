import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from './Components/Articles'
import {Home} from './Components/Home'

const App = ()  => {
    return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
        </Routes>
      </BrowserRouter>       
    </div>
  )
  
}

export default App;
