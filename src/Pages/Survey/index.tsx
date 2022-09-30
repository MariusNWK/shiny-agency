import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../../utils/style/Atoms";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { SurveyContext, AnswerType } from "../../utils/context";

// interface SurveyDataType {
//   [index: number]: string;
// };

type SurveyDataType = Record<number, string>;

function Survey() {
  const { questionNumberStr } = useParams<{ questionNumberStr?: string }>();
  const questionNumber: number = parseInt(questionNumberStr || "1") || 1;
  const [surveyData, setSurveyData] = useState<SurveyDataType>({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { answers, saveAnswers } = useContext(SurveyContext);

  function handleUseEffect() {
    console.log("Survey mounted");
    async function fetchAnswers() {
      try {
        const response = await fetch(
          `http://localhost:8000/results/?a1={answer1}&a2={answer2}&a3={answer3}`
        );
        const obj: AnswerType[] = await response.json();
        // saveAnswers(obj);
        console.log(obj);
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
    async function fetchSurvey() {
      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const obj: { surveyData: SurveyDataType } = await response.json();
        setSurveyData(obj.surveyData);
        fetchAnswers();
      } catch (err) {
        console.log(err);
      } finally {
        setDataLoaded(true);
      }
    }
    fetchSurvey();
    return () => {
      console.log("Survey unmounted");
    };
  }
  useEffect(handleUseEffect, [saveAnswers]);

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumberStr}</QuestionTitle>
      {dataLoaded ? (
        <div>
          <QuestionContent>
            {surveyData[questionNumber] || "Pas de données"}
          </QuestionContent>
          <AnswerContent>
            Réponse
          </AnswerContent>
        </div>
      ) : (
        <Loader />
      )}
      <LinkWrapper>
        {questionNumber > 1 && (
          <Link to={"/survey/" + (questionNumber - 1).toString()}>
            Précédent
          </Link>
        )}
        {questionNumber < 10 ? (
          <Link to={"/survey/" + (questionNumber + 1).toString()}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
}

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const AnswerContent = styled.h2`
  margin: 40px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

export default Survey;
