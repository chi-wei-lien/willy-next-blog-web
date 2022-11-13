import Image from "next/image";
import ProjectCard from "./project-card";

const Portfolio = () => {
  return (
    <div className='snap-start bg-slate-100'>
      <div className='w-screen min-h-screen'>
        <h1 className='py-10 text-5xl text-center underline decoration-indigo-500'>Portfolio</h1>
        <p className="text-center text-slate-700">
          If you are a recruiter, please download the <br /> formal resume from here:{" "}
          <a
            href="/files/2022-11-9 Chi-Wei Lien.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 decoration-pink-500"
          >resume.pdf</a>
        </p>

        <ProjectCard />
        
        <div className="flex justify-center pt-10">
          <div className='grid w-3/5 grid-cols-5 gap-4 py-10 bg-white laptop:px-40 phone:px-0'>
            <div className="flex justify-end col-span-1">
              <div className="w-32 min-h-32">
                <Image
                  src="/images/portfolio/paper.png"
                  alt="file icon"
                  width="100%" height="100%"
                  layout="responsive"
                  objectFit='contain'
                  className=""
                ></Image>
              </div>
            </div>
            <div className="col-span-4">
              <p>Chi-Wei Lien and Sudip Vhaduri, "Challenges and Opportunities of Biometric User Authentication in the Age of IoT: A Survey," <span className="underline decoration-2 decoration-pink-500">ACM Computing Surveys, 2022</span> (Under Review)</p>
              <div className="flex justify-end">
                <a href="#" className="text-slate-500">still under review...</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <div className='grid w-3/5 grid-cols-5 gap-4 py-10 bg-white laptop:px-40 phone:px-0'>
            <div className="flex justify-end col-span-1">
              <div className="w-32 min-h-32">
                <Image
                  src="/images/portfolio/paper.png"
                  alt="file icon"
                  width="100%" height="100%"
                  layout="responsive"
                  objectFit='contain'
                  className=""
                ></Image>
              </div>
            </div>
            <div className="col-span-4">
              <p>Chi-Wei Lien and Sudip Vhaduri, "Challenges and Opportunities of Biometric User Authentication in the Age of IoT: A Survey," <span className="underline decoration-2 decoration-pink-500">ACM Computing Surveys, 2022</span> (Under Review)</p>
              <div className="flex justify-end">
                <a href="#" className="text-slate-500">still under review...</a>
              </div>
            </div>
          </div>
        </div>
        
          

        <div className="h-20 col-span-6"></div>
        
        <div className='grid grid-cols-6 gap-4 py-20 laptop:px-36 phone:px-0'>
          <div className="col-span-3 col-start-2">02</div>
          <div className="flex justify-start col-span-2 ">
            <div className="w-32 min-h-32">
              <Image
                src="/images/portfolio/youtube.png"
                alt="file icon"
                width="100%" height="100%"
                layout="responsive"
                objectFit='contain'
                className=""
              ></Image>
            </div>
          </div>

          <div className="flex justify-end col-span-2">
            <div className="w-32 min-h-32">
              <Image
                src="/images/portfolio/slime-climb.png"
                alt="file icon"
                width="100%" height="100%"
                layout="responsive"
                objectFit='contain'
                className="rounded-lg"
            ></Image>
            </div>
          </div>
          <div className="col-span-3">01</div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;