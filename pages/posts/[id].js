import { allPosts } from 'contentlayer/generated'
import Post from '../../Components/post'
import SampleComponent from '../../components/SampleComponent';
import { useMDXComponent } from 'next-contentlayer/hooks';

const usedcomponents = {
  SampleComponent,
};


export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.id)
  return {
    props: {
      post,
    },
  }
}

const SinglePost = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <Post
        title={post.title}
      >
        <MDXContent components={usedcomponents}></MDXContent>
      </Post>
    </>
  );
};

export default SinglePost