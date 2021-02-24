import { Image, Icon, Text, Stack, HStack, SimpleGrid } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"

const CurrentProjects = () => {
  return (
    <>
      <Label>Current projects</Label>
      <SimpleGrid columns={[1, 1, 2]} mt={4} spacing={3}>
        <Product
          href="https://heroh.africa"
          img="/tree.png"
          title="Heroh"
          description="The best platform for managing the health of your employees."
        />
        <Product
          href="https://square.health"
          img="/icon.png"
          title="Square Health"
          description="A fresh approach to collaborative healthcare, starting with the individual."
        />
      </SimpleGrid>
    </>
  )
}

export default CurrentProjects

const Label = ({ children }) => (
  <Text
    as="span"
    mt={16}
    fontSize="sm"
    color="gray.700"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wide"
  >
    {children}
  </Text>
)

const Product = ({ href, title, description, img }) => (
  <HStack
    as="a"
    href={href}
    cursor="pointer"
    transition="box-shadow 0.3s ease-in-out"
    _hover={{
      boxShadow: "lg",
    }}
    px={5}
    py={5}
    boxShadow="md"
    justify="space-between"
    borderRadius="lg"
    w="full"
  >
    <HStack spacing={4}>
      <Image width={["60px", "40px"]} src={img} />
      <Stack spacing={0}>
        <Text fontSize="lg" fontWeight="semibold">
          {title}
        </Text>
        <Text lineHeight="short" fontSize="sm" color="gray.700">
          {description}
        </Text>
      </Stack>
    </HStack>
    <Icon display={["none", "inline"]} as={FiArrowRight} />
  </HStack>
)
