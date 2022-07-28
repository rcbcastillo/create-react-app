import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from './Components/Articles';
import {Home} from './Components/Home';
import Topics from './Components/Topics';
import Article from './Components/Article';


const App = ()  => {
    return (
    <div>     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route path="/topics" element={<Topics />}></Route>                   
          <Route path="/article/:article_id" element={<Article />}></Route>          
        </Routes>
      </BrowserRouter>       
    </div>
  )
  
}

export default App;
