import Link from 'next/link'

const Index = () => (
  <div>
    <p>Next.js tutorial</p>
    <Link href='/about'>
      <button>Go to About Page</button>
    </Link>
  </div>
)

export default Index
