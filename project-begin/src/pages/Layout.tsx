import React, { useState } from 'react'
import Header from '../components/Header/Header'
import BlogList from './BlogList/BlogList'
import BlogDetails from './BlogDetails/BlogDetails'
import { Route, Routes } from "react-router-dom";
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';


const Layout = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route path={"/"} element={<BlogList />} />
        <Route path={"/blog-details"} element={<BlogDetails />} />
        <Route path={"/log-in"} element={<LogIn />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>


    </>
  )
}

export default Layout