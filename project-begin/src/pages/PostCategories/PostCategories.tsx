import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BlogList from '../BlogList/BlogList';

const PostCategories = () => {

  const [tabContent, setTabContent] = useState("All");
  const catChange = (tabSelected?: any) => {

   setTabContent(tabSelected);

  };


  return (
    <div className='post_categories'>
        <ul className='category_menu'>
            <li>
                <a onClick={()=> catChange("All")} href="#">All</a>
            </li>
            <li>
                <a onClick={()=> catChange("English")} href="#">English</a>
            </li>
            <li>
                <a onClick={()=> catChange("Hindi")} href="#">Hindi</a>
            </li>
            <li>
                <a onClick={()=> catChange("Tamil")} href="#">Tamil</a>
            </li>
            <li>
                <a onClick={()=> catChange("Malayalam")} href="#">Malayalam</a>
            </li>
            <li>
                <a onClick={()=> catChange("Foreign")} href="#">Foreign</a>
            </li>
        </ul>

        <div className='category_list'>

            {tabContent === "All" && <BlogList />}
            
            {tabContent === "English" && <h1>English</h1>}
            
            {tabContent === "Hindi" && <h1>Hindi</h1>}
            
            {tabContent === "Tamil" && <h1>Tamil</h1>}
            
            {tabContent === "Malayalam" && <h1>Malayalam</h1>}
            
            {tabContent === "Foreign" && <h1>Foreign</h1>}

        </div>

    </div>
  )
}

export default PostCategories