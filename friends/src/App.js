import './App.css';
import Friends from './components/Friends';
import { Route, Link, Switch, Router } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AddForm from './components/AddForm';

function App() {

  const logout = e => {
    localStorage.removeItem('token');
    window.location.href='/login';
  }

  return (
    <Router>
    <div className="App">
      <ul className='nav'>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='' onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to='/friends'>View Friends</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute path='/friends' component={Friends} />
        <PrivateRoute path='/add' component={AddForm} />
        <Route path='/' component={Login} />
        <Route component={Login} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;