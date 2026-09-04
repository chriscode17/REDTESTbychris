import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../utils/style/colors';

const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%;
    max-width: 750px;
    box-sizing: border-box;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: clamp(10px, 5vw, 40px);
    background-color: ${colors.secondary};
    border-radius: 30px;
    width: 100%;
    max-width: 350px;
    box-sizing: border-box;
    transition: 200ms;

    &:hover {
        cursor: pointer;
        box-shadow: 7px 7px 15px #e2e3e9;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        border-radius: 20px;
        padding: 15px;
    }
`

const CardLabel = styled.span`
    color: ${colors.five};
    font-size: clamp(16px, 4vw, 22px);
    font-weight: bold;
`

const CardImage = styled.img`
    height: clamp(60px, 15vw, 80px);
    width: clamp(60px, 15vw, 80px);
    border-radius: 50%;
    object-fit: cover;
`

function Card({ label, title, picture, temperature, poids }) {
    return (
        <OuterWrapper>
            <CardWrapper>
                <CardLabel>{label}</CardLabel>
                <CardImage src={picture} alt="malade" />
                <span>{title}</span>
                <span>Température: {temperature}°C</span>
                <span>Poids: {poids}</span>
            </CardWrapper>
        </OuterWrapper>
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