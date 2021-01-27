import styled from 'styled-components'
import db from '../db.json'

import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

/**
* o caracter ` é uma taged function, o código abaixo também é possivel escrever
 * como uma function 
 */

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: auto;
  background-size: cover;
  background-position: center;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
      <QuizBackground backgroundImage= { db.bg }>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>the legend of zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam assumenda autem illo voluptatibus aspernatur numquam doloribus unde voluptate fugit. Facilis libero, labore aperiam rerum debitis voluptatibus deserunt officia numquam?</p>
            </Widget.Content>
          </Widget>
  
          <Widget>
            <h1>ashuashua</h1>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/omariosouto"/>
      </QuizBackground>
  )

// export default function Home() {
//   return (
//     <div style={{ backgroundImage: `url(${db.bg})`}}>

//     </div>
//   )
}
