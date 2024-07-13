import type { Metadata } from 'next';

import '@/styles/globals.css';
import ReactQueryProviders from '@/hooks/useReactQuery';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
