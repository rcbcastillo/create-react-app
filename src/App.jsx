import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from './Components/Articles';
import {Home} from './Components/Home';
import TopicsList from './Components/TopicsList';


const App = ()  => {
    return (
    <div>     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route path="/topics" element={<TopicsList />}></Route>
        </Routes>
      </BrowserRouter>       
    </div>
  )
  
}

export default App;
