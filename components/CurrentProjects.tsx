import {
  Image,
  Icon,
  Text,
  Stack,
  HStack,
  SimpleGrid,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"
import InfoCard from "./InfoCard"
import { CheckCircleIcon } from "@chakra-ui/icons"

const HerohCard = ({ title, children }) => (
  <InfoCard title={title} children={children} productName="Heroh" />
)
const SquareCard = ({ title, children }) => (
  <InfoCard title={title} children={children} productName="Square" />
)

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
        >
          <Stack justify="flex-start" spacing={6}>
            <HerohCard title="Your Electronic Health Record">
              Initially we focussed all our energy on Occupational Health:
              Providing a toolset for Occupational Health practitioners - not
              another practice management solution, but a suite of tools to
              address your needs. And your clients’ needs. So we originally set
              out provide an enterprise level Occupational Health suite of tools
              that any practice or clinic can afford. But as we went along, we
              learnt so much more.
            </HerohCard>

            <HerohCard title="A captive market in most developing countries">
              There are many countries where Occupational Health is either
              poorly regulated or not regulated at all. Poor or no regulation
              implies limited Occupational Health services. Limited Occupational
              Health services implies a captive market, or even worse, the
              promotion of unethical behavior by employers. How address this
              quickly? Heroh provides you as a general practitioner in such
              territories with the tools and Occupational Health framework make
              a difference.
            </HerohCard>

            <HerohCard title="Regulations - forever evolving">
              Whether existing or new, Occupational Health regulations
              should/must/have evolve. For this happen, data is required.
              Collective data guides Occupational Health bodies, whether
              government departments, institutes, service providers or even
              employers, zoom in on areas of concern and facilitate response.
              But data captured on paper and collecting dust is of very little
              use.
            </HerohCard>

            <HerohCard title="Employers’ Covid-19 lesson #1">
              Occupational Health used be a cost center. Employers worldwide
              since realised that Occupational Health provides a framework to
              protect its most valuable assets - its employees. They realised
              that Occupational Health safeguards their existence. The increased
              adoption by employers is why it is crucial that Occupational
              Health service providers must be equipped with the tools work
            </HerohCard>
          </Stack>
          {/* <Divider /> */}
          <Stack>
            <Text
              fontSize="sm"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing="wide"
              fontWeight="medium"
              color="gray.700"
            >
              Mission
            </Text>

            <List mt={4} spacing={2} fontSize="sm">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Increase the productive lives of all fellow Africans
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Facilitate economic growth in Africa
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Identify occupational disease through big data
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Enable response by governments, the AU, WHO, ILO and World bank
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Enforce ethical behaviour by employers
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Effect regulations through active participation by governments
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Provide access electronic health records and certificates of
                fitness, issued by a certified partner, anywhere in Africa
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Create a vehicle enable Occupational Health in the informal
                (mining-) sector
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Last, but not least, create a framework address wrongs of the
                past (retired mineworkers; refer silicosis & TB)
              </ListItem>
            </List>
          </Stack>
        </Product>
        <Product
          href="https://square.health"
          img="/icon.png"
          title="Square Health"
          description="A fresh approach collaborative healthcare, starting with the individual."
        >
          <Stack justify="flex-start" spacing={6}>
            <SquareCard title="eHealth">
              Covid-19 emphasised the challenges brought forward by a fragmented
              healthcare industry. The bottom line is individuals’ health data
              is spread amongst a myriad of silos - even paper. In addition,
              there exists no interoperability between these solutions, while
              each individual or patient has a right access their health data,
              which is simply not possible in today’s industry. But it can be.
            </SquareCard>

            <SquareCard title="Participative healthcare">
              Participative healthcare defines the shift from a paternalistic
              industry towards a more inclusive and participative approach which
              includes shared decision making. This participative approach does
              not only involve the healthcare provider or doctor or a multiple
              thereof, but also the patient. However, where applicable, a
              designated proxy should be empowered with capability take
              responsibility for community based care on behalf of its members.
            </SquareCard>

            <SquareCard title="Shifting the doctors’ focus">
              Participative healthcare empowers the individual take
              co-responsibility for triage. This in effect reduces the load on
              the healthcare industry and allows the doctors or healthcare
              workers to only focus on the cases requiring definitive prognosis
              or care. Finally, participative healthcare shifts the doctor’s
              focus from reactively treating ill patients proactively managing
              the health of individuals.
            </SquareCard>

            {/* <InfoCard title="Proactive health management">
          A diabetic performing daily self-assessments, with the
          collective data over time identifying a trend which triggers a flag
          with the doctor associated the health record? This would thus
          result in the doctor proactively managing the case, example calling
          the patient discuss concerns or requesting the patient visit the
          practice for a physical examination. The doctor is now proactively
          manage the patient’s health condition instead of reactively treating a
          sick person after the fact.
        </InfoCard> */}

            <SquareCard title="Extending reach vulnerable communities">
              A designated community carer performing participative care
              peer-assessments should be alerted issue TB or other medication,
              while being reminded what peer-assessments perform, for whom, when
              and in the case of medication, what administer.
            </SquareCard>
          </Stack>
          {/* <Divider /> */}
          <Stack pt={10}>
            <Text
              fontSize="sm"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing="wide"
              fontWeight="medium"
              color="gray.700"
            >
              Mission
            </Text>

            <List mt={4} spacing={2} fontSize="sm">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Address fragmentation in the healthcare industry
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Broaden triage through participative healthcare
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Shift medical professionals’ focus to proactive management
                instead of reactive treatment
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Reduce workload in the healthcare industry
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Extend healthcare reach to vulnerable communities
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Enable interoperability amongst solution providers
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Take the 1st steps to a true digital health passport
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Extend capability to address Occupational Health in the informal
                (mining-) sector
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.400" />
                Last, but not least, to extend our vehicle to address wrongs of
                the past (retired mineworkers; refer silicosis & TB)
              </ListItem>
            </List>
          </Stack>
        </Product>
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

const Product = ({ href, title, description, img, children }) => (
  <Stack
    as="a"
    href={href}
    cursor="pointer"
    transition="box-shadow 0.1s ease-in-out"
    _hover={{
      boxShadow: "lg",
    }}
    px={5}
    py={5}
    boxShadow="md"
    justify="flex-start"
    borderRadius="lg"
    w="full"
    spacing={6}
  >
    <HStack height="4em">
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
    {/* <Divider /> */}
    {children}
  </Stack>
)
