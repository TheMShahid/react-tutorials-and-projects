import AboutImage from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={AboutImage} alt="about image" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            consequuntur maxime, error nam sequi ipsum vel iusto fuga quidem sed
            at, in a. Aperiam deserunt minus atque iusto blanditiis libero?
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
