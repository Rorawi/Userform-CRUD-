import React from 'react';
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import ProtectedRoute from './component/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
              <Route path='/' element=
               {<ProtectedRoute>
                <Home/>
              </ProtectedRoute>}/>
              <Route path='/register' element={<Register/>}/>
              <Route  path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Routing;
