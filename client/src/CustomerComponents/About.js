function About({ bio }) {
  return (
    <div className="about">
      <p>{bio}</p>
      <form className="about-form">
        <input className="about-input" type="text" />
      </form>
    </div>
  );
}

export default About;
