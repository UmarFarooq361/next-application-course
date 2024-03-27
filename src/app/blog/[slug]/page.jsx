import React from 'react'
import Styles from "./singlePost.module.css"
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
      <Image src="/home.jpg" alt='blog' fill className={Styles.img}/>
      </div>
      <div className={Styles.textContainer}>
         <h1 className={Styles.title}>Title</h1>
         <div className={Styles.detail}>
            <Image src="/home.jpg" alt='blog' width={50} height={50} className={Styles.avatar}/>
         </div>
         <div className={Styles.detailText}>
            <span className={Styles.detailTitle}>Author</span>
            <span className={Styles.detailValue}>Umar Farooq</span>
         </div>
         <div className={Styles.detailText}>
            <span className={Styles.detailTitle}>Published</span>
            <span className={Styles.detailValue}>01/02/2024</span>
         </div>
         <div className={Styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam molestiae ex. Tenetur illum ab eligendi corrupti enim adipisci quidem vel voluptas nihil! Magni aut quisquam incidunt. Ducimus, ad quibusdam?</div>

      </div>
    </div>
  )
}

export default SinglePage