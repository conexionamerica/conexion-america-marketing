import { Box, Flex, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="blue.800"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="xl" fontWeight="bold">
          <Link href="/">Conexión América</Link>
        </Text>
      </Flex>

      <Box display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center">
        <Link href="/nosotros" passHref>
          <Button as="a" variant="ghost" mr={4}>
            Nosotros
          </Button>
        </Link>
        <Link href="/paquetes" passHref>
          <Button as="a" variant="ghost" mr={4} rightIcon={<ChevronDownIcon />}>
            Paquetes
          </Button>
        </Link>
        <Link href="/contacto" passHref>
          <Button as="a" variant="ghost" mr={4}>
            Contacto
          
          </Button>
        </Link>
        {/* Enlace al subdominio de alumnos */}
        <a href="http://alunos.conexionamerica.com.br" target="_blank" rel="noopener noreferrer">
          <Button colorScheme="orange">
            Entrar (Alumnos)
          </Button>
        </a>
      </Box>
    </Flex>
  );
};

export default Navbar;
