import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesByTopic from "./Components/ArticlesByTopic";
import { Home } from "./Components/Home";
import Topics from "./Components/Topics";
import Article from "./Components/Article";
import SearchArticles from "./Components/SearchArticles";
import Comments from "./Components/Comments";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<SearchArticles />}></Route>
          <Route path="/articles/:topic" element={<ArticlesByTopic />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/article/:article_id" element={<Article />}></Route>
          <Route path="/comments/:comment_id" element={<Comments />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
