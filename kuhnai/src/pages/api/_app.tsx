import { AppProps } from 'next/app';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from '../../../utils/supabaseClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}

export default MyApp;