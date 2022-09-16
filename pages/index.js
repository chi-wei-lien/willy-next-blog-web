import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <div className='animate-fade'>
        <div className='flex items-end justify-center min-h-screen bg-center bg-no-repeat bg-cover bg-hero-img'>
          <div className='flex items-end justify-center w-screen h-screen bg-center animate-bg-fade-out-1.5'>
            <div className='text-center text-white align-bottoms text-8xl font-vt323 animate-fade-in-2'>
              <div className='px-10 py-5 rounded-lg bg-shadow'>Hi, I'm Willy</div>
              <div className='animate-bounce'>˯</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='text-6xl font-vt323'>hi</div>
    </div>
    
  )
}
