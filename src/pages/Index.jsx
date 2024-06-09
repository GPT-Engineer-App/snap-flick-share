import { Container, VStack, Box, Image, Text, Heading, HStack, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const posts = [
  {
    id: 1,
    username: "john_doe",
    imageUrl: "https://via.placeholder.com/600",
    description: "A beautiful sunrise!",
    likes: 120,
    comments: 45,
  },
  {
    id: 2,
    username: "jane_smith",
    imageUrl: "https://via.placeholder.com/600",
    description: "Enjoying the beach.",
    likes: 98,
    comments: 30,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" mb={6}>
          Photo Sharing Platform
        </Heading>
        {posts.map((post) => (
          <Box key={post.id} w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={post.imageUrl} alt={post.description} />
            <Box p={6}>
              <HStack justifyContent="space-between">
                <Text fontWeight="bold">{post.username}</Text>
                <HStack spacing={4}>
                  <IconButton aria-label="Like" icon={<FaHeart />} />
                  <Text>{post.likes}</Text>
                  <IconButton aria-label="Comment" icon={<FaComment />} />
                  <Text>{post.comments}</Text>
                </HStack>
              </HStack>
              <Text mt={4}>{post.description}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;