import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

function Header() {
  const { t } = useTranslation();
  const [activeBasket, setactiveBasket] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const verticalScroll = window.scrollY;
      const sticky = document.querySelector(".headerButton");

      if (verticalScroll > 80) {
        sticky.classList.add("is-sticky");
      } else {
        sticky.classList.remove("is-sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const verticalScroll = window.scrollY;
      const sticky = document.querySelector(".headerMobile__button");

      if (verticalScroll > 100) {
        sticky.classList.add("is-sticky");
      } else {
        sticky.classList.remove("is-sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header id="header">
        <div className="header-conatiner">
          <nav className="headerTop">
            <div className="headerTop__container">
              <div className="headerTop__container--left">
             <Logo></Logo>
             
              </div>
              <div className="headerTop__container--right">
                {/* <ul>
                  <li>Aze</li>
                  <li>Ru</li>
                  <li>Angl</li>
                </ul> */}
                   <ul>
                   <li className="zakazContainer locationContainer">
              <i className="fa-solid fa-location-dot"></i>
                     <div className="zakaz">
                        <span>{t('city')}</span>
                        
                      <strong>{ t("cityes")}</strong>
                   
                     </div>
                     
                  </li>
                  <li className="zakazContainer">
                     <i className="fa-solid fa-phone"></i>
                     <div className="zakaz">
                        <span>{t("sifaris")}</span>
                        <a href="tel:+994509990103">
                      <strong>+994 (50) 999  0  103</strong>
                    </a>
                     </div>
                    
                  </li>

                  {/* <li>
                    <a href="https://www.instagram.com/rentacar_avto103/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/auto103">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
          <nav className="headerButton">
            <div className="headerButton__container">
              <ul className="headerButton__container--categories">
              {/* <h1>{t("greet")}</h1> */}
                <li>
                  <Link to={"/"}>{t("Avtomobil")}</Link>
                </li>
                <li>
                  <Link to={"/Sert"}>{t("Sertler")}</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>{t("elage")}</Link>
                </li>
              </ul>
              <ul>
              <li className="languageList">
                  <LanguageSelector></LanguageSelector>
                  </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <header id="headerMobile">
        <div className="headerMobile">
          <div className="headerMobile__top">
                      <div className="headerMobile__container">

            <div className="headerMobile__container--logo">
              <Logo></Logo>
            </div>
            <div className="headerMobile__container--word">
              <ul>
              <li className="locationContainer">
              <i className="fa-solid fa-location-dot"></i>
                     <div className="zakaz">
                        <span>{ t("city")}</span>
                        
                      <strong>{ t("cityes")}</strong>
                   
                     </div>
                     
                  </li>
              <li className="zakazContainer">
                     <i className="fa-solid fa-phone"></i>
                     <div className="zakaz">
                        <span>{t("sifaris")}</span>
                        <a href="tel:+994509990103">
                      <strong>+994 (50) 999  0  103</strong>
                    </a>
                     </div>
                    
                  </li>
              </ul>
            </div>
          </div>
          </div>

          <div className="headerMobile__button">
          <div className="headerMobile-burgermenu">
            <div className={`BasketMenu ${activeBasket ? "basketActive" : ""}`}
              onClick={() => setactiveBasket(!activeBasket)}
              
            >
              <span className="basket-left basket"></span>
              <span className="basket-center basket"></span>
              <span className="basket-right basket"></span>
              <div className={`MenuText ${activeBasket ? "" : "hiddenScale"}`}>
            <ul>
              {/* <h1>{t("greet")}</h1> */}
              <li>
                <Link to={"/"}>{t("Avtomobil")}</Link>
              </li>
              <li>
                <Link to={"/Sert"}>{t("Sertler")}</Link>
              </li>
              <li>
                <Link to={"/Contact"}>{t("elage")}</Link>
              </li>
            </ul>
            </div>
            </div>
            <div className="languageList">
               <LanguageSelector></LanguageSelector>

                </div>
           
          </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
