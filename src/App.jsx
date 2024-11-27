import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [post, setPost] = useState({});

  async function getPost() {
    const post = await fetch("https://jsonplaceholder.org/posts/1");
    const response = await post.json();
    setPost(response);
  }

  useEffect(() => {
    getPost();
  }, []);

  return <>{post.title} </>;
}

export default App;
