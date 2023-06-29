let person = new Person ('Sam', 'Smith');
person.display('person');
import React from 'react';
import './App.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
