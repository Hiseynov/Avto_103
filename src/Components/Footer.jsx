import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer id="Footer">
        <div className="Footer">
          {/* <div className="Footer__container--left"> */}
          <div className="Footer__left">
            <div className="Footer__left--logo">
            <Logo></Logo>
            </div>
            <div className="Footer__left--word">
              <p>
                <Trans
                  i18nKey={t("footerWord")}
                  values={{
                    Kampaniya: "AVTO-103",
                  }}
                  components={{
                    1: <strong />,
                  }}
                />{" "}
              </p>
            </div>
          </div>
          <div className="Footer__text">
                      <div className="Footer__center">
            <h3>{t("Avtomobil")}</h3>
            <ul>
              {/* <h1>{t("greet")}</h1> */}
              <li>
                <Link to={"/"}>{t("Avtomobil")}</Link>
              </li>
              <li>
                <Link to={"/Şərtlər"}>{t("Sertler")}</Link>
              </li>
              <li>
                <Link to={"/Contact"}>{t("elage")}</Link>
              </li>
            </ul>
            {/* <ul>
                    <li>
                        <Link to={'/'}>Автомобили</Link>
                    </li>
                    <li>
                        <Link to={'/Sert'}>Условия</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'}>Контакт</Link>
                    </li>
                </ul> */}
          </div>
          <div className="Footer__right">
            <h3>{t("elage")}</h3>
            <ul>
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>{t('city')} { t("cityes")}
                </span>
              </li>
              <li>
                <a href="tel:+994509990103">
                  <i className="fa-solid fa-phone"></i>+994 (50) 999 0 103
                </a>
              </li>
              <li>
                <a href="tel:+994559990103">
                  <i className="fa-solid fa-phone"></i>+994 (55) 999 0 103
                </a>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope-open-text"></i>
                  avto-103@mail.ru
                </span>
              </li>
            </ul>
          </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;

{
  /* <h3>
            Rent a car baku 1 saytı sizə ən yeni icarə maşınları təqdim edir. Rent a car götürmək istəyənlər üçün, indi çox daha asan imkanlar yarandı. Azərbyanda ən sərfəli qiymətə icareye masinlar bizim rent a car baku rent a car -da. Hər növ markaya məxsus günlük, həftəlik və aylıq kirayə avtomobillər sizə təqdim edilir.
            </h3> */
}
{
  /* </div> */
}
{
  /* <div className="Footer__container--right">
                            <div className="Footer__container--elage">
                <h4>Связаться с нами</h4>
                <ul>
                    <li>
                        <span>Телефон<a href="tel:+994506041905">+994 (50) 604-19-05</a>
                        </span>
                    </li>
                    <li>
                        <span>Электронная почта<a href="mailto:avto-103@mail.ru">avto-103@mail.ru</a>
                        </span>
                    </li>
                    <li>
                        <span>Ünvan: <strong>Baku</strong>
                        </span>
                    </li>

                </ul>
            </div>
            </div> */
}

{
  /* <div className="Footer__container--categories">
            <ul className="">
                <li>
                  <Link to={"/"}>Автомобили</Link>
                </li>
                <li>
                  <Link to={"/Sert"}>Условия</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Контакт</Link>
                </li>
              </ul>
            </div> */
}
