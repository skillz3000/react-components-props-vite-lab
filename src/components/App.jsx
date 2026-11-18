import Header from "./Header";
import About from "./About";
import BlogPosts from "./BlogPosts";
import Footer from "./Footer";

import blog from "../blog";
import "../App.css";

function App() {
  return (
    <div>
      <Header title={blog.title} />

      <About
        author={blog.author}
        about={blog.about}
      />

      <BlogPosts posts={blog.posts} />

      <Footer author={blog.author} />
    </div>
  );
}

export default App;