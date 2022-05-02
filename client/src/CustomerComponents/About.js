function About({ bio }) {
  console.log("bio:", bio);

  return (
    <div className="about">
      <p>{bio}</p>
    </div>
  );
}

export default About;
