export const Car = (props) => {
  const { name, detals, price, image } = props;

  return (
    <article className="car">
      <img src={image} alt={name} srcset="" />
      <div className="group">
        <h2>{name}</h2>
        <h4>{price}</h4>
      </div>
      <p>{detals}</p>
    </article>
  );
};
