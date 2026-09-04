import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../utils/style/colors';
import red from '../../../assets/red.png'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: relative;
`;

const Red = styled.img`
  height: 55px;
  width: 55px;
`;

const Logored = styled.span`
  margin-right: 10px;
  font-size: 25px;
  font-weight: bold;
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  z-index: 20;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: ${colors.secondary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;

  ${(props) =>
    props.$isFullLink &&
    `color: #fad1b5; border-radius: 30px; background-color: ${colors.secondary}; font-weight:bold; padding: 15px; margin-right:10px;`}

  @media (max-width: 768px) {
    text-align: center;
    margin: 5px 15px;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Red src={red} alt="globule rouge" className="red" />
      <Logored>redTEST</Logored>

      <Burger onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
        <span />
        <span />
        <span />
      </Burger>

      <LinksWrapper $isOpen={isOpen}>
        <StyledLink to="/" $isFullLink onClick={() => setIsOpen(false)}>
          Accueil
        </StyledLink>
        <StyledLink to="/Diagnostic" $isFullLink onClick={() => setIsOpen(false)}>
          Diagnostic
        </StyledLink>
        <StyledLink to="/Médecin" $isFullLink onClick={() => setIsOpen(false)}>
          Médecin
        </StyledLink>
        <StyledLink to="/Chat" $isFullLink onClick={() => setIsOpen(false)}>
          Chat
        </StyledLink>
        <StyledLink to="/Parametres" $isFullLink onClick={() => setIsOpen(false)}>
          Paramètres
        </StyledLink>
      </LinksWrapper>
    </Nav>
  );
}

export default Header;