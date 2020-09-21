import matter from 'gray-matter'

export interface Post {
  meta: Record<any, any>;
  body: string;
  slug: string;
}

export const getPosts = (context: __WebpackModuleApi.RequireContext): Post[] => {
  const keys = context.keys().reverse();
  const values = keys.map(context)

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
    const value: any = values[index]
    const document = matter(value.default + '')
    return {
      meta: document.data,
      body: document.content,
      slug,
    }
  })
  return data;
}

export default getPosts
