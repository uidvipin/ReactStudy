import React from 'react'
import { useNavigate } from 'react-router-dom';
import { postContents } from '../../pages/BlogList/BlogList';
import { text } from 'stream/consumers';

const BlogPost: React.FC<postContents> = (props) => {

 const{
    blogImage,
    blogTitle,
    blogDetails

 } = props;

 const navigate = useNavigate();

 const truncateDetails = (text: string, maxLength: number) => {
    if(text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "...";

    
 };
  
  return (
    <div className='blog_post' onClick={() => navigate("/blog-details",{state:props})}>
        <div className='bp_image'>
            {blogImage?
                <img src={blogImage} alt="" />
            :
                <span>{blogTitle}</span>
            }
        </div>
        <h3>{blogTitle}</h3>
        {/* <p>{blogDetails.length<=50 ? blogDetails : blogDetails.slice(0, 50)+"..."}</p> */}

        <p>{truncateDetails(blogDetails, 50)}</p>
        
    </div>
  )
}

export default BlogPost