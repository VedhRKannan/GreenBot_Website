import Navbar from '../components/Navbar'
import '../styles/globals.css'
import React from 'react'

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType
  pageProps: any
}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
