import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import bgImg from "../assets/images/contact_bg.jpg";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
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
              Home &gt; Contact &gt;
            </Text>
            <Text
              color="white"
              fontSize="2rem"
              fontFamily="Prata"
              fontWeight="600"
            >
              Contact
            </Text>
          </VStack>

          <Stack
            bg="#f8f8f8"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction={{ md: "row", base: "column" }}
              py="5rem"
              alignItems="flex-start"
              w="90%"
            >
              <VStack bg="#ffffff" p="2rem" alignItems="flex-start" w="100%">
                <Text fontWeight="700" fontFamily="Prata" fontSize="1.3rem">
                  Contact Us
                </Text>
                <Text mb="1rem">
                  We're open for any suggestions or just to have a chat
                </Text>
                <HStack
                  alignItems="flex-start"
                  mb="1rem"
                  justifyContent="space-between"
                  w="100%"
                >
                  <VStack w="30%" alignItems="flex-start">
                    <Text
                      fontSize=".8rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Address:
                    </Text>
                    <Text fontSize=".8rem">
                      Atunrase Estate, 4 Emeka Osuorji Close, off Nze Njoku
                      Street, Gbagada, Lagos 100001, Lagos
                    </Text>
                  </VStack>

                  <VStack w="30%" alignItems="flex-start">
                    <Text fontSize=".8rem" fontWeight="600">
                      EMAIL:
                    </Text>

                    <Box w="100%">
                      <Link w="100%" to="mailto:contactus@bestendhotel.com">
                        <Text w="100%" fontSize=".8rem">
                          contactus@bestendhotel.com
                        </Text>
                      </Link>
                    </Box>
                  </VStack>

                  <VStack w="30%" alignItems="flex-start">
                    <Text fontSize=".8rem" fontWeight="600">
                      PHONE:
                    </Text>
                    <Text w="100%" fontSize=".8rem">
                      +234 808 808 8080
                    </Text>
                  </VStack>
                </HStack>

                <form style={{ width: "100%", marginBottom: "2rem" }}>
                  <VStack alignItems="flex-start">
                    <FormControl>
                      <Input
                        border="none"
                        borderBottom="1px solid #000"
                        type="text"
                        placeholder="Name"
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        border="none"
                        borderBottom="1px solid #000"
                        type="text"
                        placeholder="Email"
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        border="none"
                        borderBottom="1px solid #000"
                        type="text"
                        placeholder="Subject"
                      />
                    </FormControl>
                    <FormControl>
                      <Textarea
                        border="none"
                        borderBottom="1px solid #000"
                        placeholder="Create a message here"
                      />
                    </FormControl>
                    <Button
                      bg="#C5A880"
                      color="#fff"
                      _hover={{ bg: "#edf2f7", color: "#000" }}
                      type="submit"
                      textTransform="uppercase"
                      borderRadius={0}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>

                <Text>Follow us here</Text>
                <HStack>
                  <Link to="https://www.x.com/bestend">
                    <Button
                      display="flex"
                      bg="transparent"
                      borderRadius="4px"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      <FaXTwitter fontSize="1.3rem" />
                    </Button>
                  </Link>

                  <Link to="https://www.facebook.com/bestend">
                    <Button
                      display="flex"
                      bg="transparent"
                      borderRadius="4px"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      <FaFacebookF fontSize="1.3rem" />
                    </Button>
                  </Link>

                  <Link to="https://www.instagram.com/bestend">
                    <Button
                      display="flex"
                      bg="transparent"
                      borderRadius="4px"
                      alignItems="center"
                      justifyContent="center"
                      p={0}
                    >
                      <FaInstagramSquare fontSize="1.3rem" />
                    </Button>
                  </Link>
                </HStack>
              </VStack>
              <Map />
            </Stack>
          </Stack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Contact;
