import React, { useState } from 'react'
import BlogPost from '../../components/Header/BlogPost/BlogPost'

export type IBlogPost = {
  
  id: any;
  blogImage?: any ;
  blogTitle: string;
  blogDetails: string;

}
const blogpostsContents:IBlogPost[] = [

    {
        id: 1,
        blogImage: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/It-Ends-With-Us-publicity-H-2024.jpg?w=1296&h=730&crop=1",
        blogTitle: "It Ends with us",
        blogDetails: "It Ends with Us is a 2024 American romantic drama film directed by Justin Baldoni from a screenplay by Christy Hall, based on the 2016 novel by Colleen Hoover. The film stars Blake Lively alongside Baldoni, Brandon Sklenar, Jenny Slate, and Hasan Minhaj. The story follows florist Lily Bloom (Lively), whose abusive relationship with neurosurgeon Ryle Kincaid (Baldoni) is compounded when her ex-boyfriend Atlas Corrigan (Sklenar) re-enters her life."
    },
    {
        id: 2,
        blogTitle: "Vertigo movie",
        blogDetails: "Collin Hoover's Vertigo movie version shooting started. Another crime drama is It Ends with us is going to be a hollywood movie. It deals the story of a freelance writer but a writer with some ordinarily sold books."
    },
    {
        id: 3,
        blogImage: "https://taylorholmes.com/wp-content/uploads/2018/06/incendies-movie-explained-2.jpg",
        blogTitle: "Incendies and its mystery",
        blogDetails: "Incendies (English: Fires) is a 2010 Canadian drama film directed by Denis Villeneuve, who co-wrote the screenplay with Valérie Beaugrand-Champagne. Adapted from Wajdi Mouawad's play of the same name, Incendies stars Lubna Azabal, Mélissa Désormeaux-Poulin, Maxim Gaudette, and Rémy Girard."
    },
    {
        id: 4,
        blogTitle: "The Oldman and the sea",
        blogDetails: "The Old Man and the Sea is a 1952 novella by the American author Ernest Hemingway. Written between December 1950 and February 1951, it was the last major fictional work Hemingway published during his lifetime. It tells the story of Santiago, an aging fisherman, and his long struggle to catch a giant marlin."
    },

];


const BlogList = () => {

   

  return (
    <>
        
        <div className='blog_list'>

            {blogpostsContents.map(post => (

                <BlogPost key={post.id} id={post.id} blogImage={post.blogImage} blogTitle={post.blogTitle} blogDetails={post.blogDetails} />

            ))}

        </div>
    
    </>
    
  )
}

export default BlogList