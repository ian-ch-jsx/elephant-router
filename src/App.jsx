import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';
import './App.css';
import Pokemon from './views/Pokemon/Pokemon';
import Compendium from './views/Compendium/Compendium';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Compendium />
        </Route>
        <Route path="/:_id">
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
