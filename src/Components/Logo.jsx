import React from 'react'
import rentcarLogo from '../img/RentcarLogo.png';
import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
     <Link to={"/"}>
              <img src={rentcarLogo} alt="Логотип RentCar" />
                </Link>
    </>
  )
}

export default Logo