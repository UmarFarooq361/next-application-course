import React from 'react'
import Styles from "./postCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.top}>
            <div className={Styles.imgContainer}>
                <Image src="/home.jpg" alt='blog' fill className={Styles.blogImg}/>
            </div>
            <span className={Styles.date}>02/03/2024</span>
        </div>
        <div className={Styles.bottom}>
            <h1 className={Styles.title}>Title</h1>
            <p className={Styles.desc}>desciption</p>
            <Link className={Styles.link} href="/blog/post">Read More</Link>

        </div>
    </div>
  )
}

export default PostCard