import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/bestend-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack
        w="100%"
        px="2rem"
        py="1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={logo} alt="logo" w="10rem" h="auto" />

        <HStack w="50vw" justifyContent="space-between" mr="4rem">
          <Link to="/">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              HOME
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              ABOUT
            </Button>
          </Link>
          <Link to="/rooms">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              ROOMS
            </Button>
          </Link>
          <Link to="/resto-and-bar">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              RESTO & BAR
            </Button>
          </Link>
          <Link to="/blog">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              BLOG
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="unstyled"
              color="#fff"
              fontSize="1.2rem"
              fontWeight="600"
              _hover={{ transform: "scale(1.1)" }}
            >
              CONTACT
            </Button>
          </Link>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
