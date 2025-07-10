import React, { useState } from 'react'
import Header from '../components/Header/Header'
import BlogList from './BlogList/BlogList'
import BlogDetails from './BlogDetails/BlogDetails'
import { Route, useLocation, useNavigate, Routes, Router } from "react-router-dom";


export type BlogDet = {  
  id: any;
  blogImage?: any ;
  blogTitle: string;
  blogDetails: string;
}
const blogpostsContents:BlogDet[] = [
    {
        id: 1,
        blogImage: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/It-Ends-With-Us-publicity-H-2024.jpg?w=1296&h=730&crop=1",
        blogTitle: "It Ends with us",
        blogDetails: "Collin Hoover's It Ends with us is going to be a hollywood movie"
    },
    {
        id: 2,
        blogTitle: "Vertigo movie",
        blogDetails: "Collin Hoover's Vertigo movie version shooting started"
    },
    {
        id: 3,
        blogImage: "https://taylorholmes.com/wp-content/uploads/2018/06/incendies-movie-explained-2.jpg",
        blogTitle: "Incendies and its mystery",
        blogDetails: "Incendies reveals the most underrated twist ever"
    },
    {
        id: 4,
        blogTitle: "The Oldman and the sea",
        blogDetails: "Bit tough to read comparing the book size."
    },
];

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
        <Route path={"/blog-details"} element={<BlogDetails blogpostsContents={blogpostsContents}/>} />
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