import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
function Sertler() {
  useEffect(()=>{
    AOS.init({duration:1250})
},[])
const { t } = useTranslation();
const {line1,line2,line3,line4,line5,line6,
  line7,line8,line9,line10,line11,line12,
  line13,line14,line15,line16,line17,line18,
  line19,line20,line21,line22,line23,line24,
line25,line26} = t('Sert');
  return (
    <>
      <Helmet>
        <title>{t('TitleSert')}</title>
        <meta name="description" content={t("ContextSert")} />
        <meta property="og:title" content={t('TitleSert')}/>
        <meta property="og:description" content={t("ContextSert")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t('TitleSert')}/>
        <meta name="twitter:description" content={t("ContextSert")}/>
        {/* Другие метатеги */}
      </Helmet>
      <section id="Sertler">
        <div className="Sertler">
          <div className="Sertler__container">
            <div className="Sertler__container--link">
              <p>
                <strong>
                  <Link to={"/"}>{t("Avtomobil")} </Link>
                </strong>{" "}
                / <span>{t("Sertler")}</span>
              </p>
            </div>
            <div className="Sertler__container--logo">
              <h1 className="divider">{t("SertlerArenda")} </h1>
            </div>
            <div
              className="Sertler__container--word"
              
             
            >
              <h4 >
                {line1}
              </h4>

              <p >
                <Trans
                  i18nKey={line2}
                  // values={{
                  //   pasport: "паспорт, водительское удостоверение.",
                  // }}
                  components={{
                    2: <b />,
                  }}
                />
              </p>
              <h4 >
                {line3}
              </h4>
              <p >
                {line4}
              </p>
              {/* <h4 >
                {line5}
              </h4>
              <p >
               {line6}
              </p> */}
              <h4 >
                {line7}
              </h4>
              <p >
               {line8}
              </p>
              <h4 >
                {line9}
              </h4>
              <p >
               {line10}
              </p>
              <h5 >
                {line11}
              </h5>
              <ul
                className="Sertler__container--categories"
                
               
              >
                <li >
                  {line12}
                </li>
                <li >
                  {line13}
                </li>
                <li >
                 {line14}
                </li>
                <li >
                  {line15}
                </li>
                <li >
                  {line16}
                </li>
                <li >
                  {line17}
                </li>
                <li >
                  {line18}
                </li>
              </ul>
              {/* <h4 >
                {line19}
              </h4>
              <h5 >
                {line20}
              </h5>
              <ul
                className="Sertler__container--categories"
                
               
              >
                <li >
                  {line21}
                </li>
                <li >
                  {line22}
                </li>
                <li >
                 {line23}
                </li>
                <li >
                 {line24}
                </li>
                <li >
                  {line25}
                </li>
              </ul>
              <p >
              {line26}
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sertler;
