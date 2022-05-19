import Head from "next/head";
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => ( /* children prop is equal to whatever we pass into the Layout component whenever we call it */
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth='1280px' m='auto'>
      <header>
        NavBar
      </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </Box>
  </>
);

export default Layout;
