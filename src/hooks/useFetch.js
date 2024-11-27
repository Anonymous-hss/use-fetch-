import { useEffect, useState } from "react";

export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPost() {
    const posts = await fetch("https://jsonplaceholder.org/posts/1");
    const response = await posts.json();
    setPost(response);
  }

  useEffect(() => {
    getPost();
  }, []);

  return post.title;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  return {
    finalData,
  };
}
