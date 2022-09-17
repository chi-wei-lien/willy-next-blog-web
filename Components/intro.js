const Intro = () => (
  <div className='snap-start'>
    <div className='h-screen bg-center bg-no-repeat bg-cover bg-dark'>
      <div class="grid grid-cols-4 grid-flow-col gap-8 font-vt323 text-left">
        <div className='flex items-start justify-center col-span-2 col-start-2'>
          <img className='mt-10 rounded-full w-80' src='/images/me.jpg'></img>
        </div>
        <div className='col-start-4'></div>
        <div className='col-start-2 py-2 rounded-lg px-7 bg-slate-700'>
          <div className='text-2xl text-slate-400'>
            blog
          </div>
          <div className='text-2xl text-left text-slate-100'>
            <ul className='list-disc'>
              <li>
                3/15 — First Workshop I Ever Run In University
              </li>
              <li className='list-disc'>
                Sneak Into and Remote Control A Computer (Reverse Shell Script) - Line-by-line Explanation
              </li>
              <li className='list-disc'>
                Intro To Git
              </li>
            </ul>
          </div>
        </div>
        <div className='col-start-3 py-2 rounded-lg px-7 bg-slate-700'>
          <div className='text-2xl text-slate-400'>
            portfolio
          </div>
          <div className='text-2xl text-left text-slate-100'>
            <ul className='list-disc'>
              <li>
                3/15 — First Workshop I Ever Run In University
              </li>
              <li className='list-disc'>
                Sneak Into and Remote Control A Computer (Reverse Shell Script) - Line-by-line Explanation
              </li>
              <li className='list-disc'>
                Intro To Git
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='h-48 col-start-3 text-2xl text-black rounded-lg bg-slate-300'>Portfolio</div> */}
        {/* <div className='h-48 col-start-2 text-2xl text-black rounded-lg bg-slate-300'>YouTube</div> */}
      </div>
    </div>
    
  </div>
)

export default Intro


{/* <div className='text-6xl font-vt323 snap-start bg-dark'>hi</div>
<div className='flex items-end justify-center w-screen h-screen bg-center animate-bg-fade-out-1.5'>
        <div className='text-center text-white align-bottoms text-8xl font-vt323 animate-fade-in-2'>
          <div className='px-10 py-5 rounded-lg bg-shadow'>Hi, I'm Willy</div>
          <div className='animate-bounce'>˯</div>
        </div>
      </div> */}