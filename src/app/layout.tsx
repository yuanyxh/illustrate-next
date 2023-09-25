import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'illustrate-next',
  description:
    '效果演示网站, 动画效果, 常见功能, js,html,css,react,vue,nextjs,nuxtjs,uniapp,taro,webpack'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#303030"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>

      <body className={inter.className}>
        <noscript>You need to enable JavaScript to run this app.</noscript>

        {children}
      </body>
    </html>
  );
}
