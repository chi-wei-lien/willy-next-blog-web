import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/hero'
import Computer from '../Components/computer'
import About from '../Components/about'
import Footer from '../Components/footer'
import Portfolio from '../Components/portfolio'
import Blogs from '../Components/blogs'
import { allPosts } from 'contentlayer/generated';

export default function Home({posts}) {
  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
        <Hero />
        <About />
        <Computer />
        <Portfolio />
        <Blogs posts={posts}/>
        <Footer />
        {/* <Intro data={allPostsData}/> */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = allPosts.sort()
  return { props: { posts } }
}

