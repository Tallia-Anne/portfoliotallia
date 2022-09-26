

import * as React from "react";
//Importation des routes
import { Routes, Route } from "react-router-dom";
// Les importations les pages
import Acceuil from './components/Pages/Acceuil'
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Header from "./components/Header";
import Test from "./components/Pages/Test";
// import ThemeContextProvider from "./Context/ThemeContext"
import Pageblogdetails from "./components/Pages/Pageblogdetails";
import Erreur from "./components/Pages/Erreur";


function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="pageblogdetails/:id" element={<Pageblogdetails />} exact />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Erreur />} />

      </Routes>
      
     
    </div>
  );
}

export default App;
