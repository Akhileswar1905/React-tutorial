import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    err,
    isLoading,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {err && <div>{err}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
