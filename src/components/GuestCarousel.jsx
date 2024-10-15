import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import jollof from "../assets/images/jollof-rice-with-grilled-chicken.png";
import pounded from "../assets/images/pexels-george-dolgikh-551816-1310522.jpg";
import pepper from "../assets/images/pepper-soup-goat-or-fish.png";
import fried from "../assets/images/yam-plantain-eggs.png";
import efo from "../assets/images/efo-riro-vegetable-soup-with-beef.png";
import amala from "../assets/images/R.jpg";
import ofada from "../assets/images/ofada-rice-with-ayamase-pepper-sauce.png";
import palm from "../assets/images/fresh-palm-wine.png";
import chapman from "../assets/images/chapman-classic-nigerian-cocktail.png";
import akara from "../assets/images/akara-bean-fritters-with-pap.png";
import grilled from "../assets/images/grilled-steak-and-herb.png";
import caesar from "../assets/images/influencer-12958.jpeg";
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
    name: "Ademola Johnson",
    review:
      "Bestend Hotel offers an unforgettable experience. The attention to detail and customer service were beyond impressive!",
    imageUrl: jollof,
  },
  {
    id: 2,
    name: "Sophia Martinez",
    review:
      "A wonderful stay! The rooms are luxurious, and the food was out of this world. I’ll definitely come back.",
    imageUrl: pounded,
  },
  {
    id: 3,
    name: "Chidera Nwosu",
    review:
      "The perfect place to relax! Bestend Hotel’s amenities and staff are truly world-class. I couldn’t ask for more.",
    imageUrl: pepper,
  },
  {
    id: 4,
    name: "Hans Müller",
    review:
      "Bestend exceeded my expectations. The staff was friendly, and the view from my room was simply breathtaking.",
    imageUrl: fried,
  },
  {
    id: 5,
    name: "Aisha Ibrahim",
    review:
      "I’ve stayed in many hotels, but Bestend Hotel is on another level. Everything was perfect!",
    imageUrl: efo,
  },
  {
    id: 6,
    name: "Emily Wilson",
    review:
      "Absolutely stunning hotel. The decor, service, and dining experience were beyond exceptional. A hidden gem!",
    imageUrl: amala,
  },
  {
    id: 7,
    name: "Tunde Bakare",
    review:
      "Bestend Hotel is the definition of luxury. From the spacious rooms to the exquisite meals, everything was perfect.",
    imageUrl: ofada,
  },
  {
    id: 8,
    name: "Chen Wei",
    review:
      "The level of service and attention to detail at Bestend was exceptional. A truly memorable stay.",
    imageUrl: palm,
  },
  {
    id: 9,
    name: "Amaka Eze",
    review:
      "I can’t stop talking about Bestend Hotel. The food was phenomenal, and the service was second to none.",
    imageUrl: chapman,
  },
  {
    id: 10,
    name: "Lucas Oliveira",
    review:
      "One of the best hotels I’ve stayed in. The staff at Bestend made sure everything was top-notch during my visit.",
    imageUrl: akara,
  },
  {
    id: 11,
    name: "Ngozi Okeke",
    review:
      "Bestend Hotel truly understands what luxury means. Every detail was carefully planned for a perfect stay.",
    imageUrl: grilled,
  },
  {
    id: 12,
    name: "Marie Dupont",
    review:
      "I loved my stay at Bestend! The food, ambiance, and service were all fantastic. Definitely worth the trip.",
    imageUrl: caesar,
  },
  {
    id: 13,
    name: "Olumide Adeyemi",
    review:
      "Bestend Hotel is now my favorite hotel. The staff went above and beyond to make me feel at home.",
    imageUrl: seafood,
  },
  {
    id: 14,
    name: "Isabella Rossi",
    review:
      "Bestend Hotel is a slice of heaven. The attention to detail and overall experience were absolutely incredible.",
    imageUrl: pizza,
  },
  {
    id: 15,
    name: "Fatima Bello",
    review:
      "My experience at Bestend was flawless. I can’t wait to return and experience more of their exceptional hospitality.",
    imageUrl: burger,
  },
  {
    id: 16,
    name: "David Kim",
    review:
      "Staying at Bestend was an unforgettable experience. The hotel has set a new standard for luxury stays.",
    imageUrl: spag,
  },
  {
    id: 17,
    name: "Bukola Adewale",
    review:
      "Bestend Hotel is simply the best. The food, the rooms, the service – everything was beyond expectations.",
    imageUrl: cocktail,
  },
  {
    id: 18,
    name: "Yuki Nakamura",
    review:
      "From the moment I stepped in, Bestend felt like home. The service was personalized and outstanding.",
    imageUrl: juice,
  },
  {
    id: 19,
    name: "Ahmed Khaled",
    review:
      "A truly world-class experience. Bestend Hotel provided everything I needed for a luxurious and relaxing stay.",
    imageUrl: beer,
  },
  {
    id: 20,
    name: "Funke Adeola",
    review:
      "Bestend is truly in a league of its own. The combination of luxury, comfort, and service is unbeatable.",
    imageUrl: choc,
  },
];

const GuestCarousel = () => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 350;
  const containerWidth = 500;
  const totalCards = carouselData.length;
  const totalWidth = cardWidth * totalCards;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        // Move to the left by 2px per interval
        const newOffset = prevOffset - 50;
        // Reset to 0 when all items have scrolled past
        return newOffset <= -totalWidth ? 0 : newOffset;
      });
    }, 16); // Run at approximately 60fps for smoother animation

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <Box width="98%" overflow="hidden" height="fit-content">
      <Flex
        position="relative"
        left={`${offset}px`}
        width={`${totalWidth * 2}px`}
        transition="none" // Remove transition for smoother continuous scrolling
        height="100%"
      >
        {/* Render the carousel items twice for infinite looping */}
        {carouselData.concat(carouselData).map((card, index) => (
          <Box
            key={index}
            width={`${cardWidth}px`}
            height="180px"
            bg="#F8F8F8"
            mr="4"
            borderRadius="md"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="center"
            boxShadow="md"
            position="relative"
            p="1rem"
            gap="1rem"
          >
            {/* <Image
              src={card.imageUrl}
              alt={card.name}
              w="5rem"
              h="5rem"
              borderRadius="50%"
            /> */}
            <Box w="20%">
              <FaCircleUser
                size="3rem"
                color={`hsl(${index * 36}, 70%, 80%)`}
              />
            </Box>
            <VStack alignItems="flex-start">
              <Text fontSize="1rem" fontFamily="Prata" fontWeight="600">
                {card.name}
              </Text>
              <Text>{card.review}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default GuestCarousel;
