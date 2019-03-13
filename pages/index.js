import Link from 'next/link'

const Index = () => (
  <div>
    <p>Next.js tutorial</p>
    <Link href='/about'>
      <a style={{ fontSize: 20 }}>Go to About Page</a>
    </Link>
  </div>
)

export default Index
