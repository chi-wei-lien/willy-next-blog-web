import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/hero'
import Computer from '../Components/computer'
import About from '../Components/about'
import Footer from '../Components/footer'
import Portfolio from '../Components/portfolio'

export default function Home({allPostsData}) {
  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
        <Hero />
        <About />
        <Computer />
        <Portfolio />
        {/* <Blogs /> */}
        <Footer />
        {/* <Intro data={allPostsData}/> */}
      </div>
    </div>
  )
}
