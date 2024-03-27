import Image from 'next/image';
import React from 'react'
import Styles  from './contact.module.css';

const ContactPage= () => {
    return (
      <div className={Styles.container}>
        <div className={Styles.imgContainer}>
          <Image src="/contact.avif" alt="Contact" fill className={Styles.img} />
        </div>
        <div className={Styles.formContainer}>
          <form action='' className={Styles.form}>
            {/* <label htmlFor="name">Name:</label> */}
            <input type="text" id="name" name="name" placeholder='Enter Your Name' required /><br />
  
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" id="email" name="email" placeholder='Enter Your Email' required /><br />
  
            {/* <label htmlFor="phone">Phone Number:</label> */}
            <input type="tel" id="phone" name="phone" placeholder='Enter Your Phone Number(Optional)'  /><br />
  
            {/* <label htmlFor="message">Message:</label><br /> */}
            <textarea id="message" name="message" rows="4" cols="50" placeholder='Enter Message' required></textarea><br />
  
            <button className={Styles.button} type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  
}

export default ContactPage