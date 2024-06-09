import { Box, Image, Text, VStack, HStack, Button, Input } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const Post = ({ username, description, imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
      <Image src={imageUrl} alt={description} />
      <Box p={4}>
        <Text fontWeight="bold">{username}</Text>
        <Text mb={2}>{description}</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaHeart />} colorScheme="red" variant="outline">
            Like
          </Button>
          <Button leftIcon={<FaComment />} colorScheme="blue" variant="outline">
            Comment
          </Button>
        </HStack>
        <VStack mt={4} spacing={2}>
          <Input placeholder="Add a comment..." />
          <Button colorScheme="blue">Post</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Post;