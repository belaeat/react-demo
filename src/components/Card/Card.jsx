import Button from "../Buttons/Button";

function Card({ firstName, title, age, favAnimal, onClick }) {
  return (
    <div className="card">
      <p>{firstName}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Favorite Animal: {favAnimal}</p>
      <Button text="Edit" onClick={onClick} />
    </div>
  );
}

export default Card;
