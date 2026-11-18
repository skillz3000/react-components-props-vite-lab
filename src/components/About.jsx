function About({ author, about }) {
  return (
    <section>
      <h2>About Me</h2>
      <h3>{author}</h3>
      <p>{about}</p>
    </section>
  );
}

export default About;