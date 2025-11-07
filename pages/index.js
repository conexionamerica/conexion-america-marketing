import Head from 'next/head'
import { Box, Heading, Text, Container, Button, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link'

// Importamos los nuevos componentes
import Benefits from '../components/Benefits'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Conexión América - Aprende Español en Línea</title>
        <meta name="description" content="Tu escuela de español online con enfoque en conversación y flexibilidad horaria." />
      </Head>

      {/* 1. Sección Hero (Bienvenida) */}
      <Box 
        bg="blue.50" 
        py={{ base: 10, md: 20 }} 
        textAlign="center"
      >
        <Container maxW="container.lg">
          <Heading as="h1" size={{ base: "2xl", md: "3xl" }} mb={4} color="blue.800">
            Fale espanhol com confiança e fluidez.
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" mb={8}>
            A única escola online focada 100% na conversação para o público brasileiro.
          </Text>
          <VStack spacing={4}>
            <Link href="/test-gratis" passHref>
              <Button as="a" colorScheme="orange" size="lg">
                Agende sua Aula Experimental Grátis
              </Button>
            </Link>
            <Text fontSize="sm" color="gray.500">
              Sem compromisso, apenas o prazer de aprender.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* 2. Sección de Presentación (Imagen) */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10} color="blue.800">
            Método Prático e Flexível
          </Heading>
          <VStack spacing={8}>
            <Image 
                src="https://images.unsplash.com/photo-1543269865-cbf427c9369a?q=80&w=800"
                alt="Estudantes em aula online"
                borderRadius="lg"
                boxShadow="xl"
            />
            <Text fontSize="lg" maxW="800px" textAlign="center">
                Nossas aulas são particulares e 100% online, perfeitas para o seu ritmo de vida. Aprenda no horário que funciona para você, com foco total em sair falando.
            </Text>
          </VStack>
        </Container>
      </Box>
      
      {/* 3. Sección de Pilares/Beneficios */}
      <Benefits /> 

      {/* 4. Sección de Preguntas Frecuentes */}
      <FAQ />

    </Box>
  )
}
