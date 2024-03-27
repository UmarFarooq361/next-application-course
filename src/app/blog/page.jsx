import React from 'react'
import PostCard from '@/components/postCard/postCard'
import Styles from "./Blog.module.css"

const BlogPage= () => {
  return (
    <div>
            <h1 className={Styles.title}>Read Latest Blogs</h1>
    <div className={Styles.container}>
      <div className={Styles.post}>
          <PostCard />
      </div>
      <div className={Styles.post}>
          <PostCard />
      </div>
      <div className={Styles.post}>
          <PostCard />
      </div>
      <div className={Styles.post}>
          <PostCard />
      </div>
      <div className={Styles.post}>
          <PostCard />
      </div>
    </div>
    </div>
  )
}

export default BlogPage