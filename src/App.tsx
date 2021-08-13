import React from 'react';
import Home from './pages/Home';
import QuizScreen from './pages/QuizScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/quiz' component={QuizScreen} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
