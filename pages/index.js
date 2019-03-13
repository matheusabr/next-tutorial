import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <p>{props.title}</p>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Blog</h1>
    <ul>
      <PostLink id='nextjs-p1' title='Next.js Tutorial - Part 1' />
      <PostLink id='nextjs-p2' title='Next.js Tutorial - Part 2' />
      <PostLink id='nextjs-p3' title='Next.js Tutorial - Part 3' />
    </ul>
  </Layout>
)
