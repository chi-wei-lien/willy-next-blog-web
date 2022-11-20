import {parseISO, format} from "date-fns";

const Blogs = ({ posts }) => {
  return (
    <div className="snap-start">
      <div className="w-screen h-screen">
        <h1 className="py-10 text-5xl text-center underline decoration-indigo-500">Blogs</h1>
        <div className="flex justify-center">
          <div className="py-10 bg-slate-100 laptop:w-3/5 laptop:px-40 phone:px-5 phone:w-4/5">
            {posts.map((post) => (
              <div className="flex">
                <h1 className="w-3/5">{post.title}</h1>
                <h3 className="w-2/5 text-right">{format(parseISO(post.date), 'LLLL d, yyyy')}</h3>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </div>
  )
}
export default Blogs;


// <div>
//   <div className="flex justify-center">
//     <div className="grid grid-cols-5 py-10 bg-white latop:gap-10 laptop:w-3/5 laptop:px-40 phone:px-5 phone:w-4/5 phone:gap-4">
//       <div className="flex justify-end col-span-1">
//         <div className="w-32 min-h-32">
//           <Image
//             src={props.data.img}
//             alt="file icon"
//             width="100%" height="100%"
//             layout="responsive"
//             objectFit="contain"
//             className=""
//           ></Image>
//         </div>
//       </div>
//       <div className="col-span-4">
//         <h2 className="text-xl font-bold">{props.data.title}</h2>
//         {props.data.descr}
//         <div className="flex justify-end pt-3">
//           <button onClick={toggle} className="underline text-slate-500 decoration-sky-500 decoration-2">Read More</button>
//         </div>
//       </div>
//       {open && 
//       <div className="col-span-5 px-3">
//         {props.data.content}
//       </div>
//       }
//     </div>
//   </div>      
// </div>