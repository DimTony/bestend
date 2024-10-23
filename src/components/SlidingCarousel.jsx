import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import jollof from "../assets/images/jollof-rice-with-grilled-chicken.png";
import pounded from "../assets/images/pounded-yam-and-egusi.png";
import pepper from "../assets/images/pepper-soup-goat-or-fish.png";
import fried from "../assets/images/yam-plantain-eggs.png";
import efo from "../assets/images/efo-riro-vegetable-soup-with-beef.png";
import amala from "../assets/images/amala-with-gbegiri-and-ewedu-soup.png";
import ofada from "../assets/images/ofada-rice-with-ayamase-pepper-sauce.png";
import palm from "../assets/images/fresh-palm-wine.png";
import chapman from "../assets/images/chapman-classic-nigerian-cocktail.png";
import akara from "../assets/images/akara-bean-fritters-with-pap.png";
import grilled from "../assets/images/grilled-steak-and-herb.png";
import caesar from "../assets/images/classic-caesar-salad.png";
import seafood from "../assets/images/fresh-seafood-platter.png";
import pizza from "../assets/images/wood-fired-margherita-pizza.png";
import burger from "../assets/images/gourmet-cheeseburger-with-truffle-fries.png";
import spag from "../assets/images/spaghetti-carbonara.png";
import cocktail from "../assets/images/signature-cocktails.png";
import juice from "../assets/images/freshly-squeezed-juices.png";
import beer from "../assets/images/craft-beer-selection.png";
import choc from "../assets/images/decadent-chocolate-lava-cake.png";

const carouselData = [
  {
    id: 1,
    title: "Jollof Rice with Grilled Chicken",
    imageUrl: jollof,
  },
  {
    id: 2,
    title: "Pounded Yam with Egusi Soup",
    imageUrl: pounded,
  },
  {
    id: 3,
    title: "Pepper Soup (Goat or Fish)",
    imageUrl: pepper,
  },
  {
    id: 4,
    title: "Fried Plantain (Dodo) or Yam with Eggs",
    imageUrl: fried,
  },
  {
    id: 5,
    title: "Efo Riro (Vegetable Soup) with Beef",
    imageUrl: efo,
  },
  {
    id: 6,
    title: "Amala with Gbegiri and Ewedu Soup",
    imageUrl: amala,
  },
  {
    id: 7,
    title: "Ofada Rice with Ayamase (Pepper Sauce)",
    imageUrl: ofada,
  },
  {
    id: 8,
    title: "Fresh Palm Wine",
    imageUrl: palm,
  },
  {
    id: 9,
    title: "Chapman (Classic Nigerian Cocktail)",
    imageUrl: chapman,
  },
  {
    id: 10,
    title: "Akara (Bean Fritters) with Pap",
    imageUrl: akara,
  },
  {
    id: 11,
    title: "Grilled Steak with Herb Butter",
    imageUrl: grilled,
  },
  {
    id: 12,
    title: "Classic Caesar Salad",
    imageUrl: caesar,
  },
  {
    id: 13,
    title: "Fresh Seafood Platter",
    imageUrl: seafood,
  },
  {
    id: 14,
    title: "Wood-Fired Margherita Pizza",
    imageUrl: pizza,
  },
  {
    id: 15,
    title: "Gourmet Cheeseburger with Truffle Fries",
    imageUrl: burger,
  },
  {
    id: 16,
    title: "Spaghetti Carbonara",
    imageUrl: spag,
  },
  {
    id: 17,
    title: "Signature Cocktails (Mojito, Martini, etc.)",
    imageUrl: cocktail,
  },
  {
    id: 18,
    title: "Freshly Squeezed Juices",
    imageUrl: juice,
  },
  {
    id: 19,
    title: "Craft Beer Selection",
    imageUrl: beer,
  },
  {
    id: 20,
    title: "Decadent Chocolate Lava Cake",
    imageUrl: choc,
  },
];

const SlidingCarousel = () => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 300;
  const containerWidth = 500;
  const totalCards = carouselData.length;
  const totalWidth = cardWidth * totalCards;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        // Move to the left by 1px per interval
        const newOffset = prevOffset - 2;
        // Reset to 0 when all items have scrolled past (with no jump effect)
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <Box width={`${containerWidth}px`} overflow="hidden" height="300px">
      <Flex
        position="relative"
        left={`${offset}px`}
        width={`${totalWidth * 2}px`}
        transition="left 0.5s ease"
        height="100%"
      >
        {/* Render the carousel items twice for infinite looping */}
        {carouselData.concat(carouselData).map((card, index) => (
          <Box
            key={index}
            width={`${cardWidth}px`}
            height="150px"
            bg="#F8F8F8"
            mr="4"
            borderRadius="md"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            position="relative"
            top={index % 2 === 0 ? "0" : "150px"}
            px="1rem"
            gap="1rem"
          >
            <Image src={card.imageUrl} alt={card.title} w="6rem" h="auto" />
            <Text fontSize="1rem" fontFamily="Prata">
              {card.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default SlidingCarousel;
