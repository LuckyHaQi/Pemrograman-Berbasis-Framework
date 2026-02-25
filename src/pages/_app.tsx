import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/appshell'
import Navbar from '@/components/layouts/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </div>
  )
}
