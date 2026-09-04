import {useState} from 'react'
import doctor from "../assets/doctor.png"
import "../styles/index.css"
import { Outlet, Link } from 'react-router'
import styled from 'styled-components'
import colors from '../utils/style/colors';



const MedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const Medim = styled.img`
  height: 100px;
  width: 100px;
  transform: scale(${({ size }) => size});
`;



function Médecin() {

     const [size, setSize] = useState(1);
     const title = "Redspace"
      const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;

    ${(props) =>
        props.$isFullLink &&
        `color: #fad1b5; border-radius: 30px; background-color: ${colors.secondary};font-weight:bold;`}
`
     
    return (
        <MedContainer>
             <Medim src={doctor} alt='doctor' className='doctor' size={size} />
            <h1 className='title'onClick={() => setSize(size + 0.1)}> {title} </h1>
                     <StyledLink to="Patient" $isFullLink>Patient </StyledLink> 

                    <Outlet />
        </MedContainer>
    )
}

export default Médecin;