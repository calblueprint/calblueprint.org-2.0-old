import Link from 'next/link';
import Layout from '../../components/Layout';

export default function StudentApplication() {
  return (
    <Layout>
      <div>
        <h1>Hello students</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}
