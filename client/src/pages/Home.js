import React, { useState } from 'react';

// COMPONENTS
import Container from '../components/Container/Container';
import Title from '../components/Title/Title';
import SubTitle from '../components/SubTitle/SubTitle';
import Input from '../components/Input/Input';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Container>
      <Container width={null} height="60%">
        <Title text={'Welcome Back'} />
        <SubTitle text={'To login please enter your email and password'} />
        <Input
          type={'email'}
          name={'email'}
          label={'Email'}
          placeholder={'Email'}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Password'}
          placeholder={'Password'}
        />
      </Container>
    </Container>
  );
};

export default Home;
