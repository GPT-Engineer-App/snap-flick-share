import { Box, Container, Grid, Image, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  const user = {
    username: "user1",
    profilePicture: "https://via.placeholder.com/150",
    photos: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
  };

  return (
    <Container maxW="container.md" mt={4}>
      <VStack spacing={4}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={user.profilePicture}
          alt={user.username}
        />
        <Text fontSize="2xl" fontWeight="bold">
          {user.username}
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {user.photos.map((photo, index) => (
            <Image key={index} src={photo} alt={`photo-${index}`} />
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Profile;