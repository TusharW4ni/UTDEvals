// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function Results() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   console.log("state", state);
//   return (
//     // <div className="flex flex-row p-4">
//     //   <div className="flex flex-col w-1/4 space-y-2">
//     //     {response.map((course) => (
//     //       <button
//     //         key={course.id}
//     //         className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
//     //         onClick={() => setSelectedCourse(course)}
//     //       >
//     //         {course.id}
//     //       </button>
//     //     ))}
//     //   </div>
//     //   <div className="flex flex-col w-3/4 ml-4">
//     //     {selectedCourse && (
//     //       <table className="w-full bg-white rounded-lg shadow-md">
//     //         <thead>
//     //           <tr>
//     //             <th colSpan="2" className="p-2 bg-gray-200 text-gray-700">
//     //               {selectedCourse.id}
//     //             </th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {selectedCourse.questions.map((question) => (
//     //             <tr
//     //               key={question.description}
//     //               className="border-t border-gray-200"
//     //             >
//     //               <td className="p-2">{question.description}</td>
//     //               <td className="p-2">{question.mu}</td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </table>
//     //     )}
//     //   </div>
//     // </div>
//     <div className="flex flex-col h-screen bg-gray-100 fixed">
//       <div className="w-screen">
//         <button onClick={() => navigate("/")} className="m-5">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//             />
//           </svg>
//         </button>
//       </div>
//       <div className="bg-white h-full m-5 rounded-md border flex">
//         <div className="flex flex-col bg-blue-100 w-1/4 overflow-y-auto">
//           {state.map((course) => (
//             <button
//               key={course.id}
//               className="p-2 bg-white border hover:opacity-75 focus:outline-none hover:border-2 hover:border-gray-900"
//               onClick={() => setSelectedCourse(course)}
//             >
//               <p className="">{course.id}</p>
//               <p>
//                 {/* <span> */}
//                 {course.lName}, {course.fName} - {course.id.substring(11)}
//                 {/* </span> */}
//               </p>
//             </button>
//           ))}
//         </div>
//         <div className="bg-red-100 grow">dfafd</div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import QuestionChart from "./QuestionChart";

// const generateChartData = (question) => {
//   const data = {
//     labels: [
//       "Strongly Disagree",
//       "Disagree",
//       "Neutral",
//       "Agree",
//       "Strongly Agree",
//     ],
//     datasets: [
//       {
//         label: question.description,
//         data: [question.sd, question.d, question.n, question.a, question.sa],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const additionalMetrics = {
//     label: "Metrics",
//     data: [question.mu, question.sig, question.med, question.tot],
//     type: "line",
//     fill: false,
//     borderColor: "rgba(255, 159, 64, 1)",
//     borderWidth: 2,
//     pointRadius: 5,
//     pointHoverRadius: 7,
//     yAxisID: "metrics-y-axis",
//   };

//   data.datasets.push(additionalMetrics);

//   return data;
// };

const generateChartData = (question) => {
  const data = {
    labels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    datasets: [
      {
        label: question.description,
        data: [question.sd, question.d, question.n, question.a, question.sa],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Metrics",
        data: [question.mu, question.sig, question.med, question.tot],
        type: "line",
        fill: false,
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        yAxisID: "metrics-y-axis",
      },
    ],
  };

  return data;
};

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
                  {/* {selectedCourse.lName}, {selectedCourse.fName} -{" "}
                  {selectedCourse.id.substring(11)} */}
                  <span className="text-gray-500">Total Enrolled </span>
                  <span className="font-semibold">{selectedCourse.en}</span>
                </p>
                <p className="text-2xl mt-4">
                  {/* Total Responses {selectedCourse.rc} */}
                  <span className="text-gray-500">Total Responses </span>
                  <span className="font-semibold">{selectedCourse.rc}</span>
                </p>
                <div>
                  {/* {selectedCourse.questions.map((question, index) => (
                    <div key={index} className="my-4">
                      <Bar data={generateChartData(question)} />
                    </div>
                  ))} */}
                  {/* {selectedCourse.questions.map((question, index) => {
                    console.log("question", question);
                    console.log("index", index);
                  })} */}
                  {/* {Object.entries(
                    groupQuestionsByTag(selectedCourse.questions)
                  ).map(([tag, questions], index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold mt-6">
                        {tag.charAt(0).toUpperCase() +
                          tag.slice(1).toLowerCase()}
                      </h3>
                      {questions.map((question, qIndex) => (
                        <div key={qIndex} className="my-4">
                          <Bar data={generateChartData(question)} />
                        </div>
                      ))}
                    </div>
                  ))} */}
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
                          {/* <Bar data={generateChartData(question)} /> */}
                          {/* <Bar
                            data={generateChartData(question)}
                            options={{
                              scales: {
                                y: {
                                  beginAtZero: true,
                                },
                                metrics: {
                                  type: "linear",
                                  position: "right",
                                  grid: {
                                    drawOnChartArea: false,
                                  },
                                },
                              },
                            }}
                          /> */}
                          {/* <Bar
                            data={generateChartData(question)}
                            options={{
                              scales: {
                                y: {
                                  beginAtZero: true,
                                  title: {
                                    display: true,
                                    text: "Number of Responses",
                                    font: {
                                      size: 16,
                                    },
                                  },
                                },
                                metrics: {
                                  type: "linear",
                                  position: "right",
                                  grid: {
                                    drawOnChartArea: false,
                                  },
                                  title: {
                                    display: true,
                                    text: "Metrics",
                                    font: {
                                      size: 16,
                                    },
                                  },
                                },
                              },
                              plugins: {
                                legend: {
                                  position: "top",
                                },
                              },
                            }}
                          /> */}
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
