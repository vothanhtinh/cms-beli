import './globals.css';

import { Inter } from 'next/font/google';
import { asText } from '@prismicio/client';
import { PrismicText } from '@prismicio/react';
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';

import { createClient, repositoryName } from '@/prismicio';
import { Bounded } from '@/components/Bounded';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={inter.variable}
    >
      <body className='overflow-x-hidden antialiased'>
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const navigation = await client.getSingle('navigation');

  return (
    <Bounded
      as='header'
      yPadding='sm'
    >
      <div className='flex flex-wrap items-center justify-between gap-x-8 gap-y-4 leading-none'>
        <Link href={'/'}>
          <Image
            width={120}
            height={56}
            alt='log'
            src='https://images.prismic.io/demo-cms-beli/ZzMZkK8jQArT0uij_Real-Estate-e1720093351427.png?auto=format,compress'
          />
        </Link>
        <nav>
          <ul className='flex flex-wrap gap-6 md:gap-10'>
            {navigation.data?.links.map((item) => (
              <li
                key={asText(item.label)}
                className='font-semibold tracking-tight text-slate-800'
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
