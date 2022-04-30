import Footer from "./Footer";

function About({ bio }) {
  return (
    <div>
      <p>{bio}</p>

      <Footer />
    </div>
  );
}

export default About;
