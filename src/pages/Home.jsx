import {useState} from 'react'
import biopsy from "../assets/biopsy.png"
import research from '../assets/research.png'
import "../styles/index.css"
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { StyledLink } from '../utils/style/Atom'




const Frame1 = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
    padding: 60px 90px;
  display: flex;
  flex-direction: row;
  width: 1000px;
  margin: 30px;
    background-color: ${colors.four};
    
`;


const Redim = styled.img`
  height: 200px;
  width: 200px;
  transform: scale(${({ size }) => size});
`;



const Bloodim = styled.img`
   height:300px;
   width:300px;
    margin-left: auto;
    margin-right: auto;
     margin-top:-200px;
    
`;


const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
    
  }`



const Titre2 = styled.h2`
  padding-bottom: 20px;
  max-width: 280px;
  line-height: 50px;
  font-size:40px;
`


function Home() {
     const title = "redTEST"
     const welcome= 'Bienvenue sur'
     const testy='redTEST'
     const [size, setSize] = useState(1);
    return (

         <Frame1>
            <HomeContainer>
                <Frame2>
                    <Titre2>
                    {welcome} {testy}
                    </Titre2>
                    <StyledLink to ="/Diagnostic"$isFullLink>   
                    Cliquer ici pour faire un test
                    </StyledLink>
             <Redim src={biopsy} alt='biopsy' className='biopsy' size={size} />
            <h1 className='title'onClick={() => setSize(size + 0.1)} > {title} </h1>
            <Bloodim src={research} alt='blood' className='blood'/>
            </Frame2>
            </HomeContainer>
            </Frame1> 
            
            
        
    )
}

export default Home;





