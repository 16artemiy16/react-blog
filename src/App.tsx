import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import AppNavigation from './layout/AppNavigation';
import { AppContent } from './layout/AppContent';

function App() {
  return (
    <Router>
      <AppNavigation />
      <AppContent />
    </Router>
  );
}

export default App;
