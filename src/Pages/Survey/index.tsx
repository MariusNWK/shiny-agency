import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { Loader } from "../../utils/style/Atoms";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { SurveyContext } from "../../utils/context";
import { useFetch } from "../../utils/hooks";

// interface SurveyDataType {
//   [index: number]: string;
// };
// équivaut à :
type SurveyDataType = Record<number, string>;

interface DataType {
  surveyData?: SurveyDataType;
}

interface UseFetchType {
  isLoaded: boolean;
  data: DataType;
  error: boolean;
}

function Survey() {
  const { questionNumberStr } = useParams<{ questionNumberStr?: string }>();
  const questionNumber: number = parseInt(questionNumberStr || "1") || 1;
  const { answers, saveAnswers } = useContext(SurveyContext);
  const { isLoaded, data, error }: UseFetchType = useFetch(`http://localhost:8000/survey`);
  const { surveyData } = data;

  function saveReply(answer: boolean) {
    saveAnswers({ [questionNumber]: answer });
  }

  if (error) {
    return <span>Il y a un problème</span>;
  }
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumberStr}</QuestionTitle>
      {isLoaded ? (
        <div>
          <QuestionContent>
            {surveyData && (surveyData![questionNumber] || "Pas de données")}
          </QuestionContent>
          {answers && (
            <ReplyWrapper>
              <ReplyBox
                onClick={() => saveReply(true)}
                isSelected={answers[questionNumber] === true}
              >
                Oui
              </ReplyBox>
              <ReplyBox
                onClick={() => saveReply(false)}
                isSelected={answers[questionNumber] === false}
              >
                Non
              </ReplyBox>
            </ReplyWrapper>
          )}
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
        {(!isLoaded) || (surveyData && surveyData[questionNumber + 1]) ? (
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

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button<{ isSelected?: boolean }>`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Survey;
