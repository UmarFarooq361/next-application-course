import Image from 'next/image'
import React from 'react'

const AboutPage= () => {
  return (
    <div>AboutPage
      <Image  src="/about.jpg" alt="iamge" width={400} height={300}/>
    </div>
  )
}

export default AboutPage