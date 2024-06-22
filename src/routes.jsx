import CarId from "./Page/CarId";
import Contact from "./Page/Contact";
import Eror from "./Page/Eror";
import Home from "./Page/Home";
import Sertler from "./Page/Sertler";






export const routes = [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "Şərtlər",
      element: <Sertler></Sertler>,
    },
    {
      path: "Contact",
      element: <Contact></Contact>,
    },
    {
        path: "Car/:id",
        element: <CarId></CarId>,
      },
      {
        path:'*',
        element:<Eror></Eror>
      }


  ]; 