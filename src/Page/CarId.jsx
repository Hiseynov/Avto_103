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
import engine from "../img/engine.png";
import benzin from "../img/benzin.png";
import calendar from "../img/calendar.png";
import axios from "axios";
function CarId() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [dataItem, setDataItem] = useState([]);
  const navigate = useNavigate();
  const [list,setList] = useState([])

  useEffect(() => {
    axios.get(`https://api.avto-103.com/api/v1/posts/${id}/`)
      .then(e => {
        setDataItem(e.data);
        console.log(e.data);
      })
      .catch(error => {
        navigate("/no found");
        console.log(error);
      });
  }, [id]);

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
        {/* {dataItem && dataItem.map((item) => ( */}
          <>
            <div className="CardItemTop">
              <div className="CardItemTop__container">
                <p>
                  <strong>
                    <Link to={"/"}>{t("Avtomobil")} </Link>
                  </strong>{" "}
                  / <span>{dataItem.car}</span>
                </p>
              </div>
            </div>
            <div className="CardsItemCenter">
              <h3>
                <Trans
                  i18nKey={t("arenda")}
                  values={{
                    avto: dataItem.car,
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
        {
                    dataItem.image_1 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_1} alt='Детальное фотография машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_2 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_2} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_3 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_3} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_4 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_4} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_5 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_5} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_6 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_6} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_7 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_7} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_8 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_8} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_9 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_9} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_10 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_10} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
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
                  {
                    dataItem.image_1 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_1} alt='Детальное фотография машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_2 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_2} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_3 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_3} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_4 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_4} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_5 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_5} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_6 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_6} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_7 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_7} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_8 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_8} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_9 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_9} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    dataItem.image_10 && (
                      <SwiperSlide> 
                        <img src={dataItem.image_10} alt='Детальное фотогравия машины' />
                        </SwiperSlide>

                     
                    )
                  }
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
                            qiymet: `${dataItem.price} ₼`,
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
                    {dataItem.year && (
                        <li>
                         <img src={calendar} alt="икон календаря" />
                          <span>{dataItem.year}</span>
                        </li>
                      )}
                      {dataItem.fuel && (
                        <li>
                          <img src={benzin} alt="икон бензобака" />
                          <span>{dataItem.fuel}</span>
                        </li>
                      )}
                      {dataItem.engine_volume && (
                        <li>
                          <img src={engine} alt="икон мотора" />
                          <span>{dataItem.engine_volume} L</span>
                        </li>
                      )}
                      {dataItem.transmission && (
                        <li>
                          <img src={Scorost} alt="икон скорости машины" />
                          <span>{dataItem.transmission}</span>
                        </li>
                      )}
                    </ul>

                  </div>
                  {/* <Arenda></Arenda> */}
                  <ButonLink></ButonLink>
                </div>
              </aside>
            </div>
          </>
        {/* ))} */}
      </section>
    </>
  );
}

export default CarId;
