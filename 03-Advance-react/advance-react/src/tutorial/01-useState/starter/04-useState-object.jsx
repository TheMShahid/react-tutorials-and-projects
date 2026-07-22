import { useState } from "react";

const useStateObject = () => {
  // only vars
  const [name, setName] = useState("shahid");
  const [age, setAge] = useState(23);
  const [hobby, setHobby] = useState("love to programming");

  // only object
  const [product, setProduct] = useState({
    name: "laptop",
    color: "black",
    price: 20000,
    company: "HP",
  });

  // update variables
  const displayPerson = () => {
    setName("khan");
    setAge(20);
    setHobby("interest in AI/ML");
  };

  // update object
  const displayProduct = () => {
    setProduct({
      name: "computer",
      color: "gray",
      price: 5000,
      company: "Dell",
    });
    setProduct("hi shahid khan");
    setProduct({ name: "new name" });
    setProduct({ ...product, company: "new company" });
  };

  return (
    <div>
      <h1>state variables</h1>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>joys to: {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show khan
      </button>

      <div style={{ marginTop: "3rem" }}>
        <h1>state object</h1>
        <h3>{product.name}</h3>
        <h3>{product.color}</h3>
        <h4>{product.price}</h4>
        <button className="btn" onClick={displayProduct}>
          change product
        </button>
      </div>
    </div>
  );
};

export default useStateObject;
