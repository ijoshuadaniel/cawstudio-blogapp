import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogPost, filterOut } from "./redux/blog";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogPost = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogPost());
  }, []);

  const filterOutData = (value) => {
    dispatch(filterOut(value));
  };

  return (
    <div className="App">
      <div className="container">
        <input
          type="search"
          onChange={(e) => filterOutData(e.target.value)}
          placeholder="Search Post"
          style={{ marginBottom: "1rem" }}
        />
        <div className="row">
          {blogPost.filteredData.map((post, i) => {
            return (
              <div
                className="col-md-4"
                key={i}
                onClick={() => navigate(`/${post.id}`)}
              >
                <div
                  className="card"
                  style={{ height: "230px", marginBottom: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
