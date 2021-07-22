import { ChangeEvent, useState } from 'react';

const useFormHandlerSignUp = () => {
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

  return { email, password, passwordAgain, handleEmailChange, handlePasswordChange, handlePasswordAgainChange, handleSignUp };
};

export default useFormHandlerSignUp;
