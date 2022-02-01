import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Country from "../pages/Country";
import Homepage from "../pages/Homepage";








class AppRouter extends React.Component {
    render(){
        return(
                  <>

                    <BrowserRouter>
                            <Routes>
                                <Route exact path="/"  element={<Homepage/>} />
                                <Route path="/:name" element={<Country/>} />
                            
                            </Routes>
                        </BrowserRouter>
                  </>
                        
                   
         )
    }
}


export default AppRouter