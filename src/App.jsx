import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';
import './App.css';
import Pokemon from './views/Pokemon/Pokemon';
import Compendium from './views/Compendium/Compendium';

function App() {
  return (
    <Router>
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
