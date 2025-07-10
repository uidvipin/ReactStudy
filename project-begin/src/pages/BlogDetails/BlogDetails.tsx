import React, { FC } from 'react'
import { useParams } from 'react-router-dom';
import { BlogDet } from '../Layout';



interface IBlogDetails {
    blogpostsContents: BlogDet[];
}
const BlogDetails: FC<IBlogDetails> = ({ blogpostsContents = [] }) => {

    const { id } = useParams<{ id: string }>();
    const blogId = Number(id);
    const blogPost = blogpostsContents.find((post) => post.id === id);

    if (!blogPost) {

        return <>BlogPost Not Found</>

    }
    const { blogImage, blogTitle, blogDetails } = blogPost;



    return (
        <div className='blog_details'>
            <div className='bp_image'>
                {blogImage ?
                    <img src={blogImage} alt="" />
                    :
                    <span>{blogTitle}</span>
                }
            </div>
            <h3>{blogTitle}</h3>
            <p>{blogDetails}</p>
            werwer
        </div>
    )
}

export default BlogDetails