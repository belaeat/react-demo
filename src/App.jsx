import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { persons } from "./array";
import Button from "./components/Buttons/Button";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  /* Simple rule: state jekhane thakbe function o shekhane thakbe */
  const toggleLogin = () => {
    setLoggedIn((prevState) => !prevState);
  };

  /* Ekhan theke handleClick function ta ke pass kora hoyeche card componenet e. And then shekhan theke low level (jekhane trigger hobe) shekhane pass kora hocche */
  const handleClick = (id) => {
    console.log("Button Clicked", id);
  };

  return (
    <main>
      {isLoggedIn ? (
        <div>
          {/* Ekhane onClick hocche ekta attribute. Component er tag er moddhe jei data pass kora hoy tar shobguloi hocche attribute. */}
          <Button
            text={isLoggedIn ? "Log Out" : "Login"}
            onClick={toggleLogin}
          />
          <div className="list">
            {persons.map((person) => (
              <Card
                key={person.id}
                firstName={person.firstName}
                title={person.title}
                age={person.age}
                favAnimal={person.favAnimal}
                onClick={() => handleClick(person.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Button
            text={isLoggedIn ? "Log Out" : "Login"}
            onClick={toggleLogin}
          />
        </div>
      )}
    </main>
  );
}

export default App;
