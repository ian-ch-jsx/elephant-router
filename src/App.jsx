import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';
import './App.css';
import Villager from './views/Villager/Villager';
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
        <Route path="/:id">
          <Villager />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
