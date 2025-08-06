import React, { FC, useState } from 'react'
import BlogPost from '../../components/BlogPost/BlogPost'

export type postContents = {

    id: any;
    blogImage?: any;
    blogTitle: string;
    blogDetails: string;
    blogCategory?: string;

}
export const blogpostsContents: postContents[] = [

    {
        id: 1,
        blogCategory: "English",
        blogImage: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/It-Ends-With-Us-publicity-H-2024.jpg?w=1296&h=730&crop=1",
        blogTitle: "It Ends with us",
        blogDetails: "It Ends with Us is a 2024 American romantic drama film directed by Justin Baldoni from a screenplay by Christy Hall, based on the 2016 novel by Colleen Hoover. The film stars Blake Lively alongside Baldoni, Brandon Sklenar, Jenny Slate, and Hasan Minhaj. The story follows florist Lily Bloom (Lively), whose abusive relationship with neurosurgeon Ryle Kincaid (Baldoni) is compounded when her ex-boyfriend Atlas Corrigan (Sklenar) re-enters her life."
    },
    {
        id: 2,
        blogCategory: "English",
        blogTitle: "Vertigo movie",
        blogDetails: "Collin Hoover's Vertigo movie version shooting started. Another crime drama is It Ends with us is going to be a hollywood movie. It deals the story of a freelance writer but a writer with some ordinarily sold books."
    },
    {
        id: 3,
        blogCategory: "Foreign",
        blogImage: "https://taylorholmes.com/wp-content/uploads/2018/06/incendies-movie-explained-2.jpg",
        blogTitle: "Incendies and its mystery",
        blogDetails: "Incendies (English: Fires) is a 2010 Canadian drama film directed by Denis Villeneuve, who co-wrote the screenplay with Valérie Beaugrand-Champagne. Adapted from Wajdi Mouawad's play of the same name, Incendies stars Lubna Azabal, Mélissa Désormeaux-Poulin, Maxim Gaudette, and Rémy Girard."
    },
    {
        id: 4,
        blogCategory: "English",
        blogTitle: "The Oldman and the sea",
        blogDetails: "The Old Man and the Sea is a 1952 novella by the American author Ernest Hemingway. Written between December 1950 and February 1951, it was the last major fictional work Hemingway published during his lifetime. It tells the story of Santiago, an aging fisherman, and his long struggle to catch a giant marlin."
    },
    {
        blogTitle: "A quality movie considering the decade",
        id: 5,
        blogCategory: "Malayalam",
        blogImage: "https://m.media-amazon.com/images/S/pv-target-images/16ca655415d73b5d551756da50384a471f08cd2e7d77a69d09848f42ddadd51a._UR1920,1080_SX720_FMjpg_.jpg",
        blogDetails: "Mrugaya (English: The Hunt) is a 1989 Indian thriller drama film written by A. K. Lohithadas and directed by I. V. Sasi. The film stars Mammootty and Sunitha in the lead role, with Thilakan, Jagathy Sreekumar, Lalu Alex, and Urvashi in supporting roles. It tells the story of Varunni (Mammootty).",
    },
    {
        blogTitle: "Story of 3 engineering students",
        id: 6,
        blogCategory: "Hindi",
        blogImage: "",
        blogDetails: "The Boy is a 2016 horror film directed by William Brent Bell and written by Stacey Menear. The film stars Lauren Cohan and Rupert Evans.",
    },
    {
        blogTitle: "Beauty meets comedy",
        id: 7,
        blogCategory: "Malayalam",
        blogImage: "",
        blogDetails: "Kilukkam (transl. Jingle) is a 1991 Indian Malayalam-language comedy drama film directed by Priyadarshan and written by Venu Nagavalli",
    },
    {
        blogTitle: "A beautiful portrait having beautiful performances",
        id: 8,
        blogCategory: "Tamil",
        blogImage: "https://a.ltrbxd.com/resized/film-poster/1/6/5/4/4/16544-iruvar-0-460-0-690-crop.jpg?k=cd3f1d420e",
        blogDetails: "Iruvar (transl. The Duo) is a 1997 Indian Tamil-language epic political drama film co-written, produced, and directed by Mani Ratnam. "
    },
    {
        blogTitle: "Mazha: True love story",
        id: 9,
        blogCategory: "Malayalam",
        blogImage: "",
        blogDetails: "Mazha (transl. Rain) is a 2000 Indian Malayalam-language drama film written and directed by Lenin Rajendran based on the short story Nashtappetta Neelambari by Madhavikkutty."
    },
    {
        blogTitle: "Unfolds the problems of Indian parenting",
        id: 10,
        blogCategory: "Malayalam",
        blogImage: "https://www.filmibeat.com/img/2023/02/329003302-1205967960052003-462156526457637028-n1-1676114806.jpg",
        blogDetails: "Spadikam (transl. Crystal) is a 1995 Indian Malayalam-language action drama film directed and co-written by Bhadran and produced by R. Mohan through Shogun Films."
    }

];

interface IBlog {
    data: postContents[]
}
const BlogList:FC<IBlog> = ({data}) => {

    

    return (
        <>

            <div className='blog_list'>

                {data.map(post => (

                    // <BlogPost key={post.id} id={post.id} blogImage={post.blogImage} blogTitle={post.blogTitle} blogDetails={post.blogDetails} />

                    <BlogPost key={post.id} {...post} />//This is equivallent to the above code: usage of spread operator reduced the size of code

                ))}

            </div>

        </>

    )
}

export default BlogList