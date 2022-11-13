import Image from "next/image";
import { useState } from "react";

const ProjectCard = () => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  }

  return (
    <div>
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
              <button onClick={toggle} className="text-slate-500">Read More {">"}</button>
            </div>
          </div>
          {open && 
          <div className="col-span-5">
            hi
          </div>
          }
        </div>
      </div>      
    </div>
  );
}

export default ProjectCard;