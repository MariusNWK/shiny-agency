import { useState, useEffect } from "react";

function Results() {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/survey`)
      .then((response) => response.json()
      .then(({ surveyData }) => {
        console.log(surveyData);
        setQuestions(surveyData);
      })
      .catch((error) => console.log(error))
    );
  }, []);

  function handleClick() {
    console.log(questions);
  }

  return (
    <div>
      <h1>Results</h1>
      <button onClick={handleClick}>Console questions</button>
    </div>
  )
}

export default Results;
