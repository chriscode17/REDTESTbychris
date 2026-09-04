import Card from '../card';
import sick from '../../../assets/sick.png'
import styled from 'styled-components'
import colors from '../../../utils/style/colors';

const malades = [
    {
        name: 'Azangue chris',
        jobTitle: 'paludisme',
        picture: sick,
        poids:"60kg",
        Temperature:38,
    },
    {
        name: 'gastien rosario',
        jobTitle: 'paludisme',
        picture: sick,
         poids:"60kg",
        Temperature:37.5,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'paludisme',
        picture: sick,
         poids:"60kg",
        Temperature:39,
    },
]

const CardsContainer = styled.div`
 display: grid;
  gap: 24px;
  grid-template-rows: 150px 150px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  background-color: ${colors.backgroundLight};

`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 30px;
  color: ${colors.five};
  font-weight:bold;
  text-align: center;
  padding-bottom: 30px;
`
function Patient() {
    return (
        <div>
            <PageTitle>🤒·💉·🤒· patients. 🤒 💉🤒·💉</PageTitle>
      <PageSubtitle>
        La prise en charge des patients notre priorité .
      </PageSubtitle>
            
            {malades.map((profile, index) => (
                <CardsContainer>
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                    poids={profile.poids}
                    temperature={profile.Temperature}

                />
                </CardsContainer>
            ))}
        </div>
    )
}
export default Patient;
