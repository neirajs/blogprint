import {getPosts, Post} from '@utils/getPosts';
import Link from 'next/link'
import Layout from '../components/Layout'
import {FunctionComponent} from 'react';

interface Props {
  posts: Post[]
}

const IndexPage: FunctionComponent<Props> = ({posts}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <ul>
    {posts.map(post => (
      <li key={post.slug}>
        <Link href={`/post/${post.slug}`}>
          <a>
        {post.meta?.title}
          </a>
        </Link>
      </li>
    ))}
    </ul>
  </Layout>
)

export default IndexPage

export async function getStaticProps() {
  const context = require.context('../posts', true, /\.md$/);
  const posts = getPosts(context);
  return {
    props: {
      posts
    }
  }
}
