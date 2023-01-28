import { Route, Routes } from "react-router-dom";
import Home from "./home";
import "./App.css";
import Post from "./post";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
