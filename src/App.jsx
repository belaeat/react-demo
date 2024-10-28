import "./App.css";
import Card from "./Card";
import { useState } from "react";

// using useState() hook
function App() {
  const [person, setPerson] = useState({
    firstName: "Belaeat",
    title: "Developer",
    age: 45,
    favAnimal: "Cat",
  });

  return (
    <div>
      <main>
        <Card
          firstName={person.firstName}
          title={person.title}
          age={person.age}
          favAnimal={person.favAnimal}
        />
        <Card firstName="Dummy" title="Developer" age="29" favAnimal="Cat" />
        <Card firstName="Shawon" title="Bepshayi" age="45" favAnimal="Cat" />
        <Card firstName="Andrei" title="Designer" age="25" favAnimal="Cat" />
        <Card firstName="Nikita" title="Bepshayi" age="25" favAnimal="Cat" />
        <Card firstName="Athina" title="Atel" age="25" favAnimal="Cat" />
      </main>
    </div>
  );
}

export default App;
