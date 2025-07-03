import React from 'react'

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
  
  return (
    <div className='blog_post'>
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