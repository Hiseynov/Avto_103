import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Arenda from "../Components/Arenda";
import Carusel from "../Components/Carusel";
import { Cars } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButonLink from "../Components/ButonLink";
import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Scorost from "../img/Scorost.webp";
function Home() {
  const [popopArenda, setPopopArenda] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { t } = useTranslation();
  const { line1, line2, line3 } = t("About");
  return (
    <>
      <Helmet>
        <title>{t("TitleHome")}</title>
        <meta name="description" content={t("ContextHome")} />
        {/* Другие метатеги */}
      </Helmet>
      <div
        onClick={() => setPopopArenda(!popopArenda)}
        className={popopArenda ? "ofervlow " : "ofervlow hidden"}
      ></div>
      <Carusel></Carusel>
      <section id="ProkatWord">
        <div className="ProkatWord">
          <div className="ProkatWord__container">
            <h1 data-aos="fade-up">
              <Trans
                i18nKey={line1}
                values={{
                  Kampaniya: "AVTO - 103 Rent a car Baku",
                }}
                components={{
                  1: <strong />,
                }}
              />
            </h1>
            <div className="ProkatWord__container--word">
              {/* <h3 data-aos="fade-up">Мы очень рады приветствовать Вас на нашей официальной страницы <strong>" AVTO - 103 "</strong> <strong>"Rent a car Baku".</strong></h3> */}
              <p data-aos="fade-up">{line2}</p>
              <h4 data-aos="fade-up">{line3}</h4>
            </div>

            {/* <p>Предлагаем <strong>аренду</strong> и <strong>прокат</strong> автомобилей в Баку. Арендовать автомобиль стало проще с компанией <strong>Avto 103</strong> .
                  Подберем индивидуальный тариф по выгодным ценам. Доставим автомобиль в любую точку города, в том числе в аэропорт.</p> */}
          </div>
        </div>
      </section>
      <section id="Cars">
        <div className="Cars">
          <div className="Cars__container">
            {Cars.map((item) => (
              <div
                key={item.id}
                className="Cars__container--item"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Link to={`Car/${item.id}`}>
                  <div className="CarsItem__top">
                    <img src={item.photo[0].url} alt="" />
                  </div>
                </Link>
                <div className="CarsItem__button">
                  <div className="CarsItem__button--word">
                    <h3>
                      {item.marka}{" "}
                      <strong>
                        <Trans
                          i18nKey={t("qiymet")}
                          values={{
                            qiymet: `${item.price} ₼`,
                          }}
                        />{" "}
                      </strong>
                    </h3>
                    
                    <ul>
                      {item.il && (
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>{item.il}</span>
                        </li>
                      )}
                      {item.yanacag && (
                        <li>
                          <i className="fa-solid fa-gas-pump"></i>{" "}
                          <span>{item.yanacag}</span>
                        </li>
                      )}
                      {item.mator && (
                        <li>
                          <i className="fa-solid fa-gauge"></i>{" "}
                          <span>{item.mator}</span>
                        </li>
                      )}
                      {item.karobka && (
                        <li>
                          <img src={Scorost} alt="" />
                          <span>{item.karobka}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ButonLink marka={item.marka}></ButonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className={popopArenda?'popopArenda':"popopArenda hidden"}>
                <Arenda setPopopArenda={setPopopArenda}></Arenda>
            </div> */}
    </>
  );
}

export default Home;
