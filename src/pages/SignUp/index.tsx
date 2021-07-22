import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { DivMain, Form } from './styled';
import useFormHandlerSignUp from './hooks/useFormHandlerSignUp';

const SignUpPage = () => {
  const {
    email,
    password,
    passwordAgain,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordAgainChange,
    handleSignUp
  } = useFormHandlerSignUp()

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
