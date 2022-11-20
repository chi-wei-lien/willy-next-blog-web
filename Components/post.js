import Image from 'next/image';

const Post = ({title, children }) => {
  return (
    <div className='px-4 py-24'>
      <div className='mx-auto max-w-prose'>
        <h1 className='block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl'>
          {title}
        </h1>
        <br />
        <hr />
        <br />
        <article className='py-24 prose mx-autotext-gray-500 prose-md prose-indigo lg:prose-lg'>
          {children}
        </article>
      </div>
    </div>
  );
};

export default Post;