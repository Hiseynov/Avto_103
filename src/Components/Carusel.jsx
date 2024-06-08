import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Pagination ,Autoplay} from 'swiper/modules';
import { useTranslation } from 'react-i18next';
function Carusel() {
    const { t } = useTranslation();
    
  return (
    <>
    <div className="Home__carusel">
                  <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay, Pagination]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src="https://rentcar72.ru/media/zoo/images/slide-mercedes-banz-e-all_b07fc22485b52ead1c75f40589b9592f.jpg" alt="" />
                    <div className="Carusel__container--word">
                        <div className="Carusel__container--top">
                            <ul>
                                <li><strong>{t("icareye")}</strong></li>
                                <li><h3>Mercedes-Benz E </h3></li>
                            </ul>
                        </div>
                        <div className="Carusel__container--button">
                            <ul>
                                <li><h3>50 манат</h3></li>
                                <li><strong>{t("sutka")}</strong></li>
                            </ul>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src="https://rentcar72.ru/media/zoo/images/slide-mercedes-banz-e-all_b07fc22485b52ead1c75f40589b9592f.jpg" alt="" />
                    <div className="Carusel__container--word">
                        <div className="Carusel__container--top">
                            <ul>
                                <li><strong>{t("icareye")}</strong></li>
                                <li><h3>Lexus IS250</h3></li>
                            </ul>
                        </div>
                        <div className="Carusel__container--button">
                            <ul>
                                <li><h3>50 манат</h3></li>
                                <li><strong>{t("sutka")}</strong></li>
                            </ul>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src="https://rentcar72.ru/media/zoo/images/slide-lexus_94f2d3d68017845b97347e2b9bbd6438.jpg" alt="" />
                    <div className="Carusel__container--word">
                        <div className="Carusel__container--top">
                            <ul>
                                <li><strong>Арендовать автомобиль</strong></li>
                                <li><h1>Mercedes-Benz E </h1></li>
                            </ul>
                        </div>
                        <div className="Carusel__container--button">
                            <ul>
                                <li><h1>50 манат</h1></li>
                                <li><strong>В сутки</strong></li>
                            </ul>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src="https://rentcar72.ru/media/zoo/images/slide-lexus_94f2d3d68017845b97347e2b9bbd6438.jpg" alt="" />
                    <div className="Carusel__container--word">
                        <div className="Carusel__container--top">
                            <ul>
                                <li><strong>Арендовать автомобиль</strong></li>
                                <li><h1>Mercedes-Benz E </h1></li>
                            </ul>
                        </div>
                        <div className="Carusel__container--button">
                            <ul>
                                <li><h1>50 манат</h1></li>
                                <li><strong>В сутки</strong></li>
                            </ul>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide> */}

      </Swiper>
    </div>

       
    </>
  )
}

export default Carusel