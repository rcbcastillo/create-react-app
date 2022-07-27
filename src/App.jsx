import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from './Components/Articles';
import {Home} from './Components/Home';
import Topics from './Components/Topics';


const App = ()  => {
    return (
    <div>     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route path="/topics" element={<Topics />}></Route>          
        </Routes>
      </BrowserRouter>       
    </div>
  )
  
}

export default App;
