import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='container mx-auto flex items-center justify-center text-center'>
      <div className='footer-text text-sm dark:text-white text-[#1a202c] opacity-40 my-[50px] px-[20px]'>
        &#169; {new Date().getFullYear()} Nipun Theekshana - @theetaz All Rights Reserved
      </div>
    </div>
  )
}
export default Footer
