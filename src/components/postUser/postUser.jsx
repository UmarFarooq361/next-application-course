import React from 'react'
import Styles from "./postUser.module.css"
import { getUser } from '@/lib/data';

// fetching data using API
// const getUser = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
//     if (!res.ok) {
//       throw new Error('Response not okay');
//     }
//     return res.json();
//   };
const PostUser = async({userId}) => {
  // fetching data using API
  // const user = await getUser(userId);


  const user = await getUser(userId);

  return (
        <div className={Styles.detailText}>
            <span className={Styles.detailTitle}>Author</span>
            <span className={Styles.detailValue}>{user.name}</span>
         </div>
  )
}

export default PostUser