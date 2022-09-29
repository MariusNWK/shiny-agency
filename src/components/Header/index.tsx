import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeLogo from "../../assets/dark-logo.png";
import { StyledLink } from "../../utils/style/Atoms";

const StyledNav = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 70px;
`;

function Header() {
  return (
    <StyledNav>
      <Link to="/">
        <StyledImg src={HomeLogo} />
      </Link>
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

export default Header;
