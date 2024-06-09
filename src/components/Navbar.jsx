import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          PhotoShare
        </Text>
        <Spacer />
        <Flex>
          <Link href="/" color="white" mx={2}>
            Home
          </Link>
          <Link href="/profile" color="white" mx={2}>
            Profile
          </Link>
          <Link href="/upload" color="white" mx={2}>
            Upload
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;