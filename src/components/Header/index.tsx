import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeLogo from "../../assets/dark-logo.png";
import { StyledLink } from "../../utils/style/Atoms";
import moment from "moment";
import "moment/locale/fr";
import colors from "../../utils/style/colors";
import { useEffect, useState } from "react";

function Header() {
  moment.locale("fr");
  const [date, setDate] = useState(moment().format("LL hh:mm:ss"));

  useEffect(() => {
    let now = moment();
    console.log(now.format("YYYY"));
    console.log(now.format("YY"));
    console.log(now.format("dddd"));
    console.log(now.format("h:mm:ss"));
    console.log(now.format("[Nous sommes en] YYYY"));

    console.log(moment().fromNow());
    console.log(moment(new Date("2000")).fromNow());
    console.log(moment().startOf("day").fromNow());
    console.log(moment().endOf("day").fromNow());
    console.log(moment().startOf("hour").fromNow());

    console.log(moment().calendar());
    console.log(moment().subtract(6, "days").calendar());
    console.log(moment().add(1, "days").calendar());
    console.log(moment().add(3, "days").calendar());
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment().format("LL hh:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledNav>
      <Link to="/">
        <StyledImg src={HomeLogo} />
      </Link>
      <StyledDate>{date}</StyledDate>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledNav>
  );
}

const StyledDate = styled.div`
  color: #ffffff;
  font-size: 2.2rem;
  padding: 10px;
  border: solid;
  background-color: ${colors.secondary};
  border-radius: 40px;
  border-color: ${colors.primary};
`;

const StyledNav = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 70px;
`;

export default Header;
