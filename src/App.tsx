import React from "react";
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Services from "./pages/Services";
import Apart from "./pages/Apart";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path = '/' element={<Layout />}>
                  <Route element={<Main />} index/>
                  <Route element={<Services/>} path='/services'/>
                  <Route element={<Apart/>} path='/what-sets-us-apart'/>
                  <Route element={<Countries/>} path='/surrogacy-by-country'/>
                  <Route element={<Contact/>} path='/contact'/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
