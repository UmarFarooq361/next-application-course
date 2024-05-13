import React from 'react'
import Styles from "./singlePost.module.css"
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data'

// fetching data using API
// const getData = async(slug) =>{
//    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
 
//    if(!res.ok){
//      throw new error("responce not okay")
//    }
//    return res.json()
//  }



const SinglePage = async({params}) => {
  const {slug} = params
  // const post =  await getData(slug)


  const post =  await getPost(slug)
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
      <Image src="/home.jpg" alt='blog' fill className={Styles.img}/>
      </div>
      <div className={Styles.textContainer}>
         <h1 className={Styles.title}>{post.title}</h1>
         <div className={Styles.detail}>
            <Image src="/home.jpg" alt='blog' width={50} height={50} className={Styles.avatar}/>
         </div>
         <PostUser userId={post.userId}/>
         <div className={Styles.detailText}>
            <span className={Styles.detailTitle}>Published</span>
            <span className={Styles.detailValue}> 01/02/2024</span>
         </div>
         <div className={Styles.content}>{post.body}</div>

      </div>
    </div>
  )
}

export default SinglePage