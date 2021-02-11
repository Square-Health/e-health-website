import { HStack, Flex, Link, Box } from "@chakra-ui/react"
import NextLink from "next/link"
export const Nav = () => {
  return (
    <HStack as="nav" align="center" justify="space-between" w="full" py={8}>
      <Flex align="center" flexGrow={[1, 1, 0]} flexShrink={0}>
        <NextLink href="/" passHref>
          <Link>
            <Box as="img" h={[10, 10, 8]} w="auto" src="/logo.png" />
          </Link>
        </NextLink>
      </Flex>
      {/* <HStack display={["none", "block", "block"]}>
        <NavLink href="/covid">Menu</NavLink>
        <NavLink href="/getting-started">Items</NavLink>
        <NavLink
          href="/hello"
          // isExternal
          // href={`${process.env.NEXT_PUBLIC_ONE_URI}/signup`}
          // purple -> indigo
        >
          Here
        </NavLink>
      </HStack> */}
    </HStack>
  )
}
// const NavLink = ({ href, children }) => (
//   <NextLink href={href} passHref>
//     <Link
//       px={3}
//       py={2}
//       borderRadius="lg"
//       fontWeight="medium"
//       color="gray.700"
//       textDecor="none"
//       _hover={{
//         textDecor: "none",
//         bg: "gray.50",
//       }}
//     >
//       {children}
//     </Link>
//   </NextLink>
// )
