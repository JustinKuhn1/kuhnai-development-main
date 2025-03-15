// _app.tsx or app/layout.tsx (depending on your Next.js version)
import { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;