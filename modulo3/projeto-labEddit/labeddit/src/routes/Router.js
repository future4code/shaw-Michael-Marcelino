import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/ErrorPage';
import ErrorPage from "../pages/SignUpPage/ErrorPage";



function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path='signup' element={<SignUpPage/>}/>                
                <Route path='feed'  element={<FeedPage/>}/>
                <Route path='post/:id' element={<PostPage/>}/>
                <Route path="*" element={<ErrorPage/>} />                
            </Routes>
        </BrowserRouter>
    )
}

export default Router