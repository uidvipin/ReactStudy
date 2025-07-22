import React, { FC } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';



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

     const navigate = useNavigate();

    return (
        <div className='blog_details'>
            <div className='bp_dethead'>
                <div>
                    <h3>{location.state.blogTitle}</h3>
                </div>
                <div>
                    {/* <button onClick={() => navigate(-1)}>Back</button> */}
                    <Button onClick={() => navigate(-1)} className="outline" children={"Back"} />
                </div>
            </div>
            <div className='bp_image'>
                {location.state.blogImage ?
                    <img src={location.state.blogImage} alt="" />
                    :
                    <span>{location.state.blogTitle}</span>
                }
            </div>

            <div className='bp_details'>
                <p>{location.state.blogDetails}</p>
            </div>
            
            <div className='blog_comments'>
                
                <form className='form_general' action="">
                    <div className='form_item'>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='form_item'>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='form_item'>
                        <textarea rows={4} placeholder="Comment" id=""></textarea>
                    </div>
                    <div className='form_item'>
                        <Button  className="general" children={"Submit"} />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default BlogDetails