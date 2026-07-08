import cars from "./cars";
import { Car } from "./Car";

const CarList = () => {
  return (
    <section className="carlist">
      {cars.map((car) => {
        return <Car key={car.id} {...car} />;
      })}
    </section>
  );
};

export default CarList;
