import Footer from "./Footer";

function About({ bio }) {
  return (
    <div className="about">
      <p>{bio}</p>

      <Footer />
    </div>
  );
}

export default About;
