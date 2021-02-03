import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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
      <header className="p-4">
        <nav className="flex justify-between">
          <Link href="/">
            <a className="flex items-center space-x-1.5">
              <Image
                className="transition duration-700 ease-in-out transform hover:rotate-360"
                src="/images/logos/logo.png"
                width={35}
                height={35}
              />
              <div className="text-bp-blue text-xl font-semibold font-logo">
                blueprint
              </div>
            </a>
          </Link>
          <div className="flex space-x-4">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/apply">
              <a>Apply</a>
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <footer />
    </div>
  );
};

export default Layout;
