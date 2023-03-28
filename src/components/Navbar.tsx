import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes';
import Link from 'next/link';

const NavBar: React.FC = () => {

  const { theme, setTheme, systemTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const navigation = [
    {
      name: 'Show Room',
      path: '/show-room',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Hire Me',
      path: '/contact',
    }
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const renderThemeSwitcher = () => {
    if (!isMounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <motion.div
          className="w-8 h-8 bg-[#fbd38d] flex items-center justify-center rounded-full"
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SunIcon className="h-6 w-6 transform rotate-180 transition duration-500 cursor-pointer p-[2px]  text-black"
            onClick={() => setTheme('light')} />
        </motion.div>
      )
    } else {
      return (
        <motion.div
          className="w-8 h-8 bg-[#805ad5] flex items-center justify-center rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <MoonIcon className="h-6 w-6 transform transition duration-500 cursor-pointer p-[2px]"
            onClick={() => setTheme('dark')} />
        </motion.div>
      )
    }
  }

  return (
    <nav className='w-full sticky top-0 bg-[#ffffff40] dark:bg-[#20202380] backdrop-blur-md h-12 flex items-center py-[30px] px-[20px] z-20'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='navigation-controller flex'>
          <div className='main-logo flex pr-10'>
            <div className='logo-image pr-1'>
              👋
            </div>
            <div className='logo-text font-medium'>
              <Link href="/">
                Nipun Theekshana
              </Link>
            </div>
          </div>

          <div className='nav-links md:flex hidden space-x-[20px]'>
            {
              navigation.map((nav, index) => (
                <div key={index} className='nav-link text-[14px] font-medium'>
                  <Link href={nav.path}>
                    {nav.name}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className='theme-controller flex'>
          {renderThemeSwitcher()}
          {
            isMobileMenuOpen ? (
              <motion.div
                className="md:hidden w-8 h-8 flex items-center justify-center rounded ml-[5px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="h-6 w-6" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
              </motion.div>
            ) : (
              <motion.div
                className="md:hidden w-8 h-8 flex items-center justify-center rounded ml-[5px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Bars3Icon className="h-6 w-6" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
              </motion.div>
            )
          }
        </div>
      </div>

      {
        isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative mobile-menu md:hidden">
            <div className="absolute top-0 right-0 mt-[30px] min-w-[150px] bg-[#e3dacf] dark:bg-[#2c2c31] rounded-md py-[10px]">
              {
                navigation.map((nav, index) => (
                  <div key={index} className='nav-link text-[14px] font-medium py-[5px] px-[10px] hover:bg-[#c5b99f] mb-1'>
                    <Link href={nav.path} onClick={() => setIsMobileMenuOpen(false)}>
                      {nav.name}
                    </Link>
                  </div>
                ))
              }
            </div>
          </motion.div>
        )
      }
    </nav >
  )
}

export default NavBar