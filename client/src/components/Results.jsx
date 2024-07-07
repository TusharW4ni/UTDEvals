import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionChart from "./QuestionChart";

const groupQuestionsByTag = (questions) => {
  return questions.reduce((groups, question) => {
    const { tag } = question;
    if (!groups[tag]) {
      groups[tag] = [];
    }
    groups[tag].push(question);
    return groups;
  }, {});
};

export default function Results() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100 fixed">
      <div className="w-screen">
        <button onClick={() => navigate("/")} className="m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-grow m-5 rounded-md border bg-white h-0">
        {state.length > 0 ? (
          <>
            <div className="flex flex-col bg-blue-100 w-1/4 overflow-y-auto h-full">
              {state.map((course) => (
                <button
                  key={course.id}
                  className="p-2 m-1 bg-white border text-left hover:opacity-75 focus:outline-none hover:border-2 hover:border-gray-900"
                  onClick={() => setSelectedCourse(course)}
                >
                  <p>
                    {course.id.replace(/([a-zA-Z])(\d)/, "$1 $2").slice(0, -4)}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {course.lName}, {course.fName} - {course.id.substring(11)}
                  </p>
                </button>
              ))}
            </div>
            {selectedCourse && (
              <div className="p-5 grow overflow-y-auto">
                <p>
                  <span className="text-4xl font-semibold">
                    {selectedCourse.id
                      .replace(/([a-zA-Z])(\d)/, "$1 $2")
                      .slice(0, -8)}
                  </span>
                  <span className="text-4xl font-semibold text-gray-400">
                    {selectedCourse.id.slice(-8, 10)}
                  </span>
                </p>
                <p className="text-gray-500 text-2xl mt-4">
                  {selectedCourse.lName}, {selectedCourse.fName} -{" "}
                  {selectedCourse.id.substring(11)}
                </p>
                <p className="text-2xl mt-4">
                  <span className="text-gray-500">Total Enrolled </span>
                  <span className="font-semibold">{selectedCourse.en}</span>
                </p>
                <p className="text-2xl mt-4">
                  <span className="text-gray-500">Total Responses </span>
                  <span className="font-semibold">{selectedCourse.rc}</span>
                </p>
                <div>
                  {Object.entries(
                    groupQuestionsByTag(selectedCourse.questions)
                  ).map(([tag, questions], index) => (
                    <details key={index} className="my-4">
                      <summary className="text-2xl font-bold mt-6 cursor-pointer">
                        {tag.charAt(0).toUpperCase() +
                          tag.slice(1).toLowerCase()}
                      </summary>
                      {questions.map((question, qIndex) => (
                        <div key={qIndex} className="my-4">
                          <QuestionChart question={question} />
                        </div>
                      ))}
                    </details>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center items-center w-full font-mono">
            NO RESULTS FOUND
          </div>
        )}
      </div>
    </div>
  );
}
