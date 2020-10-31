import Link from 'next/link'

export default function StudentApplication() {
    return <div>
        <h1>Hello students</h1>
        <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
        </div>
  }