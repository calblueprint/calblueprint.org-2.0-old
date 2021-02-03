import Head from 'next/head';
import Link from 'next/link';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'Blueprint' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>
              <h1>Blueprint</h1>
            </a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer />
    </div>
  );
};

export default Layout;
