import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Results from "./components/Results";
import Spinner from "./components/Spinner";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [response, setResponse] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("courses");
  const navigate = useNavigate();

  const handleClick = async () => {
    setButtonClicked(true);
    try {
      let res;
      if (selectedOption === "courses") {
        res = await axios.post("http://localhost:8080/search/courses", {
          searchTerm,
        });
      } else {
        res = await axios.post("http://localhost:8080/search/instructors", {
          searchTerm,
        });
      }
      console.log("res.data", res.data);
      setResponse(res.data);
      navigate("/results", { state: res.data });
    } catch (error) {
      console.log("error handling click", error);
    } finally {
      setButtonClicked(false);
    }
    // console.log("searchTerm", searchTerm);
    // console.log("selectedOption", selectedOption);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 fixed">
        <p className="text-4xl mb-4 space-x-4">
          <span className="font-bold">UTD</span>
          <span className="font-thin">Evaluations</span>
        </p>
        <form
          className="flex w-screen justify-center "
          onSubmit={(e) => {
            e.preventDefault();
            if (searchTerm !== "") {
              handleClick();
            } else {
              toast.error("Search term cannot be empty");
            }
          }}
        >
          <input
            className="w-3/4 md:w-1/2 rounded-l-full border-gray-200 py-2 px-6 border outline-none focus:border-gray-900 focus:bg-gray-500 transition-all duration-300 ease-in-out focus:text-white hover:border-gray-500"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="py-3 px-2 bg-white border border-gray-200 hover:border-gray-500 focus:bg-gray-500 focus:text-white focus:border-gray-900 transition-all duration-200 ease-in-out"
          >
            <option value="courses">Search in: Courses</option>
            <option value="instructors">Search in: Instructors</option>
          </select>
          <button
            className="rounded-r-full py-2 px-4 bg-white border border-gray-200 hover:border-gray-500 active:bg-gray-500 active:text-white active:border-gray-500 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={buttonClicked}
          >
            {buttonClicked ? (
              <Spinner />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            )}
          </button>
        </form>
        {/* {response.length > 0 && <Results response={response} />} */}
        {/* {response.length > 0 && } */}
      </div>
    </>
  );
}
