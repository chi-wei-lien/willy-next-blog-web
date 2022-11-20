import {parseISO, format} from "date-fns";
import Link from "next/link";

const Blogs = ({ posts }) => {
  return (
    <div className="snap-start">
      <div className="w-screen h-screen">
        <h1 className="py-10 text-5xl text-center underline decoration-indigo-500">Blogs</h1>
        <div className="flex justify-center">
          <div className="min-h-full py-10 h-96 bg-slate-100 laptop:w-3/5 laptop:px-40 phone:px-5 phone:w-4/5">
            {posts.map((post) => (
              <div className="flex">
                <div className="w-3/5">
                  <Link href={post.url}>{post.title}</Link>
                </div>
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