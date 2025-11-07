import { Box, SimpleGrid, Heading, Text, Icon, VStack, Container } from '@chakra-ui/react';
// Íconos de React para los pilares
import { FaGlobe, FaClock, FaCommentDots, FaChalkboardTeacher } from 'react-icons/fa';

// Un componente para cada "pilar"
function BenefitCard({ icon, title, text }) {
  return (
    <VStack
      bg="white"
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      border="1px"
      borderColor="gray.100"
      align="center"
      spacing={3}
    >
      <Icon as={icon} w={10} h={10} color="orange.500" /> {/* Color naranja para un estilo diferente */}
      <Heading as="h3" size="lg" textAlign="center">{title}</Heading>
      <Text fontSize="md" color="gray.600" textAlign="center">
        {text}
      </Text>
    </VStack>
  );
}

// El componente principal que exportamos
export default function Benefits() {
  return (
    <Box bg="gray.50" py={20}> 
      <Container maxWidth="1200px">
        <VStack spacing={4} mb={12}>
          <Heading as="h2" size="2xl" textAlign="center" color="blue.800">
            Por que escolher a Conexión América?
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center">
            Nossos pilares garantem sua fluidez e sucesso.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Aquí creamos los 4 pilares */}
          <BenefitCard
            icon={FaGlobe}
            title="Conexão Global"
            text="Professores nativos e conteúdo relevante para o mundo real. Você aprende o espanhol como ele é falado hoje."
          />
          <BenefitCard
            icon={FaClock}
            title="Flexibilidade Total"
            text="Agende suas aulas no horário que melhor se adapta à sua rotina, sem comprometer seus compromissos."
          />
          <BenefitCard
            icon={FaCommentDots}
            title="Foco em Conversação"
            text="Método 100% prático. Desde a primeira aula, você é incentivado a falar para construir confiança rapidamente."
          />
          <BenefitCard
            icon={FaChalkboardTeacher}
            title="Aulas Particulares"
            text="Atenção exclusiva do professor, garantindo que seu ritmo e suas dúvidas sejam o centro do aprendizado."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
