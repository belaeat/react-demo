import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { persons } from "./array";

function App() {
  /* console.log(persons); */

  const [isLoggedIn, setLoggedIn] = useState(true);

  const clickHandler = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <main>
      {isLoggedIn ? (
        <div>
          <button className="log-btn" onClick={clickHandler}>
            Logout
          </button>
          <div className="list">
            {persons.map((person) => (
              <Card
                key={person.id}
                firstName={person.firstName}
                title={person.title}
                age={person.age}
                favAnimal={person.favAnimal}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={clickHandler}> Please login to see the list</button>
        </div>
      )}
    </main>
  );
}

export default App;
