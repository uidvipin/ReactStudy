import React, { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom';



// interface IBlogDetails {
//     blogpostsContents: BlogDet[];
// }
const BlogDetails = () => {
    const location = useLocation();

    // const { id } = useParams<{ id: string }>();
    // const blogId = Number(id);
    // const blogPost = blogpostsContents.find((post) => post.id === id);

    // if (!blogPost) {

        // return <>BlogPost Not Found</>

    // }
    // const { blogImage, blogTitle, blogDetails } = blogpostsContents[];

    console.log(location.state)

    return (
        <div className='blog_details'>
            <h3>{location.state.blogTitle}</h3>
            <div className='bp_image'>
                {location.state.blogImage ?
                    <img src={location.state.blogImage} alt="" />
                    :
                    <span>{location.state.blogTitle}</span>
                }
            </div>
            
            <p>{location.state.blogDetails}</p>
        </div>
    )
}

export default BlogDetails