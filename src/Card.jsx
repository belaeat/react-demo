function Card(props) {
  return (
    <div className="card">
      <p>{props.firstName}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
      <p>Favourite Animal: {props.favAnimal}</p>
    </div>
  );
}

export default Card;
