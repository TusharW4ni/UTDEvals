import { useState } from "react";
import axios from "axios";

export default function App() {
  const [response, setResponse] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = async () => {
    setButtonClicked(true);
    try {
      const res = await axios.get("http://localhost:8080/");
      setResponse(res.data);
    } catch (error) {
      console.log("error handling click");
    } finally {
      setButtonClicked(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={handleClick}>Click me</button>
      <div>
        {response.length > 0 ? (
          response.map((item) => (
            <div key={item.ID}>
              <p>ID: {item.ID}</p>
              <p>Name: {item.NAME}</p>
            </div>
          ))
        ) : buttonClicked ? (
          <p>Loading... </p>
        ) : (
          <p> No data available</p>
        )}
      </div>
    </div>
  );
}
