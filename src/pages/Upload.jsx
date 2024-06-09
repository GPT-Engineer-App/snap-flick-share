import { Box, Button, Container, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the upload logic here
    console.log("Image:", image);
    console.log("Description:", description);
  };

  return (
    <Container maxW="container.md" mt={4}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        <Textarea
          placeholder="Add a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" colorScheme="blue">
          Upload
        </Button>
      </VStack>
    </Container>
  );
};

export default Upload;