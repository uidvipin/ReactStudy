import React, { useState } from 'react'
import Header from '../components/Header/Header'
import BlogList, { blogpostsContents } from './BlogList/BlogList'
import BlogDetails from './BlogDetails/BlogDetails'
import { Route, Routes } from "react-router-dom";
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';
import PostCategories from './PostCategories/PostCategories';
import Banner from '../components/Banner/Banner';
import PostsAPI from './PostsAPI/PostsAPI';


const Layout = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route path={"/"} element={<><Banner /><BlogList data={blogpostsContents}/></>} />
        <Route path={"/blog-details"} element={<BlogDetails />} />
        <Route path={"/categories"} element={<PostCategories />} />
        <Route path={"/log-in"} element={<LogIn />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/posts"} element={<PostsAPI />} />
      </Routes>


    </>
  )
}

export default Layout