import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sarubi Thillainathan | Personal Portfolio</title>
        <meta name="description" content="Sarubi Thillainathan, PhD student in Computational Linguistics at Saarland University working on controllable and personalised text generation, authorship style transfer and model merging." />
        <meta property="og:title" content="Sarubi Thillainathan" />
        <meta property="og:description" content="PhD student at Saarland University working on controllable and personalised text generation with LLMs." />
        <meta property="og:type" content="website" />
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