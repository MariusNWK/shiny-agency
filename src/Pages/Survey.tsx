import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function Survey() {
  const { questionNumber } = useParams() as any;

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <nav>
        {questionNumber > 1 && (
          <Link to={"/survey/" + (parseInt(questionNumber) - 1).toString()}>
            Précédent
          </Link>
        )}
        {questionNumber < 10 ? (
          <Link to={"/survey/" + (parseInt(questionNumber) + 1).toString()}>
            Suivant
          </Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </nav>
    </div>
  );
}

export default Survey;
