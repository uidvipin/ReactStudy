import React, { JSX, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BlogList, { blogpostsContents } from '../BlogList/BlogList';

type Category = {

    key: string,
    label: string,
    content: JSX.Element

}

const categories: Category[] = [

    {key: "All", label: "All", content: <BlogList data={blogpostsContents}/>},
    {key: "English", label: "English", content: <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "English")}/>},
    {key: "Hindi", label: "Hindi", content: <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Hindi")}/>},
    {key: "Tamil", label: "Tamil", content: <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Tamil")}/>},
    {key: "Malayalam", label: "Malayalam", content: <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Malayalam")}/>},
    {key: "Foreign", label: "Foreign", content: <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Foreign")}/>},

];

const PostCategories = () => {

  const[activeCategory, setActiveCategory] = useState("All");
  const handleCategoryChange = (categoryKey: string) => {
    setActiveCategory(categoryKey)  
  }

  const currentTab = categories.find(cat => cat.key === activeCategory);



//   const [tabContent, setTabContent] = useState("All");
//   const catChange = (tabSelected?: any) => {

//    setTabContent(tabSelected);

//   };


  return (
    <div className='post_categories'>
        {/* This is very basic type of the tab */}
        {/* <ul className='category_menu'>
            <li>
                <a className={`${tabContent === "All" && 'active'}`} onClick={()=> catChange("All")} href="#">All</a>
            </li>
            <li>
                <a className={`${tabContent === "English" && 'active'}`} onClick={()=> catChange("English")} href="#">English</a>
            </li>
            <li>
                <a className={`${tabContent === "Hindi" && 'active'}`} onClick={()=> catChange("Hindi")} href="#">Hindi</a>
            </li>
            <li>
                <a className={`${tabContent === "Tamil" && 'active'}`} onClick={()=> catChange("Tamil")} href="#">Tamil</a>
            </li>
            <li>
                <a className={`${tabContent === "Malayalam" && 'active'}`} onClick={()=> catChange("Malayalam")} href="#">Malayalam</a>
            </li>
            <li>
                <a className={`${tabContent === "Foreign" && 'active'}`} onClick={()=> catChange("Foreign")} href="#">Foreign</a>
            </li>
        </ul> */}

        {/* <div className='category_list'>

            {tabContent === "All" && <BlogList data={blogpostsContents}/>}
            
            {tabContent === "English" && <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "English")}/>}
            
            {tabContent === "Hindi" && <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Hindi")}/>}
            
            {tabContent === "Tamil" && <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Tamil")}/>}
            
            {tabContent === "Malayalam" && <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Malayalam")}/>}
            
            {tabContent === "Foreign" && <BlogList data={blogpostsContents.filter(bl=> bl.blogCategory === "Foreign")}/>}

        </div> */}


        {/* Advantages: Dynamic Rendering, Scalable, Clean JSX, Professional UI, Safe lookup */}
        <ul className='category_menu'>
            {categories.map(category => (
                <li>
                    <a onClick={() => handleCategoryChange(category.key)} className={`${category.key === activeCategory && 'active'}`} href="#">{category.label}</a>
                </li>
            
            ))}
        </ul>

        <div className='category_list'>
            {currentTab?.content}
        </div>

    </div>
  )
}

export default PostCategories