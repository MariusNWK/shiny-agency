import { useContext } from "react";
import { SurveyContext } from "../../utils/context";

function Results() {
  const { answers } = useContext(SurveyContext);

  function handleClick() {
    console.log(answers);
  }

  return (
    <div>
      <h1>Results</h1>
      <button onClick={handleClick}>Console answers</button>
    </div>
  );
}

export default Results;
