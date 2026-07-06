const CarList = () => {
  return (
    <section className="carlist">
      <Car />
      <Car />
      <Car />
    </section>
  );
};

const Car = () => {
  return (
    <article className="car">
      <CarPicture />
      <div className="group">
        <CarName />
        <CarPrice />
      </div>
      <CarDetails />
    </article>
  );
};

const CarPicture = () => (
  <img
    src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=STUD_3QTR&size=600&model=my&options=$APFA,$IBB3,$PN01,$SC04,$MDLY,$WY18P,$MTY61,$STY5B,$CPF0&crop=1150,647,390,180&"
    alt=""
  />
);

const CarName = () => <h2>Rear-Wheel Drive</h2>;
const CarPrice = () => <h4 className="price">$39,490</h4>;
const CarDetails = () => {
  return <p>Demo Vehicle with 1,006 mi</p>;
};

export default CarList;
