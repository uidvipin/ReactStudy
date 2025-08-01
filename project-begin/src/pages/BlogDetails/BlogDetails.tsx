import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CommentForm from './Comments/CommentForm';



const BlogDetails = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [postLiked, setPostLiked] = useState(false);
    const localStorageKey= location.state.id;

    useEffect(() => {
        const likePost= localStorage.getItem(localStorageKey);

        if (likePost){
            setPostLiked(JSON.parse(likePost));
            
        }
      
    },[localStorageKey]);
    
    const likeHandler = () => {
        
           setPostLiked(!postLiked);
           localStorage.setItem(localStorageKey, JSON.stringify(!postLiked));
        
    }

    return (
        <div className='blog_details'>
            <div className='bp_dethead'>
                <div>
                    <h3>{location.state.blogTitle}</h3>
                </div>
                <div>
                    <Button onClick={() => navigate(-1)} className="outline">Back</Button>
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
            <div className='blog_reaction'>
                Do you like this post?
                {postLiked? 
                    <Button className='general' onClick={likeHandler}>Unlike</Button>
                    :
                    <Button className='outline' onClick={likeHandler}>Like</Button>
                }
                
            </div>
            <div className='blog_comments'>
                <h4>Add Your comments</h4>

                <CommentForm />
                
            </div>
        </div>
    )
}

export default BlogDetails