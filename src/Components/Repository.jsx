import React from 'react';

import { Container, RepositoryBody, Title, Description, Image } from '../Styles/RepositoryStyle';

const Repository = (props) => {
  return (
    <Container>
      <a href={props.link}>
        <Image src={props.image} />
      </a>
      <RepositoryBody>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </RepositoryBody>
    </Container>
  )
}

export default Repository;
