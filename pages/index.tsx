import Head from "next/head"
import {
  Image,
  Heading,
  Text,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react"
import { Nav, SimpleLayout } from "components"
import CurrentProjects from "components/CurrentProjects"
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
          content="FRN4CNOal_5H607h5ZQVGOQLzBodrKU8Wqx_BmVSklw"
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
            {/* <Text as="p" mt={5} fontWeight="medium" color="gray.800">
              In the latter part of 2015 we embarked on a journey into eHealth
              and SaaS, initially specific to occupational health. eHealth
              Africa is the collaborative efforts of those involved.
            </Text> */}
            <Text as="p" mt={5} fontWeight="medium" color="gray.800">
              In the latter part of 2015 we set out to provide an enterprise
              level Occupational Health suite of tools that any practice or
              clinic can afford. As we went along, our mission changed.
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
        <CurrentProjects />

        {/* <Stack my={20}>
          <Heroh />
          <Square />
        </Stack> */}

        <Flex as="footer" mt={10}>
          <Text mr={1}>You can</Text>
          <Link
            fontWeight="medium"
            color="orange.600"
            href="mailto:info@e-health.africa"
          >
            contact us
          </Link>
          <Text ml={1}>if you have any enquiries.</Text>
        </Flex>
      </SimpleLayout>
    </>
  )
}

// const x = () => (
//   <UnorderedList>
// <ListItem>
//   Increase the productive lives of all fellow Africans
// </ListItem>
// <ListItem>facilitate economic growth in Africa</ListItem>
// <ListItem>Identify occupational disease through big data</ListItem>
// <ListItem>
//   Enable response by governments, the AU, WHO, ILO and World bank
// </ListItem>
// <ListItem>Enforce ethical behaviour by employers</ListItem>
// <ListItem>
//   Effect regulations through active participation by governments
// </ListItem>
// <ListItem>
//   Provide access to electronic health records and certificates of
//   fitness, issued by a certified partner, anywhere in Africa
// </ListItem>
// <ListItem>
//   Create a vehicle to enable Occupational Health in the informal
//   (mining-) sector
// </ListItem>
// <ListItem>
//   Provide access to electronic health records and certificates of
//   fitness, issued by a certified partner, anywhere in Africa
// </ListItem>
// <ListItem>
//   Create a framework to address wrongs of the past (retired mineworkers;
//   refer silicosis & TB)
// </ListItem>
// </UnorderedList>

// )
// const ListItem = ({ children }) => <CListItem fontSize="sm" fontWeight="medium">{children}</CListItem>
