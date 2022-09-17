import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../Components/hero'
import Intro from '../Components/intro'
import { getSortedPostsData } from '../lib/posts';


export default function Home({allPostsData}) {
  return (
    <div className=''>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade snap-y snap-mandatory'>
        <Hero />
        <Intro data={allPostsData}/>
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