import{BrowserRouter,Routes, Route} from "react-router-dom"
import {HomePage} from '../pages/HomePage';
import  {LoginPage}from "../pages/LoginPage";
import {CreateTripPage} from '../pages/CreateTripPage';
import { AdminHomePage } from '../pages/AdminHomePage';
import { LisTriPage } from '../pages/ ListTripsPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/trips/list" element={<LisTriPage/>} />
                <Route path="/trips/application" element={<ApplicationFormPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/admin" element={<AdminHomePage/> } />
                <Route path="adm" element={<AdminHomePage/>} />
                <Route path="*" element={<CreateTripPage/> } />
            </Routes>
      </BrowserRouter>
    </div>
  );
};
