'use client'
import {FC, useState} from "react";
import styles from "./burger-btn.module.scss";

//component
const BurgerButton: FC = () => {
    const [isMenuActive, setIsMenuActive]  = useState(false)
  //return
  return (
    <div className={`${styles.burger_btn}`} onClick={()=>setIsMenuActive(!isMenuActive)}>
      <div className={`${styles.burger_btn__line}
       ${ isMenuActive ? styles.active : ''  }`}></div>
    </div>
  );
};

export default BurgerButton;
