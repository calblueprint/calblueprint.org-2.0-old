import Head from 'next/head';
import Link from 'next/link';

export default function Apply() {
  return (
    <div>
      <Head>
        <title>Apply | Blueprint</title>
      </Head>
      Students apply{' '}
      <Link href="/apply/students">
        <a>here!</a>
      </Link>
    </div>
  );
}
