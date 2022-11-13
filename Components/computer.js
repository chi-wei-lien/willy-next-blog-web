import Image from "next/image"
import Link from "next/link"
import ComputerFile from "./computer-file"

const Computer = () => {
  return (
    <div className="overflow-hidden snap-start">
      <div className="relative flex items-center justify-center w-screen h-screen bg-computer-bg">
        <div className="absolute z-20 w-screen h-screen bg-computer-img"></div>
        <div className="relative">
          <div className="absolute z-30 flex items-center justify-center w-full top-10">
            <div className="flex justify-center gap-4 item-center">
              <ComputerFile name="portfolio.png" img="/images/file.png" url="#portfolio"/>
              <ComputerFile name="blogs.png" img="/images/file.png" url="#blog"/>
              <ComputerFile name="YouTube" img="/images/youtube.png" url="https://www.youtube.com/@loopholewilson"/>
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
  )
}

export default Computer