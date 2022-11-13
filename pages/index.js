import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/hero'
import Intro from '../Components/intro'
import Computer from '../Components/computer'
import { getSortedPostsData } from '../lib/posts'
import About from '../Components/about'
import Blogs from '../Components/blogs'
import Footer from '../Components/footer'
import Portfolio from '../Components/portfolio'

export default function Home({allPostsData}) {
  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade'>
        <Hero />
        <About />
        <Computer />
        <Portfolio />
        <Blogs />
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