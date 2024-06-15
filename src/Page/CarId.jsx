import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Cars } from "../data/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Arenda from "../Components/Arenda";
import ButonLink from "../Components/ButonLink";
import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Scorost from "../img/Scorost.webp";
import axios from "axios";
function CarId() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [dataItem, setDataItem] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setDataItem(Cars.filter((item) => item.id == id));
  // }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/posts/${id}`)
      .then(e => {
        setDataItem(e.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  if (dataItem.length == 0) {
    navigate("/no found");
  }
  const { t } = useTranslation();
  return (
    <>
            <Helmet>
        <title>{t('TitleHome')}</title>
        <meta name="description" content={t("ContextHome")} />
        <meta property="og:title" content={t('TitleHome')}/>
        <meta property="og:description" content={t("ContextHome")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t('TitleHome')}/>
        <meta name="twitter:description" content={t("ContextHome")}/>
        {/* Другие метатеги */}
      </Helmet>
      <section id="CarsItem">
        {dataItem.map((item) => (
          <>
            <div className="CardItemTop">
              <div className="CardItemTop__container">
                <p>
                  <strong>
                    <Link to={"/"}>{t("Avtomobil")} </Link>
                  </strong>{" "}
                  / <span>{item.marka}</span>
                </p>
              </div>
            </div>
            <div className="CardsItemCenter">
              <h3>
                <Trans
                  i18nKey={t("arenda")}
                  values={{
                    avto: item.marka,
                  }}
                />
              </h3>
            </div>
            <div className="CarsItem">
              <div className="CarsItem__Carusel">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {item.photo.map((i) => (
                    <SwiperSlide>
                      <img src={i.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiperr"
                >
                  {item.photo.map((i) => (
                    <SwiperSlide>
                      <img src={i.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <aside className="CarsItem__word">
                <div className="CarsItem__word--container">
                  <div className="CarsItem__categories">
                    <ul className="CarsItem__categories--price">
                      <li>
                        {/* <span>{t("1Gun")}</span>{" "} */}
                        <strong>
                        <Trans
                          i18nKey={t("qiymet")}
                          values={{
                            qiymet: `${item.price} ₼`,
                          }}
                        />
                        </strong>
                      </li>
                      {/* <li>
                        <span>{t("1Hefte")}</span>{" "}
                        <strong>{item.price[1].title}</strong>
                      </li>
                      <li>
                        <span>{t("1Ay")}</span>{" "}
                        <strong>{item.price[2].title}</strong>
                      </li> */}
                    </ul>
                    <ul className="CarsItem__categories--car">
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
                  {/* <Arenda></Arenda> */}
                  <ButonLink marka={item.marka}></ButonLink>
                </div>
              </aside>
            </div>
          </>
        ))}
      </section>
    </>
  );
}

export default CarId;
