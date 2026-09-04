
import error from  "../assets/error.png"
import styled from 'styled-components'
import colors from "../utils/style/colors";



const ErrorTitle = styled.h1`
  font-weight: 900;
`

const ErrorSubtitle = styled.h2`
  font-weight: 900;
  color: ${colors.five};
  
`





const NoContainer = styled.div`
margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;

`;


const Noim = styled.img`
  max-width: 900px;
`;


function Nopage () {
    return (
        <NoContainer>
              <ErrorTitle>Oups...</ErrorTitle>
            <Noim src={error} alt='error' className='error'/>
            <ErrorSubtitle>
               Il semblerait que la page que vous cherchez n’existe pas
            </ErrorSubtitle>
            
        </NoContainer>
    )
}

export default Nopage;