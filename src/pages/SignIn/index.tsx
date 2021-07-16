import { TextField } from '@material-ui/core';
import styled from 'styled-components';
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

export const SignInPage = () => {
  return (
    <DivMain>
      <h1>Sign In</h1>
      <Form autoComplete="off">
        <TextField label="Email" type="text" margin="normal" />
        <TextField label="Password" type="password" margin="normal" />

        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </Form>
    </DivMain>
  );
};

export default SignInPage;
