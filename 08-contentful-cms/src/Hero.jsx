import heroImag from "./picture.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            fugit laudantium explicabo sit nihil nobis, voluptatum, odio beatae
            atque tempore harum rem fugiat! Quia provident consectetur fugit!
            Exercitationem, dolore expedita.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImag} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
