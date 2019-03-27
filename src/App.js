import React, { Component } from 'react';
import './App.css';
import MainNavbar from './MainNavbar.js';
import SideNavbar from './SideNavbar.js';
import styles from './testingModules.module.css';
import { connect } from 'react-redux';
import { updateMainContent } from './actions/mainContent-actions';
import mainContentBackgroundReducer from './reducers/mainContentBackground-Reducer';


class App extends Component {
  constructor(props){
    super(props);
  }
  onUpdateMainContent=()=>{
    this.props.onUpdateMainContent('blue');
  }
  componentDidUpdate=()=>{
    document.getElementById('html').style.backgroundColor = this.props.mainContent;

  }
  render() {
    //NO LOGIN/SIGNUP/LOGOUT SETUP
    return (      
      <div className="App">     
        <MainNavbar></MainNavbar>     
        <SideNavbar></SideNavbar>
        <p className={styles.test + " otherClass"}>Testing Modules</p>
        <button onClick={this.onUpdateMainContent}>TEST</button>
        {this.props.mainContent}
      </div>
    );
  }
}

const mapStateToProps = state =>({
  mainContent: state.mainContent,
  mainContentBackground: state.mainContentBackground
})

const mapActionsToProps = {
  onUpdateMainContent: updateMainContent
}

export default connect(mapStateToProps,mapActionsToProps)(App);
