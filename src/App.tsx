import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import './App.css';
import AppNavigation from './layout/AppNavigation';
import SignUpPage from './pages/SignUp';



function App() {
  return (
    <>
      <AppNavigation />
      <main>
        <Router>
          <Switch>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route>
              <Redirect exact from="/" to="/sign-up" />
            </Route>
          </Switch>
        </Router>
      </main>
    </>

  );
}

export default App;
