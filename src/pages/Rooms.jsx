import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import bgImg from "../assets/images/rooms_bg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rooms = () => {
  return (
    <>
      <Box
        bgImage={bgImg}
        w="100vw"
        h="100vh"
        overflowY="auto"
        overflowX="hidden"
        mb="3rem"
        bgSize="cover"
      >
        <VStack
          w="100%"
          h="100%"
          spacing={0}
          overflowY="auto"
          overflowX="hidden"
        >
          <Navbar />

          <VStack py="10rem">
            <Text color="white" fontSize="1rem" fontWeight="600">
              Home &gt; Rooms &gt;
            </Text>
            <Text
              color="white"
              fontSize="2rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              Rooms
            </Text>
          </VStack>

          <VStack w="100%" bg="#fff" py="5rem">
            <Text fontSize="4vw" fontWeight="700" fontFamily="Prata">
              This Page Is Currently Under Construction!
            </Text>
          </VStack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Rooms;
