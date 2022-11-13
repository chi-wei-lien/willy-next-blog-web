// import Link from "next/link";

// export default function Intro ({data}) {
//   return(
//     <div className="snap-start">
//       <div className="h-screen bg-center bg-no-repeat bg-cover bg-dark">
//         <div className="grid grid-flow-col grid-cols-4 gap-8 text-left font-vt323">
//           <div className="flex items-start justify-center col-span-2 col-start-2">
//             <img className="mt-10 rounded-full w-80" src="/images/me.jpg"></img>
//           </div>
//           <div className="col-start-4"></div>
//           <div className="col-span-2 col-start-2 py-2 rounded-lg px-7 bg-slate-700">
//             <div className="text-2xl text-slate-400">
//               post
//             </div>
//             <div className="text-2xl text-left text-slate-100">
//               <ul className="list-disc">
//                 {data.map(({ id, date, title }) => (
//                   <li key={id}>
//                     <Link href={`/posts/${id}`}>
//                       <a>{title}</a>
//                     </Link>
//                     <br />
//                     <Date dateString={date} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }