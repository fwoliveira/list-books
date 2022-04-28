import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import BooksPromotionSearch from "../Page/Search/Search";

const Root = () => {
    return(
        <Router>
           <Routes>
              <Route  path="/" element={<BooksPromotionSearch/>} />          
           </Routes>        
        </Router>

    )
}
export default Root;
