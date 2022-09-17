import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../Components/hero'
import Intro from '../Components/intro'

export default function Home() {
  return (
    <div className=''>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade snap-y snap-mandatory'>
        <Hero />
        <Intro />
      </div>
    </div>
  )
}
