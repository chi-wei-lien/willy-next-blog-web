import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/hero'
import Intro from '../Components/intro'
import Computer from '../Components/computer'
import { getSortedPostsData } from '../lib/posts'
import About from '../Components/about'
import Blog from '../Components/blog'
import Footer from '../Components/footer'

export default function Home({allPostsData}) {
  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade snap-y snap-mandatory'>
        <Hero />
        <About />
        <Computer />
        <Blog />
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