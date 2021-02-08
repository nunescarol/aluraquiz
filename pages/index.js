import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';


import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size:cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{duration:0.5}}
          variants={{
            show: {opacity:1, y:'0'},
            hidden: {opacity:0, y:'100%'}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Nome do Quiz!!</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(event){
              event.preventDefault();
              
            //router manda para a proxima pagina
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
              name="nomeDoUsuario"
              onChange={(event) =>  setName(event.target.value)} 
              placeholder="Insira seu nome"
              value={name} />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>


        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
