import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../Components/date';

export default function Post({ postData }) {
  return (
    <div>
      <div className='grid min-h-screen grid-flow-col grid-cols-4 font-mono bg-dark text-slate-100'>
        <div className='col-span-2 col-start-2 mt-12'>
          <span className='text-4xl'>{postData.title}</span>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        {/* <h1>{postData.title}</h1> */}
        {/* {postData.id} */}
        {/* <br /> */}
        {/* <Date dateString={postData.date}></Date> */}
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}