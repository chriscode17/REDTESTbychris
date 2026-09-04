import { useState } from 'react'
import biopsy from "../assets/biopsy.png"
import research from '../assets/research.png'
import "../styles/index.css"
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { StyledLink } from '../utils/style/Atom'

const Frame1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

const HomeContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 20px auto;
  background-color: ${colors.four};
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  gap: 30px;

  /* Version Mobile / Tablette : passage en colonne */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
  }
`

const Redim = styled.img`
  height: 180px;
  width: 180px;
  object-fit: contain;
  transform: scale(${({ size }) => size});
  transition: transform 0.2s ease;
  cursor: pointer;
  margin: 15px 0;
`;

const Bloodim = styled.img`
  height: 250px;
  width: 250px;
  object-fit: contain;
  margin: 15px auto;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  ${StyledLink} {
    max-width: 250px;
    @media (max-width: 768px) {
      margin: 0 auto; /* Centrer le bouton sur mobile */
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .title {
    cursor: pointer;
    user-select: none;
    transition: color 0.2s;
    font-size: 1.8rem;
    margin-top: 10px;
    &:hover {
      color: ${colors.primary || '#00947e'};
    }
  }
`

const Titre2 = styled.h2`
  padding-bottom: 20px;
  max-width: 320px;
  line-height: 1.2;
  font-size: 38px;

  @media (max-width: 768px) {
    font-size: 28px;
    max-width: 100%;
  }
`

function Home() {
    const title = "redTEST"
    const welcome = 'Bienvenue sur'
    const testy = 'redTEST'
    const [size, setSize] = useState(1);

    return (
        <Frame1>
            <HomeContainer>
                {/* Colonne de gauche : Texte et Bouton */}
                <Frame2>
                    <Titre2>
                        {welcome} {testy}
                    </Titre2>
                    <StyledLink to="/Diagnostic" $isFullLink>   
                        Cliquer ici pour faire un test
                    </StyledLink>
                </Frame2>

                {/* Colonne de droite : Images et Interactions */}
                <ImageWrapper>
                    <Redim src={biopsy} alt='biopsy' className='biopsy' size={size} />
                    <h1 className='title' onClick={() => setSize(size + 0.1)} title="Clique pour grossir !"> 
                        {title} 
                    </h1>
                    <Bloodim src={research} alt='blood' className='blood'/>
                </ImageWrapper>
            </HomeContainer>
        </Frame1> 
    )
}

export default Home;