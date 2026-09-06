import { useState, useEffect } from 'react'
import biopsy from "../assets/biopsy.png"
import research from '../assets/research.png'
import mosquito from '../assets/mosquito.png'
import anemia from '../assets/anemia.png'
import bl from '../assets/bl.png'
import blood from '../assets/blood.png'
import "../styles/index.css"
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { StyledLink } from '../utils/style/Atom'

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  min-height: calc(80vh - 100px);
  gap: 50px;
  background-color: ${colors.primary};
  border-radius: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  ${StyledLink} {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    gap: 8px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${colors.secondary || colors.primary};
    color: white;
    border-radius: 30px;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${colors.primary || colors.secondary};
    }

    @media (max-width: 768px) {
      margin: 20px auto 0 auto;
    }
  }
`

const Title = styled.h1`
  font-size: 48px;
  line-height: 1.15;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Description = styled.p`
  font-size: 24px;
  line-height: 1.6;
  color: #666666;
  max-width: 450px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  gap: 20px;
`

const IllustrationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
`

const MainImage = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: contain;
  transform: scale(${({ size }) => size});
  transition: transform 0.3s ease;
  cursor: pointer;
`

const BioImage = styled.img`
  width: 30%;
  height: 30%;

  @media (max-width: 768px) {
    width: 5%;
    height: 5%;
  }
`

const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
  font-family: monospace;
  font-size: 18px;
  color: #1a1a1a;

  @media (max-width: 768px) {
    display: none;
  }
`

function Home() {
    const [size, setSize] = useState(1);
    
    // Tableau regroupant toutes les images à faire défiler
    const imagesList = [research, mosquito, anemia, bl, blood];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effet pour changer d'image automatiquement toutes les 2 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
        }, 2000);

        // Nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(interval);
    }, [imagesList.length]);

    return (
        <HeroSection>
            {/* Colonne de gauche : Titre, Description et Bouton */}
            <LeftColumn>
                <Title>
                    Bienvenue sur <br />
                    <span style={{ color: colors.secondary || colors.primary }}>redTEST</span>
                </Title>
                <Description>
                    Analysez vos frottis sanguins de manière intelligente et rapide. 
                    Détectez les anomalies cellulaires liées au paludisme  
                    grâce à nos outils de diagnostic assistés par IA.
                </Description>
                <StyledLink to="/Diagnostic" $isFullLink>
                    Faire un test &rarr;
                </StyledLink>

                <Indicator>
                  <BioImage src={biopsy} alt='biopsie' className='bio' size={size}/> 
                </Indicator>
            </LeftColumn>

            {/* Colonne de droite : Visuel principal interactif et rotatif */}
            <RightColumn>
                <IllustrationWrapper>
                    <MainImage 
                        src={imagesList[currentImageIndex]} 
                        alt='Illustration médicale redTEST' 
                        size={size} 
                        onClick={() => setSize(s => (s < 1.3 ? s + 0.1 : 1))}
                        title="Cliquez pour zoomer !"
                    />
                </IllustrationWrapper>
            </RightColumn>
        </HeroSection>
    )
}

export default Home;