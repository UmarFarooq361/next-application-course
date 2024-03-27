import React from 'react';
import Styles from "./home.module.css"
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h1 className={Styles.title}>Creative Thoughts Agency</h1>
        <p className={Styles.desc}>Creative Thoughts Agency is a place where innovative ideas come to life. 
        We specialize in turning concepts into reality, providing creative solutions for 
        businesses and individuals.</p>
      
      <div className={Styles.buttons}>
          <button className={Styles.button}>Learn More</button>
          <button className={Styles.button}>contact</button>
      </div>
      </div>
      <div className={Styles.imgContainer}>
        <Image src="/home.jpg" alt="" fill className={Styles.heroImg}/>
      </div>
    </div>
  );
};

export default HomePage;