import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Main from "./pages/Main.tsx";
import Services from "./pages/Services.tsx";
import Apart from "./pages/Apart.tsx";
import Countries from "./pages/Countries.tsx";
import Contact from "./pages/Contact.tsx";

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
