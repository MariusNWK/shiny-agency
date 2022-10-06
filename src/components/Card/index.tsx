import DefaultPicture from "../../assets/profile.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useState } from "react";

interface CardProps {
  label: string;
  title: string;
  picture: string;
}

function Card(props: CardProps) {
  const { label, title, picture } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? "⭐️" : "";
  return (
    <CardWrapper onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
      <CardTitle>
        {star} {title} {star}
      </CardTitle>
    </CardWrapper>
  );
}

Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};

const CardTitle = styled.div`
  color: '#ffffff';
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

export default Card;
