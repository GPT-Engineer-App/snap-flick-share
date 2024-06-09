import { Container, VStack } from "@chakra-ui/react";
import Post from "../components/Post";

const Home = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      description: "Beautiful sunset!",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      id: 2,
      username: "user2",
      description: "Lovely beach",
      imageUrl: "https://via.placeholder.com/600",
    },
  ];

  return (
    <Container maxW="container.md" mt={4}>
      <VStack spacing={4}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </VStack>
    </Container>
  );
};

export default Home;