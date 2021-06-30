import './App.css';
import Login from './components/login';
import ClaseProfesor from './components/claseProfesor';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/ClaseProfesor" component={ClaseProfesor}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
