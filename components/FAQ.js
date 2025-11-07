import {
  Box,
  Heading,
  Container,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export default function FAQ() {
  return (
    <Box bg="white" py={20}> 
      <Container maxWidth="1000px">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="blue.800">
          Perguntas Frequentes
        </Heading>

        <Accordion allowToggle>
          
          <AccordionItem>
            <h2>
              <AccordionButton py={4}>
                <Box flex="1" textAlign="left" fontSize="lg" fontWeight="medium">
                  Qual o formato das aulas?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              Todas as aulas são particulares, ao vivo e realizadas por videochamada (Google Meet ou Zoom), com foco total na sua participação e prática oral.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton py={4}>
                <Box flex="1" textAlign="left" fontSize="lg" fontWeight="medium">
                  Preciso ter algum conhecimento prévio?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              Não. Nosso método atende desde o nível zero até o avançado. Adaptamos o material para garantir que você comece a falar de forma confortável.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton py={4}>
                <Box flex="1" textAlign="left" fontSize="lg" fontWeight="medium">
                  Como funciona o agendamento?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              Após a compra, você terá acesso a um sistema de agenda online para escolher os horários e dias que melhor se encaixam na sua rotina semanal.
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Container>
    </Box>
  );
}
