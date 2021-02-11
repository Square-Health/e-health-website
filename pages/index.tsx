import Head from "next/head"
import {
  Image,
  Heading,
  Icon,
  Text,
  Flex,
  Stack,
  HStack,
  Link,
  SimpleGrid,
} from "@chakra-ui/react"
import { Nav, SimpleLayout } from "components"
import { FiArrowRight } from "react-icons/fi"
export default function Home() {
  return (
    <>
      <Head>
        <title>eHealth Africa</title>
        <meta property="og:image" content="http://e-health.africa/africa.png" />
        <meta
          property="og:description"
          content="The new standard in e-health."
        />
        <meta
          name="description"
          content="The new standard in e-health. In the latter part of 2015 we embarked on a journey into eHealth
              and SaaS, initially specific to occupational health. eHealth
              Africa is the collaborative efforts of those involved."
        ></meta>
        {/* <meta property="og:site_name" content="Square Health" /> */}
        <meta property="og:title" content="eHealth Africa" />
        <meta property="og:url" content="https://e-health.africa" />
        <meta
          name="google-site-verification"
          content="gtkVpvjbkGRiv6GTs5ptKfK_DYBGKcfa9exn8cuEa60"
        />
      </Head>
      <SimpleLayout>
        <Nav />
        <HStack mt={[6, 16, 20]} spacing={10}>
          <Flex flex={5} direction="column">
            <Heading
              as="h2"
              fontSize={["2xl", "3xl"]}
              fontWeight="bold"
              color="gray.900"
            >
              The new standard in eHealth
            </Heading>
            <Text as='p' mt={5} fontWeight="medium" color="gray.800">
              In the latter part of 2015 we embarked on a journey into eHealth
              and SaaS, initially specific to occupational health. eHealth
              Africa is the collaborative efforts of those involved.
            </Text>
          </Flex>
          <Flex display={["none", "none", "block"]} flex={2}>
            <Image
              mx="auto"
              mb={10}
              boxSize="130px"
              fallbackSrc="/africa.png"
              alt="Africa"
            />
          </Flex>
        </HStack>
        <Text
          as='span'
          mt={16}
          fontSize="sm"
          color="gray.700"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Current projects
        </Text>
        <SimpleGrid columns={[1, 1, 2]} mt={4} spacing={3}>
          <Product
            href="https://square.health"
            img="/icon.png"
            title="Square Health"
            description="A Fresh approach to collaborative healthcare, starting with the individual."
          />
          <Product
            href="https://heroh.africa"
            img="/tree.png"
            title="Heroh"
            description="The best platform for managing the health of your employees."
          />
        </SimpleGrid>
        <Flex as='footer' mt={10}>
          <Text mr={1}>You can</Text>
          <Link
            fontWeight="medium"
            color="orange.600"
            href="mailto:info@e-health.africa"
          >
            contact us
          </Link>
          <Text ml={1}>if you have any inquiries.</Text>
        </Flex>
      </SimpleLayout>
    </>
  )
}
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