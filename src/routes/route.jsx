import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import PagesListBooks from "../Page/List/ListBooks";

const Root = () => {
    return(
        <Router>
           <Routes>
              <Route  path="/" element={<PagesListBooks/>} />          
           </Routes>        
        </Router>

    )
}
export default Root;
