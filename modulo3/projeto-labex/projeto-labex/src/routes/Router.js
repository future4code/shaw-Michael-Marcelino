import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFoormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage"
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'

export default function Router() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route index element ={<HomePage />} />
              <Route path="/trips/list" element ={ <ListTripsPage />} />
              <Route path="/trips/application" element ={<ApplicationFoormPage />} />
              <Route path="login" element ={<LoginPage />} />
              <Route path="/admin/trips/create" element ={<CreateTripPage/>} />
              <Route path="/admin/trips/list" element ={<AdminHomePage/>} />
              <Route path="/admin/trips/:id" element ={<TripDetailsPage/>} />
            </Routes>
        </BrowserRouter>
      
      </div>
    );
  }