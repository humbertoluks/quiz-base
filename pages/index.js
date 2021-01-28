import React from 'react';
import styled from 'styled-components';
// Destructing em JavaScript
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

/**
* o caracter ` é uma taged function, o código abaixo também é possivel escrever
 * como uma function
 */
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();

  // Destructing em JavaScript
  const [name, setName] = React.useState(''); // Hooks

  const foo = (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>the legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function onSubmit(event) {
              /*
               * previne o comportamento padrão do submit que é submeter toda a
               * pagina
               */
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
              console.log('fazendo a submissão por meio do react');
            }}
            >
              <input
                placeholder="Diz ai seu nome"
                onChange={function onChange(event) {
                  // State
                  // name = event.target.value;
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar [
                {name}
                ]
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>ashuashua</h1>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
  return foo;
  // export default function Home() {
  //   return (
  //     <div style={{ backgroundImage: `url(${db.bg})`}}>

//     </div>
//   )
}
