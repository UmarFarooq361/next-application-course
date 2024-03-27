import React from 'react';
import Styles from "./about.module.css"
import Image from 'next/image';

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h2 className={Styles.title}>About Agency</h2>
        <h1 className={Styles.heading}>We specialize in turning concepts into reality, providing creative solutions</h1>
        <p className={Styles.desc}>Creative Thoughts Agency is a place where innovative ideas come to life. 
        We specialize in turning concepts into reality, providing creative solutions for 
        businesses and individuals.</p>
      
      <div className={Styles.boxes}>
          <div className={Styles.box}>
            <h1>3 +</h1>
            <p>Years of Experinece</p>
          </div>
          <div className={Styles.box}>
            <h1>3 +</h1>
            <p>Years of Experinece</p>
          </div>
          <div className={Styles.box}>
            <h1>3 +</h1>
            <p>Years of Experinece</p>
          </div>
      </div>
      </div>
      <div className={Styles.imgContainer}>
        <Image src="/about.jpg" alt="" fill className={Styles.aboutImg}/>
      </div>
    </div>
  );
};

export default About;