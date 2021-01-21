import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Regisrtration";
import Menu from "./components/Menu/Menu";
import {useDispatch} from "react-redux";
import {auth} from "./store/userSlice";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth());
    }, []);

  return (
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path='/' component={Blog} exact/>
            <Route path='/login' component={Login} exact/>
            <Route path='/registration' component={Registration} exact/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
  );
}

export default App;
