import React from 'react'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import Eror404 from "../img/Eror404.png";
function Eror() {
  const { t } = useTranslation();
  return (
    <>
    <Helmet>
        <title>{t('TitleError')}</title>
        <meta name="description" content={t("ContextError")} />
        <meta property="og:title" content={t('TitleError')}/>
        <meta property="og:description" content={t("ContextError")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t('TitleError')}/>
        <meta name="twitter:description" content={t("ContextError")}/>
        {/* Другие метатеги */}
      </Helmet>
        <section className="Eror404">
          <div className="Eror404__container">
            <div className="Eror404__container--logo">
              <h1>
                <img src={Eror404} alt="404 Eror" />
              </h1>
            </div>
            <div className="Eror404__container--word">
              <h3>{t('error')}</h3>
            </div>
              <Link className="Eror404__container--link" to={'/'}>
                <span>{t('back')}</span>
                </Link>
          </div>
        </section>
    </>
  )
}

export default Eror