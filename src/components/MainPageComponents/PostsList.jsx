import Post from "./Post";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = import.meta.env.VITE_LOCAL_URL;

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then(res => setPosts(res.data))
  }, []);

  const postsCards = posts.map(p => (
    <li key={p.id}>
      <Link to={`/posts/${p.id}`} className='link-normalizer'>
        <div className="block">
          <Post post={p} />
        </div>
      </Link>
    </li>
  ))

  return (
    <ul>{postsCards}</ul>
  );
}