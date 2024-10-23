import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/bestend-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        w="100%"
        px="2rem"
        py="1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={logo}
          alt="logo"
          w={{ md: "10rem", base: "5rem" }}
          h="auto"
        />

        <HStack
          display={{ md: "flex", base: "none" }}
          w="50vw"
          justifyContent="space-between"
          mr="4rem"
          h="100%"
          px="1.5rem"
          borderRadius="8px"
          bg="rgba(197, 168, 128, 0.2)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(5px)"
          border="1px solid rgba(255, 255, 255, 0.3)"
        >
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

        <IconButton
          onClick={onOpen}
          bg="white"
          aria-label="drawer menu"
          icon={<HamburgerIcon />}
          display={{ md: "none", base: "flex" }}
        />

        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack
                alignItems="flex-start"
                w="100%"
                pt="2rem"
                h="100%"
                spacing={5}
              >
                <Button
                  alignItems="center"
                  justifyContent="flex-start"
                  p={0}
                  w="100%"
                  variant="ghost"
                  fontSize="1.4rem"
                  fontFamily="Prata"
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button
                  alignItems="center"
                  justifyContent="flex-start"
                  p={0}
                  w="100%"
                  variant="ghost"
                  fontSize="1.4rem"
                  fontFamily="Prata"
                >
                  <Link to="/about">About</Link>
                </Button>
                <Button
                  alignItems="center"
                  justifyContent="flex-start"
                  p={0}
                  w="100%"
                  variant="ghost"
                  fontSize="1.4rem"
                  fontFamily="Prata"
                >
                  <Link to="/rooms">Rooms</Link>
                </Button>
                <Button
                  alignItems="center"
                  justifyContent="flex-start"
                  p={0}
                  w="100%"
                  variant="ghost"
                  fontSize="1.4rem"
                  fontFamily="Prata"
                >
                  <Link to="/resto-and-bar">Resto & Bar</Link>
                </Button>
                <Button
                  alignItems="center"
                  justifyContent="flex-start"
                  p={0}
                  w="100%"
                  variant="ghost"
                  fontSize="1.4rem"
                  fontFamily="Prata"
                >
                  <Link to="/blog">Blog</Link>
                </Button>
                <Button
                  alignItems="center"
                  justifyContent="flex-start"
                  p={0}
                  w="100%"
                  variant="ghost"
                  fontSize="1.4rem"
                  fontFamily="Prata"
                >
                  <Link to="/contact">Contact</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};

export default Navbar;
