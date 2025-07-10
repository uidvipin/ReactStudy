import React from 'react'
import { useNavigate } from 'react-router-dom';

interface IBlogPost{
    blogImage:any,
    blogTitle: any,
    blogDetails: any
}

const BlogPost: React.FC<IBlogPost> = (props) => {

 const{
    blogImage,
    blogTitle,
    blogDetails

 } = props;

 const navigate = useNavigate();
  
  return (
    <div className='blog_post' onClick={() => navigate("blog-details")}>
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