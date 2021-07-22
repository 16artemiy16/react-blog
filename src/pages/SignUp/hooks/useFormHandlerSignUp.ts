import { ChangeEvent, useState } from 'react';
import { isEmailValid } from '../../../utils/is-email-valid.util';

const useFormHandlerSignUp = () => {
  const MIN_LENGTH_PASSWORD = 6;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');

  const isValidEmail = isEmailValid(email);
  const isValidPassword = password.length >= MIN_LENGTH_PASSWORD;
  const isValidPasswordAgain = passwordAgain === password;

  const isValidForm = isValidEmail && isValidPassword && isValidPasswordAgain;

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

  return {
    email,
    password,
    passwordAgain,
    isValidEmail,
    isValidPassword,
    isValidPasswordAgain,
    isValidForm,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordAgainChange,
    handleSignUp
  };
};

export default useFormHandlerSignUp;
