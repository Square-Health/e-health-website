import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"
export const SimpleLayout = ({ children }) => (
  <Flex maxW="5xl" px={[4, 10]} mb={32} mx="auto" direction="column">
    {children}
  </Flex>
)
export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  // #242527
  const bg = useColorModeValue(["white", "#F9F9FA"], "gray.900")
  const paper = useColorModeValue("white", "gray.900")
  const borderColor = useColorModeValue("none", "gray.600")
  return (
    <Flex
      sx={{ bg }}
      minW="100vw"
      minH="100vh"
      direction="column"
      px={[0, 10, 0]}
    >
      <Flex py={3} px={[0, 0, 5]} w="full" justify="flex-end">
        <IconButton
          variant="ghost"
          aria-label="toggle color mode"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
        />
      </Flex>
      <Flex
        borderWidth={["0px", "1px"]}
        sx={{ borderColor }}
        overflow="hidden"
        // bg="#F9F9FA"
        bg={paper}
        my={[0, 6, 10]}
        direction="column"
        w={["full", "full", "38rem"]}
        // pb={8}
        // px={[4, 12, 20]}
        // px={10}
        // px={[10, 20]}
        borderRadius={["none", "lg", "lg"]}
        boxShadow={["none", "sm"]}
        mx="auto"
      >
        {children}
      </Flex>
    </Flex>
  )
}
