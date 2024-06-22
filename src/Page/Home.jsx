import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import Arenda from "../Components/Arenda";
import Carusel from "../Components/Carusel";
import ButonLink from "../Components/ButonLink";
import { Trans, useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Scorost from "../img/Scorost.webp";
import engine from "../img/engine.png";
import benzin from "../img/benzin.png";
import calendar from "../img/calendar.png";
// import { Cars } from "../data/data";
// import mockCars from '../mockData'; // Импортируем моковые данные

export default function Home({ initialCars }) { // Используем моковые данные по умолчанию
  const [cars, setCars] = useState(initialCars || []);
  const [error, setError] = useState(null);
  const [popopArenda, setPopopArenda] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (!initialCars) {
      axios.get('https://api.avto-103.com/api/v1/posts/')
        .then(response => {
          setCars(response.data);
          console.log(response.data);
        })
        .catch(error => {
          setError(error);
          console.error('Произошла ошибка при выполнении запроса!', error);
        });
    }
  }, [initialCars]);

  const apiUrl = 'https://api.avto-103.com/api/v1/posts/'
  const { t } = useTranslation();
  const { line1, line2 } = t("About", { returnObjects: true });


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
                values={{ Kampaniya: "AVTO-103 Rent a car" }}
                components={{ 1: <strong /> }}
              />
            </h1>
            <div className="ProkatWord__container--word">
              <p data-aos="fade-up">{line2}</p>
            </div>
          </div>
        </article>
      </section>
      <section id="Cars">
        <div className="Cars">
          <div className="Cars__container">
            {cars && cars.map((item) => (
              <div
                key={item.id}
                className="Cars__container--item"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Link to={`/Car/${item.id}`}>
                  <div className="CarsItem__top">
                    <img src={item.image_1} alt="Главное фотография машины" />
                  </div>
                </Link>
                <div className="CarsItem__button">
                  <div className="CarsItem__button--word">
                    <h3>
                      {item.car}{" "}
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
                      {item.year && (
                        <li>
                         <img src={calendar} alt="икон календаря" />
                          <span>{item.year}</span>
                        </li>
                      )}
                      {item.fuel && (
                        <li>
                          <img src={benzin} alt="икон бензобака" />
                          <span>{item.fuel}</span>
                        </li>
                      )}
                      {item.engine_volume && (
                        <li>
                          <img src={engine} alt="икон мотора" />
                          <span>{item.engine_volume} L</span>
                        </li>
                      )}
                      {item.transmission && (
                        <li>
                          <img src={Scorost} alt="икон скорости машины" />
                          <span>{item.transmission}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ButonLink ></ButonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Функция для серверного получения данных (для Next.js)
export async function getServerSideProps() {
  try {
    const response = await axios.get(apiUrl);
    return { props: { initialCars: response.data } };
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return { props: { initialCars: null } };
  }
}