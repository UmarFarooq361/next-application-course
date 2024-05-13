// "use client"
import React from 'react'
import PostCard from '@/components/postCard/postCard'
import Styles from "./Blog.module.css"
// import error from '../error'
import { getPosts } from '@/lib/data'

// fetching data using API
// const getData = async() =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")

//   if(!res.ok){
//     throw new error("responce not okay")
//   }
//   return res.json()
// }

const BlogPage= async() => {
  // fetching data using API
  // const posts = await getData()

  // fetching data without API
  const posts = await getPosts()
  return (
    <div>
          <h1 className={Styles.title}>Read Latest Blogs</h1>
           <div className={Styles.container}>
             {
              posts.map((post) => (
                <div className={Styles.post} key={post.id}>
                 <PostCard post={post}/>
                </div>
              ))
             }
             
           </div>
           </div>
  )
}

export default BlogPage