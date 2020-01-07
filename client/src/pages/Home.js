import React, { useState } from 'react';

// COMPONENTS
import Container from '../components/Container/Container';
import Title from '../components/Title/Title';
import SubTitle from '../components/SubTitle/SubTitle';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Container>
      <Container width="40%" height="60%">
        <Title text={'Welcome Back'} />
        <SubTitle text={'To login please enter your email and password'} />
      </Container>
    </Container>
  );
};

export default Home;
