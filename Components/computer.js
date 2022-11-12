const Computer = () => {
  return (
    <div className='snap-start'>
    <div className='flex items-end justify-center h-screen bg-center bg-no-repeat bg-cover bg-computer-img'>
      <div className='flex items-end justify-center w-screen h-screen bg-center animate-bg-fade-out-1.5'>
        <div className='text-lg text-white align-bottom animate-fade-in-2'>
          {/* <div className='px-10 py-2 rounded-sm bg-shadow'> */}
          <div className='flex flex-col px-4 py-2 rounded-sm w-128 bg-shadow'>            
          {"C:\\Users\\Willy>"} cat intro2.md <br />
          Here are some files on my computer <br />
          Feel free to take a look at then :{">"}<br />
          </div>
          <div className='mb-2 font-bold text-center animate-bounce'>˯</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Computer