import RhodesianInfoPage from 'pages/rhodesian';
import 'styles/App.css';
import Index from 'pages/index';
import Beagle from 'pages/beagle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/rhodesian" exact>
            <RhodesianInfoPage/>
          </Route>
          <Route path="/beagle" exact>
            <Beagle/>
          </Route>
          <Route path="/" exact>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
