import { FunctionComponent } from 'react';
import matter from 'gray-matter';
import MDX from '@mdx-js/runtime';
import getPosts, { Post } from '@utils/getPosts';

const components = {
  Demo: () => <img src="https://images.unsplash.com/photo-1599687349533-82f24a0b62cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
}

const PostPage: FunctionComponent<Props> = ({ post }) => {
  return (
    <article>
      <MDX components={components}>{post.body}</MDX>
    </article>
  );
};

interface Props {
  post: Post;
}

export default PostPage;

export async function getStaticProps(props: any) {
  const { ...ctx } = props;
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const meta = matter(content.default + '');

  return {
    props: {
      post: {
      slug: postname,
      meta: meta.data,
      body: meta.content,
      }
    },
  };
}

export async function getStaticPaths() {
  const context = require.context('../../posts', true, /\.md$/);
  const posts = getPosts(context);

  const paths = posts.map((post) => `/post/${post.slug}`);

  return {
    paths,
    fallback: false, // render 404
  };
}
