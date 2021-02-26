import { Heading, VStack, Text, Button, Box, Flex } from "@chakra-ui/react"

const InfoCard = ({ title, children, productName = null }) => (
  <VStack bg="orange.50" p={6} borderRadius="xl" spacing={4}>
    <Heading as="h4" fontSize="lg" fontWeight="bold" textAlign="center">
      {title}
    </Heading>
    <Text as="p" fontSize="sm">
      {children}
    </Text>
    {productName && <Flex w="full">
      <Button
        w={["100%", "auto"]}
        colorScheme="orange"
        size="sm"
        variant="outline"
        _hover={
          {
            // backgroundColor: "orange.100"
          }
        }
      >
        Go to {productName}
      </Button>
    </Flex>}
  </VStack>
)

export default InfoCard
