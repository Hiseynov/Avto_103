import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Trans, useTranslation } from "react-i18next";
// import ContactForm from "../Components/ContactForm";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
                              <Helmet>
        <title>{t('TitleContact')}</title>
        <meta name="description" content={t("ContextContact")} />
        <meta property="og:title" content={t('TitleContact')}/>
        <meta property="og:description" content={t("ContextContact")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t('TitleContact')}/>
        <meta name="twitter:description" content={t("ContextContact")}/>
        {/* Другие метатеги */}
      </Helmet>
      <section id="Contact">
        <div className="Contact">
          <div className="Contact__container">
            <div className="Contact__container--word">
              <ul>
                <li>
                  <h3>
                    <Trans
                      i18nKey={t("ContacWord")}
                      components={{
                        3: <span />,
                      }}
                    />
                  </h3>
                </li>
              </ul>
            </div>
            <div className="Contact__container--categories">
              <ul>
                <li>
                  <div className="ContactcategoryTop">
                    <p>
                      <i className="far fa-envelope"></i>
                    </p>
                  </div>

                  <div className="Contactcategorybutton">
                    <h5>{t('mail')}</h5>
                    <div className="Contact_melumatlar">
                      <strong>avto-103@mail.ru</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ContactcategoryTop">
                    <p>
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </div>

                  <div className="Contactcategorybutton">
                    <h5>{t('instagram')}</h5>
                    <div className="Contact_melumatlar">
                      <strong>rentacar_avto103</strong>
                    </div>
                  </div>
                </li>
              
                <li>
                  <div className="ContactcategoryTop">
                    <p>
                      <i className="fa-solid fa-phone"></i>
                    </p>
                  </div>

                  <div className="Contactcategorybutton">
                    <h5>{t('phone')}</h5>
                    <div className="Contact_melumatlar">
                      <strong>+994 50 999 0 103</strong>
                      <strong>+994 55 999 0 103</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ContactcategoryTop">
                    <p>
                    <i className="fa-brands fa-tiktok"></i>
                    </p>
                  </div>

                  <div className="Contactcategorybutton">
                    <h5>
                    <Trans
                      i18nKey={t("tiktok")}
                      values={{
                        Tiktok:"TikTok"
                    }}
                    /></h5>
                    <div className="Contact_melumatlar">
                      <strong>@avto103rentacar</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ContactcategoryTop">
                    <p>
                    <i className='fa-brands fa-facebook-f'></i>
                    </p>
                  </div>

                  <div className="Contactcategorybutton">
                    <h5>
                    {t("facebook")}
                    </h5>
                    <div className="Contact_melumatlar">
                      <strong>Rentacar-avto103  </strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <ContactForm></ContactForm> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
