import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "./redux/blog";
import { useParams } from "react-router-dom";
import { getAllComments, clearComments } from "./redux/comments";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogPost = useSelector((state) => state.blog);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    console.log(id);
    dispatch(getSinglePost(id));
    dispatch(clearComments());
  }, []);

  console.log(blogPost.comments);

  const loadComments = () => {
    dispatch(getAllComments(id));
  };

  return (
    <div className="post">
      <div className="container">
        <h1>{blogPost.selectedPost.title}</h1>
        <p>{blogPost.selectedPost.body}</p>
        <button onClick={() => loadComments()}>Load Comments</button>
        <br />
        <br />
        <div className="row">
          {comments.comments.length > 0 &&
            comments.comments.map((com, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="card"
                  style={{ height: "230px", marginBottom: "1rem" }}
                >
                  <p>{com.name}</p>
                  <p>{com.email}</p>
                  <p>{com.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
