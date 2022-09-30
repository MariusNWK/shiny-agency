import { useEffect } from "react";

function Results() {
  useEffect(() => {
    fetch(`http://localhost:8000/survey`)
      .then((response) => response.json()
      .then(({ surveyData }) => console.log(surveyData))
      .catch((error) => console.log(error))
    );
  }, []);
  return (
    <div>
      <h1>Results</h1>
    </div>
  )
}

export default Results;