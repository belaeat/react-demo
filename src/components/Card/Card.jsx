function Card({ firstName, title, age, favAnimal }) {
  return (
    <div className="card">
      <p>{firstName}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>Favorite Animal: {favAnimal}</p>
    </div>
  );
}

export default Card;
