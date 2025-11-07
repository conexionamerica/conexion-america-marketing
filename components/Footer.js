import { Box, Flex, Text, Stack, Link } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={10}>
      <Flex
        align="center"
        justify="space-around"
        wrap="wrap"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Box mb={{ base: 6, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Conexión América</Text>
          <Text fontSize="sm">Aprende español y conecta con América Latina.</Text>
        </Box>

        <Stack direction="row" spacing={6} mb={{ base: 6, md: 0 }}>
          <Link href="/nosotros" fontSize="sm">Nosotros</Link>
          <Link href="/paquetes" fontSize="sm">Paquetes</Link>
          <Link href="/contacto" fontSize="sm">Contacto</Link>
        </Stack>

        <Stack direction="row" spacing={6}>
          <Link href="#" isExternal>
            <FaInstagram size="20px" />
          </Link>
          <Link href="#" isExternal>
            <FaFacebook size="20px" />
          </Link>
          <Link href="#" isExternal>
            <FaWhatsapp size="20px" />
          </Link>
        </Stack>
      </Flex>
      <Text fontSize="xs" textAlign="center" mt={6}>
        © {new Date().getFullYear()} Conexión América. Todos los derechos reservados.
      </Text>
    </Box>
  );
};

export default Footer;
