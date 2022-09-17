import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../Components/date';

export default function Post({ postData }) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date}></Date>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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