import {useState} from 'react'
import { Outlet, Link } from 'react-router'
import diag from "../assets/diag.png"
import styled from 'styled-components'
import colors from '../utils/style/colors';


const DiagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const Diagim = styled.img`
  height: 100px;
  width: 100px;
  transform: scale(${({ size }) => size});
`;
const Lien=styled.div`
display : inline ;
padding-left :15px;
padding-bottom :40px ;
`




function Diagnostic() {
    

    const [size, setSize] = useState(1);
    const title = "Diagnostic"
     const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.five};
    text-decoration: none;
    font-size: 18px; ${(props) =>
        props.$isFullLink &&
        `color: #fad1b5; border-radius: 30px; background-color:${colors.secondary};font-weight:bold;padding: 15px; margin-right:10px;`  }
`
    
    return (
        <DiagContainer>
            <Diagim src={diag} alt='Diagnostic' className='diag' size={size}/>
            <h1 className='title' onClick={() => setSize(size + 0.1)}> {title}  </h1>
            <Lien>
            <StyledLink to="Paludisme"$isFullLink> Paludisme</StyledLink>
          
          </Lien>

          <Outlet />
        </DiagContainer>
    )
}

export default Diagnostic;