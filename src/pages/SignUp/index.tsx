import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import Button from '@material-ui/core/Button';

const DivMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  
  & .MuiFormControl-root {
    margin: 1em 0;
  }
  
  & .MuiButton-root {
    margin-top: 2em;
  }
`;

const DivError = styled.div`
  color: var(--error);
`;


const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordAgainChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordAgain(event.target.value);
  };

  const handleSignUp = () => {

  };

  return (
    <DivMain>
      <h1>Sign Up</h1>

      <Form autoComplete="off">
        <TextField label="Email" type="email" margin="normal" value={email} onChange={handleEmailChange} />
        <TextField label="Password" type="password" margin="normal" value={password} onChange={handlePasswordChange}/>
        <TextField label="Password again" type="password" margin="normal" value={passwordAgain} onChange={handlePasswordAgainChange}/>

        <Button variant="contained" color="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Form>
    </DivMain>
  );
};

export default SignUpPage;
