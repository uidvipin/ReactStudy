import React, { useState } from 'react'
import Header from '../components/Header/Header'
import BlogList from './BlogList/BlogList'
import BlogDetails from './BlogDetails/BlogDetails'
import { Route, useLocation, useNavigate, Routes, Router } from "react-router-dom";


const Layout = () => {

  const [postSelect, setPostSelect] = useState(false);
  return (
    <>
      <Header />
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Layout />} /> */}
      {/* <Route index element={<BlogList />} /> */}
      {/* <Route path="blogs" element={<BlogDetails />} /> */}

      {/* </Routes> */}
      {/* </BrowserRouter> */}

      <Routes>
        <Route path={"/"} element={<BlogList />} />
        <Route path={"/blog-details"} element={<BlogDetails />} />
      </Routes>



      {/* <BlogList /> */}

      {/* {postSelect ?
        <BlogList />
      :
        <BlogDetails blogImage={item.blogImage} blogTitle={blogpostsContents1.blogTitle} blogDetails={blogpostsContents1.blogDetails} />
      } */}

    </>
  )
}

export default Layout