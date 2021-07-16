import { Box, TextField } from '@material-ui/core';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import useFormHandlerSignIn from './hooks/useFormHandlerSignIn';

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

export const SignInPage = () => {
  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogIn
  } = useFormHandlerSignIn();

  return (
    <DivMain>
      <h1>Sign In</h1>
      <Form autoComplete="off">
        <TextField label="Email" type="text" margin="normal" value={email} onChange={handleEmailChange} />
        <TextField label="Password" type="password" margin="normal" value={password} onChange={handlePasswordChange}/>

        <Button variant="contained" color="primary" onClick={handleLogIn}>
          Sign In
        </Button>

        { error &&
          <Box mt={3}>
            <DivError>{ error }</DivError>
          </Box>
        }
      </Form>
    </DivMain>
  );
};

export default SignInPage;
