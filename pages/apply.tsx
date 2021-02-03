import Layout from 'components/Layout';
import Link from 'next/link';

export const Apply: React.FC = () => {
  return (
    <div>
      <Layout title="Apply | Blueprint">
        Students apply{' '}
        <Link href="/apply/students">
          <a>here!</a>
        </Link>
      </Layout>
    </div>
  );
};

export default Apply;
