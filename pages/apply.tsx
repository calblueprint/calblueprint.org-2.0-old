import Head from 'next/head';
import Link from 'next/link';

export const Apply: React.FC = () => {
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
};

export default Apply;
