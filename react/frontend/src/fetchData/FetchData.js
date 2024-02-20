import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FetchData() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    } catch (error) {
      console.log({ error: error?.message || error });
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts?.map(({ userId, id, title, body }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
