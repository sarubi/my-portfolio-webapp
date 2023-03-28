import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nipun Theekshana | Personal Portfolio</title>
      </Head>
      <div className='min-h-screen flex flex-col bg-[#F0E7DB] dark:bg-[#202023]'>
        <NavBar />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout