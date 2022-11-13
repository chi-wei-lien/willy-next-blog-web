import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Computer from '../components/computer'
import { getSortedPostsData } from '../lib/posts'
import About from '../components/about'
import Footer from '../components/footer'
import Portfolio from '../components/portfolio'

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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}