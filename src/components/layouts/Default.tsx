import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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