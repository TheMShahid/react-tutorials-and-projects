import Person from "./Person";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
};

export default List;
