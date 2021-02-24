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
    <Stack pt={20} spacing={[4, 16]} {...rest}>
      <HStack as="a" href="https://square.health" cursor="pointer" spacing={5}>
        <Image width={["60px", "50px"]} src="/icon.png" />
        <Heading as="h3" fontSize="4xl">
          Square Health
        </Heading>
      </HStack>

      <SimpleGrid spacingY={[4, 3, 10]} spacingX={10} columns={[1, 1, 2]}>
        <InfoCard title="eHealth">
          Covid-19 emphasised the challenges brought forward by a fragmented
          healthcare industry. The bottom line is individuals’ health data is
          spread amongst a myriad of silos - even paper. In addition, there
          exists no interoperability between these solutions, while each
          individual or patient has a right to access their health data, which
          is simply not possible in today’s industry. But it can be.
        </InfoCard>

        <InfoCard title="Participative healthcare">
          Participative healthcare defines the shift from a paternalistic
          industry towards a more inclusive and participative approach which
          includes shared decision making. This participative approach does not
          only involve the healthcare provider or doctor or a multiple thereof,
          but also the patient. However, where applicable, a designated proxy
          should be empowered with capability to take responsibility for
          community based care on behalf of its members.
        </InfoCard>

        <InfoCard title="Shifting the doctors’ focus">
          Participative healthcare empowers the individual to take
          co-responsibility for triage. This in effect reduces the load on the
          healthcare industry and allows the doctors or healthcare workers to
          only focus on the cases requiring definitive prognosis or care.
          Finally, participative healthcare shifts the doctor’s focus from
          reactively treating ill patients to proactively managing the health of
          individuals.
        </InfoCard>

        {/* <InfoCard title="Proactive health management">
          A diabetic performing daily self-assessments, with the
          collective data over time identifying a trend which triggers a flag
          with the doctor associated to the health record? This would thus
          result in the doctor proactively managing the case, example calling
          the patient to discuss concerns or requesting the patient to visit the
          practice for a physical examination. The doctor is now proactively
          manage the patient’s health condition instead of reactively treating a
          sick person after the fact.
        </InfoCard> */}

        <InfoCard title="Extending reach to vulnerable communities">
          A designated community carer performing participative care
          peer-assessments should be alerted to issue TB or other medication,
          while being reminded what peer-assessments to perform, for whom, when
          and in the case of medication, what to administer.
        </InfoCard>
      </SimpleGrid>

      <Text
        as="a"
        href="https://square.health"
        fontSize="lg"
        fontWeight="medium"
        textDecoration="underline"
      >
        Go to Square Health
      </Text>
    </Stack>
  )
}

export default Heroh
