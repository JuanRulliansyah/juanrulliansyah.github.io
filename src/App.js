import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

function Home() {
  return <h2>Welcome Home</h2>
}

function Users() {
  return <h2>User here</h2>
}

function NoMatch() {
  return <h2>404 not found</h2>
}

function PersonalPage({ match }) {
  return <h2>Ini halaman {match.params.name}</h2>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <div>
            <nav>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/users'>User</Link></li>
              <li><Link to='/user/juan'>Juan</Link></li>
            </nav>

            <main>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/users' exact component={Users} />
                <Route path='/user/:name' component={PersonalPage} />
                <Route component={NoMatch} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
