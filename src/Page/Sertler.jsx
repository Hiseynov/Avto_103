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
              class="Sertler__container--word"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 data-aos="fade-up" data-aos-delay="100">
                {line1}
              </h4>

              <p data-aos="fade-up" data-aos-delay="100">
                <Trans
                  i18nKey={line2}
                  values={{
                    pasport: "паспорт, водительское удостоверение.",
                  }}
                  components={{
                    2: <b />,
                  }}
                />
              </p>
              <h4 data-aos="fade-up" data-aos-delay="100">
                {line3}
              </h4>
              <p data-aos="fade-up" data-aos-delay="100">
                {line4}
              </p>
              <h4 data-aos="fade-up" data-aos-delay="100">
                {line5}
              </h4>
              <p data-aos="fade-up" data-aos-delay="100">
               {line6}
              </p>
              <h4 data-aos="fade-up" data-aos-delay="100">
                {line7}
              </h4>
              <p data-aos="fade-up" data-aos-delay="100">
               {line8}
              </p>
              <h4 data-aos="fade-up" data-aos-delay="100">
                {line9}
              </h4>
              <p data-aos="fade-up" data-aos-delay="100">
               {line10}
              </p>
              <h5 data-aos="fade-up" data-aos-delay="100">
                {line11}
              </h5>
              <ul
                class="Sertler__container--categories"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-aos="fade-up" data-aos-delay="100">
                  {line12}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line13}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                 {line14}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line15}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line16}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line17}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line18}
                </li>
              </ul>
              <h4 data-aos="fade-up" data-aos-delay="100">
                {line19}
              </h4>
              <h5 data-aos="fade-up" data-aos-delay="100">
                {line20}
              </h5>
              <ul
                class="Sertler__container--categories"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-aos="fade-up" data-aos-delay="100">
                  {line21}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line22}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                 {line23}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                 {line24}
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  {line25}
                </li>
              </ul>
              <p data-aos="fade-up" data-aos-delay="100">
              {line26}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sertler;
