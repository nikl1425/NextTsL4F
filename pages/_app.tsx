// Style
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

// Props
import type { AppProps } from 'next/app'

// Master template
import Layout from "./layout";

// Font Awesome Icons
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  ) 
}
