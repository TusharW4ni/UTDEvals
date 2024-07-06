import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [response, setResponse] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl font-bold font-mono mb-4">UTDEvals</p>
      <input
        className="w-3/4 md:w-1/2 rounded-full border-2 border-gray-200 p-2"
        placeholder="Search Instructor or Course Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
