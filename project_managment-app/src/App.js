import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectManagementApp, {LoginComponent} from './Components/ProjectManagement/ProjectManagementApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      <ProjectManagementApp/>
      <LoginComponent/>
      </div>
    );
  }
}
export default App