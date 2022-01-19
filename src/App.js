import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Video  pexels-cottonbro-10678920.mp4

import Home from "./Home";

function App() {
  return (
    <Router>
      <main className="page">
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/*" component={Home} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
