import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <FiArrowLeft size={18} />
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>

          <Widget.Content>
            <p>lorem ispum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
