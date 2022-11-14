import Image from "next/image";
import { useState } from "react";

const ProjectCard = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  }
  
  return (
    <div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-5 gap-4 py-10 bg-white laptop:w-3/5 laptop:px-40 phone:px-5 phone:w-4/5">
          <div className="flex justify-end col-span-1">
            <div className="w-32 min-h-32">
              <Image
                src={props.data.img}
                alt="file icon"
                width="100%" height="100%"
                layout="responsive"
                objectFit="contain"
                className=""
              ></Image>
            </div>
          </div>
          <div className="col-span-4">
            <h2 className="text-xl font-bold">{props.data.title}</h2>
            {props.data.descr}
            <div className="flex justify-end pt-3">
              <button onClick={toggle} className="underline text-slate-500 decoration-sky-500 decoration-2">Read More</button>
            </div>
          </div>
          {open && 
          <div className="col-span-5">
            {props.data.content}
          </div>
          }
        </div>
      </div>      
    </div>
  );
}

export default ProjectCard;