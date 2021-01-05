import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Blog} exact/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
