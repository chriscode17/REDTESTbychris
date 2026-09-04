import styled from 'styled-components'
import settings from "../assets/settings.png"
import {useState} from 'react'

const ParContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const Parim = styled.img`
  height: 100px;
  width: 100px;
  transform: scale(${({ size }) => size});
`;

function Parametres() {
    const [size, setSize] = useState(1);
     const par = "Paramètres"
    return (

        <ParContainer>
            <Parim src={settings} alt='paramètres' className='parametres'size={size} />
            <h1 className='par'onClick={() => setSize(size + 0.1)} > {par} </h1>
        </ParContainer>
    )
}

export default Parametres;