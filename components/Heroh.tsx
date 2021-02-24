import {
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import InfoCard from "./InfoCard"

const Heroh = ({ ...rest }) => {
  return (
    <Stack spacing={[4, 16]} {...rest}>
      <HStack as="a" href="https://heroh.africa" cursor="pointer" spacing={3}>
        <Image width={["60px", "50px"]} src="/tree.png" />
        <Heading as="h3" fontSize="4xl">
          Heroh
        </Heading>
      </HStack>

      <SimpleGrid spacingY={[4, 3, 10]} spacingX={10} columns={[1, 1, 2]}>
        <InfoCard title="Your Electronic Health Record">
          Initially we focussed all our energy on Occupational Health: Providing
          a toolset for Occupational Health practitioners - not another practice
          management solution, but a suite of tools to address your needs. And
          your clients’ needs. So we originally set out to provide an enterprise
          level Occupational Health suite of tools that any practice or clinic
          can afford. But as we went along, we learnt so much more.
        </InfoCard>

        <InfoCard title="A captive market in most developing countries">
          There are many countries where Occupational Health is either poorly
          regulated or not regulated at all. Poor or no regulation implies
          limited Occupational Health services. Limited Occupational Health
          services implies a captive market, or even worse, the promotion of
          unethical behavior by employers. How to address this quickly? Heroh
          provides you as a general practitioner in such territories with the
          tools and Occupational Health framework to make a difference.
        </InfoCard>

        <InfoCard title="Regulations - forever evolving">
          Whether existing or new, Occupational Health regulations
          should/must/have to evolve. For this to happen, data is required.
          Collective data guides Occupational Health bodies, whether government
          departments, institutes, service providers or even employers, to zoom
          in on areas of concern and to facilitate response. But data captured
          on paper and collecting dust is of very little use.
        </InfoCard>

        <InfoCard title="Employers’ Covid-19 lesson #1">
          Occupational Health used to be a cost center. Employers worldwide
          since realised that Occupational Health provides a framework to
          protect its most valuable assets - its employees. They realised that
          Occupational Health safeguards their existence. The increased adoption
          by employers is why it is crucial that Occupational Health service
          providers must be equipped with the tools to work
        </InfoCard>
      </SimpleGrid>

      <Text
        as="a"
        href="https://heroh.africa"
        fontSize="lg"
        fontWeight="medium"
        textDecoration="underline"
      >
        Go to Heroh
      </Text>
    </Stack>
  )
}

export default Heroh
