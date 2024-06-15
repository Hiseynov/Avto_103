
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Arenda from "../Components/Arenda";
import Carusel from "../Components/Carusel";
import ButonLink from "../Components/ButonLink";
import { Trans, useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Scorost from "../img/Scorost.webp";
import { Cars } from "../data/data";
// import mockCars from '../mockData'; // Импортируем моковые данные

export default function Home({ initialCars = Cars }) { // Используем моковые данные по умолчанию
  const [cars, setCars] = useState(initialCars);
  const [error, setError] = useState(null);
  const [popopArenda, setPopopArenda] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (!initialCars) {
      axios.get('http://localhost:8000/api/v1/posts/')
        .then(response => {
          setCars(response.data);
        })
        .catch(error => {
          setError(error);
          console.error('Произошла ошибка при выполнении запроса!', error);
        });
    }
  }, [initialCars]);

  const { t } = useTranslation();
  const { line1, line2, line3 } = t("About");

  if (error) {
    return <div>Ошибка при загрузке данных.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{t("TitleHome")}</title>
        <meta name="description" content={t("ContextHome")} />
        <meta property="og:title" content={t("TitleHome")}/>
        <meta property="og:description" content={t("ContextHome")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t("TitleHome")}/>
        <meta name="twitter:description" content={t("ContextHome")}/>
      </Helmet>
      <div
        onClick={() => setPopopArenda(!popopArenda)}
        className={popopArenda ? "ofervlow " : "ofervlow hidden"}
      ></div>
      <Carusel />
      <section id="ProkatWord">
        <article className="ProkatWord">
          <div className="ProkatWord__container">
            <h1 data-aos="fade-up">
              <Trans
                i18nKey={line1}
                values={{ Kampaniya: "AVTO - 103 Rent a car Baku" }}
                components={{ 1: <strong /> }}
              />
            </h1>
            <div className="ProkatWord__container--word">
              <p data-aos="fade-up">{line2}</p>
              <h4 data-aos="fade-up">{line3}</h4>
            </div>
          </div>
        </article>
      </section>
      <section id="Cars">
        <div className="Cars">
          <div className="Cars__container">
          {cars.map((item) => (
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
    </>
  );
}

// Функция для серверного получения данных
export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/posts/');
    return { props: { initialCars: response.data } };
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return { props: { initialCars: null } };
  }
}
