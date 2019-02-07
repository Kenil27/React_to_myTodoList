import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import todo from './component/child';
import Form from './component/form'

class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><NavLink activeStyle={{color: 'black', fontWeight: 'bold', fontSize: '21px'}} 
            exact to="/form">Form</NavLink></li>
            
            <li><NavLink activeStyle={{color: 'black', fontWeight: 'bold', fontSize: '21px'}}
            exact to="/todo">todo-List</NavLink></li>
          </ul>
          <Route path="/form" exact component={Form} />
          <Route path="/todo" exact strict component={todo} />

          </div>
      </Router>
    );
  }
}

export default App;