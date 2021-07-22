import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { DivMain, Form } from './styled';
import useFormHandlerSignUp from './hooks/useFormHandlerSignUp';

const SignUpPage = () => {
  const {
    email,
    password,
    passwordAgain,
    isErrorEmail,
    isErrorPassword,
    isErrorPasswordAgain,
    isValidForm,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordAgainChange,
    setIsFocusedEmail,
    setIsFocusedPassword,
    setIsFocusedPasswordAgain,
    handleSignUp
  } = useFormHandlerSignUp()

  return (
    <DivMain>
      <h1>Sign Up</h1>

      <Form autoComplete="off">
        <TextField
          label="Email"
          type="email"
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
          error={isErrorEmail}
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
          error={isErrorPassword}
        />
        <TextField
          label="Password again"
          type="password"
          margin="normal"
          value={passwordAgain}
          onChange={handlePasswordAgainChange}
          onFocus={() => setIsFocusedPasswordAgain(true)}
          onBlur={() => setIsFocusedPasswordAgain(false)}
          error={isErrorPasswordAgain}
        />

        <Button variant="contained" color="primary" onClick={handleSignUp} disabled={!isValidForm}>
          Sign Up
        </Button>
      </Form>
    </DivMain>
  );
};

export default SignUpPage;
