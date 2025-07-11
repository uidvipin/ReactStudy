import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IBlogPost } from '../../../pages/BlogList/BlogList';

const BlogPost: React.FC<IBlogPost> = (props) => {

 const{
    blogImage,
    blogTitle,
    blogDetails

 } = props;

 const navigate = useNavigate();
  
  return (
    <div className='blog_post' onClick={() => navigate("blog-details",{state:props})}>
        <div className='bp_image'>
            {blogImage?
                <img src={blogImage} alt="" />
            :
                <span>{blogTitle}</span>
            }
        </div>
        <h3>{blogTitle}</h3>
        <p>{blogDetails}</p>
    </div>
  )
}

export default BlogPost