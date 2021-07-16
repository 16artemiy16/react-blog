import { TextField } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import Button from '@material-ui/core/Button';
import { DivMain, Form } from './styled';

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
