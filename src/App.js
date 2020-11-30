import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [devotional, setDevotional] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://devotionals-api.herokuapp.com/api/v1/devotionals/today")
      .then(({ data }) => setDevotional(data[0]))
      .catch(err => setError(err))
      .finally(() => setIsLoaded(true));
  }, []);

  if (error) {
    return (
      <div className="App">
        <h1 className="message">Error</h1>
        <p>
          Hubo un error al cargar la información. Por favor, intente más tarde.
        </p>
      </div>
    );
  } else if (isLoaded)
    return (
      <div className="App">
        <div className="background" />
        <div className="center-container">
          <h1 className="title">
            {devotional.title}
          </h1>
          <p className="date">
            {devotional.date}
          </p>
          <p className="vers">
            {devotional.vers}
          </p>
          <p className="content">
            {devotional.content}
          </p>
        </div>
      </div>
    );
  else
    return (
      <div className="App">
        <h1 className="message">Cargando...</h1>
      </div>
    );
}

export default App;
