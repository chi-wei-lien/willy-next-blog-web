const Hero = () => (
  <div className='snap-start'>
    <div className='flex items-end justify-center h-screen bg-center bg-no-repeat bg-cover bg-hero-img'>
      <div className='flex items-end justify-center w-screen h-screen bg-center animate-bg-fade-out-1.5'>
        <div className='text-center text-white align-bottoms text-8xl font-vt323 animate-fade-in-2'>
          <div className='px-10 py-5 rounded-lg bg-shadow'>

            {/* Typing effect learned from https://vanntile.com/blog/composited-typing-animation#the-starting-point */}
            <span
              className="inline-flex overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
            >
            Hi, I'm Willy
            </span>
            <span
              className="box-border inline-block w-1 h-16 ml-2 bg-white animate-cursor will-change-transform"
            ></span>
            
          </div>
          <div className='animate-bounce mb-2'>˯</div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero