import { useState } from 'react'
import { routes } from './routes';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, useRoutes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Links from './Components/Links';
// import { Trans, useTranslation } from 'react-i18next';
function App() {
      // useEffect(() => {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, [pathname]);
  window.scrollTo(0,0)
  // const { t } = useTranslation();
  // const {line1,line2} = t('description');
  const router = useRoutes(routes);
  return (
    <>
    {/* <h1>{t("greet")}</h1> */}
    {/* <span>
    <Trans
    i18nKey={line1}
    values={{
      name:"Anar"
    }}
    components ={{
      1:<strong/>
    }}
    />
    </span>
   <p>{line2}</p> */}
    <Header></Header>
    <main>
    {router}

    <Links></Links>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
