import { Redirect, Route, Switch } from 'react-router-dom';

import BlogPage from '../../pages/Blog';
import SignUpPage from '../../pages/SignUp';
import SignInPage from '../../pages/SignIn';
import ArticlePage from '../../pages/Article';

export const AppContent = () => {
  return (
    <main style={{ flex: 1, padding: '3em' }}>
      <Switch>
        <Route exact path="/articles">
          <BlogPage />
        </Route>
        <Route exact path="/articles/:id">
          <ArticlePage />
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
