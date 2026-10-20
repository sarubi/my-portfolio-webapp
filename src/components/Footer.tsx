import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='container mx-auto flex items-center justify-center text-center'>
      <div className='footer-text text-sm dark:text-white text-[#1a202c] opacity-40 my-[50px] px-[20px]'>
        <div>&#169; {new Date().getFullYear()} Sarubi Thillainathan - All Rights Reserved</div>
        <div className='mt-[5px]'>
          <a className='underline hover:opacity-80' href='https://github.com/sarubi/my-portfolio-webapp' target='_blank' rel='noreferrer'>
            Source
          </a>
          {' · Based on a template by '}
          <a className='underline hover:opacity-80' href='https://github.com/theetaz' target='_blank' rel='noreferrer'>
            Nipun Theekshana
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
