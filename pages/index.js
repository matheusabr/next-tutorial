import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <p>{props.title}</p>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Blog</h1>
    <ul>
      <PostLink title='Next.js Tutorial - Part 1' />
      <PostLink title='Next.js Tutorial - Part 2' />
      <PostLink title='Next.js Tutorial - Part 3' />
    </ul>
  </Layout>
)
