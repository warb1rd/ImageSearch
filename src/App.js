import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar.js';
import Search from './components/search/Search.js';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search /> 
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
