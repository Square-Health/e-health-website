import { Heading, VStack, Text } from "@chakra-ui/react"

const InfoCard = ({ title, children }) => (
  <VStack bg="orange.50" p={6} borderRadius="xl" spacing={4}>
    <Heading as="h4" fontSize="lg" fontWeight="bold" textAlign="center">
      {title}
    </Heading>
    <Text as="p" fontSize="sm">
      {children}
    </Text>
  </VStack>
)

export default InfoCard
