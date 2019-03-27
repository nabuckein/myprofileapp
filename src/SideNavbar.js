import React, { Component } from 'react';
import styles from './sideNavbar.module.css';

class SideNavbar extends Component {
    render() {
      return (
        <div className={styles.sideNavbarDiv}>
            <div className={styles.buttonsDiv + " buttonsDiv"}>   
                <button className={styles.buttons + " buttons"}>About Me</button> 
                <button className={styles.buttons + " buttons"}>Experience</button> 
                <button className={styles.buttons + " buttons"}>Goals</button> 
            </div>
            
        </div>
      );
    }
  }
  
  export default SideNavbar;