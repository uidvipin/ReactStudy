import React from 'react'
import BlogPost from '../../components/Header/BlogPost/BlogPost'

const blogpostsContents=[

    {
        blogImage: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/It-Ends-With-Us-publicity-H-2024.jpg?w=1296&h=730&crop=1",
        blogTitle: "It Ends with us",
        blogDetails: "Collin Hoover's It Ends with us is going to be a hollywood movie"
    },
    {
        blogTitle: "Vertigo movie",
        blogDetails: "Collin Hoover's Vertigo movie version shooting started"
    },
    {
        blogImage: "https://taylorholmes.com/wp-content/uploads/2018/06/incendies-movie-explained-2.jpg",
        blogTitle: "Incendies and its mystery",
        blogDetails: "Incendies reveals the most underrated twist ever"
    },
    {
        blogTitle: "The Oldman and the sea",
        blogDetails: "Bit tough to read comparing the book size."
    },

];

const blglistItems= blogpostsContents.map(blogpostsContent =>
    <BlogPost blogImage={blogpostsContent.blogImage} blogTitle={blogpostsContent.blogTitle} blogDetails={blogpostsContent.blogDetails} />
);

const BlogList = () => {
  return (
    <>
        
        <div className='blog_list'>
            {blglistItems}
        </div>
    
    </>
    
  )
}

export default BlogList