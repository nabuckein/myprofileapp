import React, { Component } from 'react';
import styles from './mainNavbar.module.css';
import pic from './pic1.jpg';
class MainNavbar extends Component {
    render() {
      return (
        <div className={styles.mainNavbarDiv}>
            <div className={styles.nameDiv + " nameDiv"}>    
                <p className={styles.name + " name"}>Mauro G. Sanchez Romano, EIT</p>
            </div>
            <div className={styles.mainNavbarImgDiv + " mainNavbarImgDiv"}>    
                <img className={styles.mainNavbarImg + " mainNavbarImg"} src={pic} alt="profilePic"></img>
            </div>
        </div>
      );
    }
  }
  
  export default MainNavbar;