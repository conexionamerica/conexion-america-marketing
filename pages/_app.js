import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

// Importaciones Mínimas (Crearemos estos archivos en el siguiente paso)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
