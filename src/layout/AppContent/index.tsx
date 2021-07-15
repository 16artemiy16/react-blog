import { Redirect, Route, Switch } from 'react-router-dom';

import BlogPage from '../../pages/Blog';
import SignUpPage from '../../pages/SignUp';
import SignInPage from '../../pages/SignIn';

export const AppContent = () => {
  return (
    <main>
      <Switch>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route>
          <Redirect exact from="/" to="/sign-up" />
        </Route>
      </Switch>
    </main>
  );
};
