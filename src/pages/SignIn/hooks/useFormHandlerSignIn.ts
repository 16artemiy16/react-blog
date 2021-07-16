import { useState, ChangeEvent } from 'react';

const useFormHandlerSignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  const handleLogIn = () => {
    setError('The user with this email does not exist or password is incorrect!');
  };

  return { email, setEmail, password, setPassword, error, handleEmailChange, handlePasswordChange, handleLogIn };
};

export default useFormHandlerSignIn;
