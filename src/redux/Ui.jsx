import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./reducer";

function Ui() {
  const { loading, posts, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPosts();
  },[dispatch]);

  if (loading)return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  return (
    <div>
      {posts.map((x) => {
        return <div key={posts.id}>{posts.title}</div>;
      })}
    </div>
  );
}

export default Ui;
