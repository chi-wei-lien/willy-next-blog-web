import Post from "../pages/posts/[id]";

const Blogs = () => {
  return (
    <div className="snap-start">
      <div className="w-screen h-screen">
        <h1 className="py-10 text-5xl text-center underline decoration-indigo-500">Blogs</h1>
        <div className="">blog</div>
        <Post />
      </div>
    </div>
  )
}

export default Blogs;