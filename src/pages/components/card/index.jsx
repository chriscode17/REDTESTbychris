import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../utils/style/colors';




const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top:20%;
    background-color: ${colors.secondary};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 7px 7px 15px #e2e3e9;
    }
`

function Card({ label, title, picture,temperature, poids }) {
    const CardLabel = styled.span`
     color:${colors.five} ;
    font-size: 22px;
    font-weight: bold `

    const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 , width:750}}>
            <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="malade" height={80} width={80} />
            <span>{title}</span>
            <span>Température: {temperature}°C</span>
            <span>Poids: {poids}</span>
            </CardWrapper>
        </div>
    )
}
 




 
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string.isRequired,
    temperature: PropTypes.number,
    poids: PropTypes.string,
}
export default Card