import React, { useState } from 'react'
import BlogPost from '../../components/Header/BlogPost/BlogPost'

type BlogPost = {
  
  id: any;
  blogImage?: any ;
  blogTitle: string;
  blogDetails: string;

}
const blogpostsContents:BlogPost[] = [

    {
        id: 1,
        blogImage: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/It-Ends-With-Us-publicity-H-2024.jpg?w=1296&h=730&crop=1",
        blogTitle: "It Ends with us",
        blogDetails: "Collin Hoover's It Ends with us is going to be a hollywood movie"
    },
    {
        id: 2,
        blogTitle: "Vertigo movie",
        blogDetails: "Collin Hoover's Vertigo movie version shooting started"
    },
    {
        id: 3,
        blogImage: "https://taylorholmes.com/wp-content/uploads/2018/06/incendies-movie-explained-2.jpg",
        blogTitle: "Incendies and its mystery",
        blogDetails: "Incendies reveals the most underrated twist ever"
    },
    {
        id: 4,
        blogTitle: "The Oldman and the sea",
        blogDetails: "Bit tough to read comparing the book size."
    },

];



// const blglistItems= blogpostsContents.map(blogpostsContent =>
//     <BlogPost blogImage={blogpostsContent.blogImage} blogTitle={blogpostsContent.blogTitle} blogDetails={blogpostsContent.blogDetails} />
// );

const BlogList = () => {
  
    const [bpClick, setBpClick] = useState<any>([]);

  return (
    <>
        
        <div className='blog_list'>

            {blogpostsContents.map(post => (

                <BlogPost key={post.id} blogImage={post.blogImage} blogTitle={post.blogTitle} blogDetails={post.blogDetails} />

            ))}

        </div>
    
    </>
    
  )
}

export default BlogList