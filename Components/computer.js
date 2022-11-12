import Image from 'next/image'

const Computer = () => {
  return (
    <div className='overflow-hidden snap-start'>
      <div className='relative flex items-center justify-center w-screen h-screen bg-computer-bg'>
        <div className='absolute z-20 w-screen h-screen bg-computer-img'></div>
        <div className='relative'>
          <div className='absolute z-10 flex items-center justify-center w-full top-10'>
            <div className='flex justify-center gap-4 item-center'>
              <div className='text-center'>
                <Image
                  src="/images/file.png"
                  alt="file icon"
                  width={100}
                  height={100}
                ></Image>
                <p className='text-center text-white'>Portfolio.pdf</p>
              </div>
              <div>
                <Image
                  src="/images/file.png"
                  alt="file icon"
                  width={100}
                  height={100}
                ></Image>
                <p className='text-center text-white'>Blogs.pdf</p>
              </div>
              <div>
                <Image
                  src="/images/file.png"
                  alt="file icon"
                  width={100}
                  height={100}
                ></Image>
                <p className='text-center text-white'>YouTube.pdf</p>
              </div>
            </div>
          </div>
          <Image
            src="/images/old_computer.png"
            alt="file icon"
            width={600}
            height={600}
          ></Image>
        </div>
      </div>
    </div>
    // <div className='snap-start'>
    //   <div className='flex items-end justify-center h-screen bg-center bg-no-repeat bg-cover bg-computer-img'>
    //     <div className='relative w-screen h-screen bg-center animate-bg-fade-out-1.5'>
    //       <Image
    //         src="/images/file.png"
    //         alt="file icon"
    //         width={60}
    //         height={60}
    //       ></Image>
    //       <div className='flex items-end justify-center w-screen h-screen'>
    //         <div className='text-lg text-white align-bottom'>
    //           <div className='absolute top-11'>hi</div>
    //           <div className='flex flex-col px-4 py-2 rounded-sm w-128 bg-shadow'>            
    //           {"C:\\Users\\Willy>"} cat intro2.md <br />
    //           Here are some files on my computer <br />
    //           Feel free to take a look at then :{">"}<br />
    //           </div>
    //           <div className='mb-2 font-bold text-center animate-bounce'>˯</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Computer