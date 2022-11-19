import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  console.log(postData)
  return (
    <div>
      {postData.title}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}