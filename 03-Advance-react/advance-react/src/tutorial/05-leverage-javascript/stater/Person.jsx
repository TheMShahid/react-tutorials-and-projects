const Person = ({ name, nickName = "default value", images }) => {
  // const img1 = images[0].small.url;
  // const img2 = images && images[0] && images[0].small && images[0].small.url;

  // const img3 = images?.[0]?.small?.url || "default image";
  // const img3 = images?.[0]?.small?.url ?? "nullish coalescing";

  const img4 = images?.[0]?.small?.url; // optional chaining

  return (
    <div>
      <img src={img4} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      {/* <p>Nick Name: {nickName || "default value"}</p> */}
      <p>Nick Name: {nickName}</p>
    </div>
  );
};

export default Person;
