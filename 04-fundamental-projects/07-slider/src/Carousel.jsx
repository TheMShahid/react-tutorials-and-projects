import { useState } from "react";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextPerson = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };
  const prevPerson = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let slideId = setInterval(() => {
      nextPerson();
    }, 2000);
    return () => {
      clearInterval(slideId);
    };
  }, []);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        {
          /* console.log(person); */
        }
        const { id, name, image, title, quote } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}>
            <img src={image} alt={name} className="person-img" />
            <h4 className="name">{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="next" onClick={nextPerson}>
        <FiChevronRight />
      </button>
      <button type="button" className="prev" onClick={prevPerson}>
        <FiChevronLeft />
      </button>
    </section>
  );
};
export default Carousel;
