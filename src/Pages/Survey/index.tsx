import { useParams, Link } from "react-router-dom";

function Survey() {
  const { questionNumberStr } = useParams<{ questionNumberStr?: string }>();
  console.log(questionNumberStr);
  const questionNumber = parseInt(questionNumberStr || "1") || 1;

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumberStr}</h2>
      <nav>
        {questionNumber > 1 && (
          <Link to={"/survey/" + (questionNumber - 1).toString()}>
            Précédent
          </Link>
        )}
        {questionNumber < 10 ? (
          <Link to={"/survey/" + (questionNumber + 1).toString()}>
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
