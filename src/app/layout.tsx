import Head from 'next/head';
import Wrapper from '@/components/wrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>trashm.ink</title>
      </Head>
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}
