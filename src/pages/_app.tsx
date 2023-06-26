import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider />
        <Component {...pageProps} />
        {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false}/>
        )}
      </QueryClientProvider>
  )
}