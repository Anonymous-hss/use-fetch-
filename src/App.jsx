import { useFetch, usePostTitle } from "./hooks/useFetch";

function App() {
  const { finalData } = useFetch("https://jsonplaceholder.org/posts/1");
  return <>{JSON.stringify(finalData)}</>;
}

export default App;
