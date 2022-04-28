import{BrowserRouter,Routes, Route} from "react-router-dom"
import {HomePage} from '../pages/HomePage';
import  {LoginPage}from "../pages/LoginPage";
import {CreateTripPage} from '../pages/CreateTripPage';
import { AdminHomePage } from '../pages/AdminHomePage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/trips/list" element={<ListTripsPage/>} />
                <Route path="/trips/application" element={<ApplicationFormPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/login/admin" element={<AdminHomePage/> } />
                <Route path="/admin/trips/list" element={<AdminHomePage/> } />
                <Route path="/admin/trips/create" element={<CreateTripPage/>} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
                <Route path="*" element={<CreateTripPage/> } />
            </Routes>
      </BrowserRouter>
    </div>
  );
};
