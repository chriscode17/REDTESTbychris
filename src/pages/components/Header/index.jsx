import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../utils/style/colors';
import red from '../../../assets/red.png'

const Red = styled.img`
  height: 55px;
  width: 55px;
`;
const Logored=styled.span`
margin-right:10px;
font-size: 25px;
font-weight:bold;
`
 
function Header() {
    const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    float:right;
    

     ${(props) =>
        props.$isFullLink &&
        `color: #fad1b5; border-radius: 30px; background-color: ${colors.secondary}; font-weight:bold; padding: 15px; margin-right:10px;    `}

`
    return (
        <nav>

           <Red src={red} alt='globule rouge' className='red' /><Logored>redTEST</Logored>
            
              <StyledLink to="/Parametres"$isFullLink>Paramètres </StyledLink>
              <StyledLink to ="/Chat"$isFullLink>Chat</StyledLink>
              <StyledLink to ="/Médecin" $isFullLink>Médecin</StyledLink>
              <StyledLink to ="/Diagnostic"$isFullLink>Diagnostic</StyledLink>
              <StyledLink to="/"$isFullLink>Accuiel</StyledLink>


        </nav>
    )
}

export default Header;