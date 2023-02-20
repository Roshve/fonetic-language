import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'

type Props = {
  children: React.ReactNode;
};

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Default;