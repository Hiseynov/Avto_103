import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Cars_Carusel from "../img/Cars_Carusel.jpg";
import camery from "../img/camery.jpg";
import mercedes from "../img/mercedes.jpg";

// import required modules
import { EffectFade, Pagination ,Autoplay} from 'swiper/modules';
import { Trans, useTranslation } from 'react-i18next';
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
            delay: 10000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay, Pagination]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src={Cars_Carusel} alt="Главное фотография наших машин" />
                    
      <div className="Carusel__container--logo">
                            <h1>
                            <Trans
                i18nKey={t('caruselLogo')}
                values={{ avto_103: 'Avto-103'  }}
                components={{ 3: <strong /> }}
              />
                            </h1>
                        </div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src={camery} alt="Фотография машины camery " />
                    <div className="Carusel__container--word">
                        <div className="Carusel__container--top">
                            <ul>
                                <li><h3 className='colorCarusel'>
                                <Trans
                i18nKey={t('Toyotaicare')}
                values={{toyotamarka: 'Toyota'  }}
                components={{ 3: <strong /> }}
              />
                                     </h3></li>
                            </ul>
                        </div>
                        {/* <div className="Carusel__container--button">
                            <ul>
                                <li><h3>80 ₼</h3></li>
                                <li><strong>{t("sutka")}</strong></li>
                            </ul>
                            
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="Carusel">
                <div className="Carusel__container">
                    <img src={mercedes} alt="Фотография машины camery " />
                    <div className="Carusel__container--word">
                        <div className="Carusel__container--top">
                            <ul>
                                <li><strong>{t("icareye")}</strong></li>
                                <li><h3>Mercedes-Benz E Class</h3></li>
                            </ul>
                        </div>
                        {/* <div className="Carusel__container--button">
                            <ul>
                                <li><h3>80 ₼</h3></li>
                                <li><strong>{t("sutka")}</strong></li>
                            </ul>
                            
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </SwiperSlide>


        

      </Swiper>
    </div>

       
    </>
  )
}

export default Carusel