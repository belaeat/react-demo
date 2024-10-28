import "./App.css";
import Card from "./Card";
import { useState } from "react";

// using useState() hook
function App() {
  const [person, setPerson] = useState({
    firstName: "Belaeat",
    title: "Developer",
    age: 45,
  });

  return (
    <div>
      <main>
        <Card
          firstName={person.firstName}
          title={person.title}
          age={person.age}
        />
        <Card firstName="Dummy" title="Developer" age="29" />
        <Card firstName="Shawon" title="Bepshayi" age="45" />
        <Card firstName="Andrei" title="Designer" age="25" />
        <Card firstName="Nikita" title="Bepshayi" age="25" />
        <Card firstName="Athina" title="Atel" age="25" />
      </main>
    </div>
  );
}

export default App;
