function BlogPosts({ posts }) {
  return (
    <section>
      <h2>My Blog Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
}

export default BlogPosts;