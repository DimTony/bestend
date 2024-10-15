import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Play, Pause } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import bgImg from "../assets/images/bgImg.jpg";
import Navbar from "../components/Navbar";
import { IoBedOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { texts } from "../utils/Constants";
import { CalendarIcon } from "@chakra-ui/icons";
import pillow from "../assets/icons/pillow.png";
import offer from "../assets/icons/offer.png";
import wifi from "../assets/icons/wifi.svg";
import booking from "../assets/icons/booking.svg";
import restaurant from "../assets/icons/restaurant.svg";
import beauty from "../assets/icons/beauty.svg";
import support from "../assets/icons/support.svg";
import lounge from "../assets/icons/lounge.svg";
import stock1 from "../assets/images/stock1.jpg";
import stock2 from "../assets/images/stock2.jpg";
import suite from "../assets/images/suite.jpg";
import deluxe from "../assets/images/deluxe.jpg";
import family from "../assets/images/family.jpg";
import resto from "../assets/images/resto.jpg";
import SlidingCarousel from "../components/SlidingCarousel";
import GuestCarousel from "../components/GuestCarousel";
import Footer from "../components/Footer";

const Landing = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index, texts]);

  const handleAvailabilityCheck = (e) => {
    e.preventDefault();
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Box
        bgImage={bgImg}
        w="100vw"
        h="100vh"
        overflowY="auto"
        overflowX="hidden"
        mb="3rem"
      >
        <VStack
          w="100%"
          h="100%"
          spacing={0}
          overflowY="auto"
          overflowX="hidden"
        >
          <Navbar />

          <VStack mt="9rem" spacing={0}>
            <Text
              mb="-9"
              p="1rem"
              textTransform="uppercase"
              color="#fff"
              fontWeight="600"
              letterSpacing="2px"
              fontFamily="Prata"
            >
              ENJOY YOUR WONDERFUL STAY WITH A GREAT LUXURY EXPERIENCE
            </Text>

            <Text
              fontSize="4.5rem"
              fontWeight="700"
              color="#fff"
              textTransform="uppercase"
              letterSpacing="1px"
              transition="opacity 0.5s ease"
            >
              {currentText}
            </Text>
          </VStack>

          <HStack mb="2rem">
            <Button rightIcon={<IoBedOutline />} textTransform="uppercase">
              BOOK A ROOM
            </Button>
            <Button
              variant="outline"
              rightIcon={<FaArrowRight />}
              textTransform="uppercase"
              border="2px solid #fff"
              color="#fff"
              _hover={{ color: "#000", bg: "#fff" }}
            >
              LEARN MORE
            </Button>
          </HStack>

          <HStack position="relative" top="5rem" w="80vw" bg="#000" zIndex="2">
            <form onSubmit={handleAvailabilityCheck}>
              <HStack h="100%" spacing={0} justifyContent="space-between">
                <HStack
                  py="3.5rem"
                  pl="2rem"
                  pr="1rem"
                  h="100%"
                  w="70vw"
                  justifyContent="space-between"
                >
                  <FormControl>
                    <VStack alignItems="flex-start">
                      <FormLabel textTransform="uppercase" color="#fff">
                        CHECK-IN
                      </FormLabel>
                      <InputGroup>
                        <Input
                          color="#fff"
                          type="date"
                          placeholder="Select Date"
                          _placeholder={{ color: "#fff" }}
                        />
                        <InputRightElement pointerEvents="none">
                          <CalendarIcon color="white" />
                        </InputRightElement>
                      </InputGroup>
                    </VStack>
                  </FormControl>
                  <FormControl>
                    <VStack alignItems="flex-start">
                      <FormLabel textTransform="uppercase" color="#fff">
                        CHECK-OUT
                      </FormLabel>
                      <InputGroup>
                        <Input
                          color="#fff"
                          type="date"
                          placeholder="Select Date"
                          _placeholder={{ color: "#fff" }}
                        />
                        <InputRightElement pointerEvents="none">
                          <CalendarIcon color="white" />
                        </InputRightElement>
                      </InputGroup>
                    </VStack>
                  </FormControl>
                  <FormControl>
                    <VStack alignItems="flex-start">
                      <FormLabel textTransform="uppercase" color="#fff">
                        ROOMS
                      </FormLabel>
                      <Select color="#fff">
                        <option value="">STANDARD</option>
                        <option value="">DELUXE</option>
                        <option value="">EXECUTIVE</option>
                        <option value="">SUITE</option>
                      </Select>
                    </VStack>
                  </FormControl>
                  <FormControl>
                    <VStack alignItems="flex-start">
                      <FormLabel textTransform="uppercase" color="#fff">
                        GUESTS
                      </FormLabel>
                      <Select color="#fff" w="max-content">
                        <option
                          style={{ backgroundColor: "#222", color: "#fff" }}
                          value=""
                        >
                          1 Person
                        </option>
                        <option
                          style={{ backgroundColor: "#222", color: "#fff" }}
                          value=""
                        >
                          2 Persons
                        </option>
                        <option
                          style={{ backgroundColor: "#222", color: "#fff" }}
                          value=""
                        >
                          3-5 Persons
                        </option>
                        <option
                          style={{ backgroundColor: "#222", color: "#fff" }}
                          value=""
                        >
                          6-10 Persons
                        </option>
                        <option
                          style={{ backgroundColor: "#222", color: "#fff" }}
                          value=""
                        >
                          10+ Persons
                        </option>
                      </Select>
                    </VStack>
                  </FormControl>
                </HStack>

                <Button
                  w="20%"
                  textTransform="uppercase"
                  h="12rem"
                  borderRadius={0}
                  bg="#C5A880"
                  color="#fff"
                  _hover={{ bg: "#edf2f7", color: "#000" }}
                  type="submit"
                >
                  <VStack fontWeight="700" fontSize="1.3rem">
                    <Text textAlign="center" letterSpacing="2px">
                      CHECK
                    </Text>
                    <Text>AVAILABILITY</Text>
                  </VStack>
                </Button>
              </HStack>
            </form>
          </HStack>

          <VStack pt="10rem" pb="5rem" bg="#fff" w="100%" alignItems="center">
            <HStack w="80vw" gap="3rem" mb="7rem">
              <HStack w="50%">
                <VStack spacing="1rem">
                  <VStack
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"
                    p="1.5rem"
                    bg="#F5F1EA"
                    borderRadius="1rem"
                  >
                    <Image pl="1.5rem" src={pillow} alt="pillow" />
                    <Text
                      mb="0.5rem"
                      fontFamily="Playfair Display"
                      fontSize="1.5rem"
                    >
                      Cozy Room
                    </Text>
                    <Text textAlign="center">
                      Experience comfort and warmth in our cozy room, designed
                      for relaxation with soft bedding, modern amenities, and a
                      peaceful ambiance—perfect for unwinding after a long day.
                    </Text>
                  </VStack>
                  <VStack>
                    <Image
                      borderRadius="1rem"
                      src={stock1}
                      alt="pillow"
                      w="15rem"
                    />
                  </VStack>
                </VStack>
                <VStack>
                  <VStack>
                    <Image
                      src={stock2}
                      borderRadius="1rem"
                      alt="pillow"
                      w="15rem"
                    />
                  </VStack>
                  <VStack>
                    <VStack
                      spacing={0}
                      alignItems="center"
                      justifyContent="center"
                      p="1.5rem"
                      bg="#F5F1EA"
                      borderRadius="1rem"
                    >
                      <Image pl="1.5rem" src={offer} alt="pillow" />
                      <Text
                        mb="0.5rem"
                        fontFamily="Playfair Display"
                        fontSize="1.5rem"
                      >
                        Special Offers
                      </Text>
                      <Text textAlign="center">
                        Discover exclusive deals and limited-time offers! Enjoy
                        discounted rates, complimentary perks, and more—book now
                        and make your stay even more memorable.
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
              </HStack>
              <VStack w="50%" py="3rem" h="100%" alignItems="flex-start">
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  color="#C5A880"
                >
                  ABOUT US
                </Text>
                <Text mb="2rem" fontFamily="Prata" fontSize="2.5rem">
                  An elegant stay in Lagos's central district
                </Text>
                <Text fontWeight="300" mb="3rem">
                  Set on picturesque landscaped environment, our hotel sits at
                  the heart of Nigeria's busiest city - Gbagada, Lagos. We're
                  within 20 minutes of the International Airport and Lagos
                  Island. Enjoy our on-site massage therapists, resto and bar,
                  serene environment, and dedicated staff.
                </Text>

                <Button
                  p="1.5rem"
                  bg="#C5A880"
                  color="#fff"
                  textTransform="uppercase"
                >
                  BOOK YOUR ROOM NOW
                </Button>
              </VStack>
            </HStack>

            <VStack>
              <Text mb="2rem" fontFamily="Prata" fontSize="2.5rem">
                Explore Our Hotel Services
              </Text>

              <HStack gap="2rem">
                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={wifi} alt="wifi" w="5rem" />
                  <Text>Free Wifi</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={booking} alt="wifi" w="5rem" />
                  <Text>Easy Booking</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={restaurant} alt="wifi" w="5rem" />
                  <Text>Restaurant</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={lounge} alt="wifi" w="5rem" />
                  <Text>Lounge & Bar</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={beauty} alt="wifi" w="5rem" />
                  <Text>Beauty & Health</Text>
                </VStack>

                <VStack bg="#f7f7f7" borderRadius="40%" p="1.5rem">
                  <Image src={support} alt="wifi" w="5rem" />
                  <Text>Help & Support</Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <HStack
            w="100%"
            bg="rgba(0, 0, 0, 0.85)"
            backdropBlur="2px"
            justifyContent="center"
            color="#fff"
            py="3rem"
          >
            <HStack w="80vw">
              <VStack alignItems="flex-start" w="80%">
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  color="#c5a880"
                >
                  THE BEST HOTEL FOR <span>"HOTELLING"</span>
                </Text>
                <Text fontFamily="Prata" fontSize="2.5rem">
                  Find the Best Room for Your Next Stay
                </Text>
              </VStack>
              <Button
                p="2rem"
                textTransform="uppercase"
                bg="#c5a880"
                color="#fff"
                _hover={{ bg: "#f7f7f7", color: "#000" }}
              >
                Find Now
              </Button>
            </HStack>
          </HStack>

          <VStack pt="5rem" pb="5rem" bg="#fff" w="100%" alignItems="center">
            <Text fontFamily="Prata" fontSize="2.5rem" mb="2rem">
              Featured Rooms
            </Text>
            <HStack w="80vw" gap="1.5rem">
              <VStack
                bg="#f5f5f5"
                color="#000"
                transition="background 0.5s ease, color 0.5s ease, transform 0.5s ease"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
              >
                <VStack p="3rem 3rem 1rem 3rem">
                  <Text fontFamily="Prata" fontSize="1.3rem">
                    Suite Room
                  </Text>
                  <Text>
                    Indulge in luxury and space with our Suite Room, featuring
                    elegant decor, a separate living area and premium
                    amenities—your perfect retreat for an unforgettable stay.
                  </Text>
                  <Button>BOOK NOW</Button>
                </VStack>
                <Image src={suite} alt="suite" />
              </VStack>
              <VStack
                bg="#f5f5f5"
                color="#000"
                transition="background 0.5s ease, color 0.5s ease, transform 0.5s ease"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
              >
                <Image src={family} alt="suite" />
                <VStack p="3rem 3rem 1rem 3rem">
                  <Text fontFamily="Prata" fontSize="1.3rem">
                    Family Room
                  </Text>
                  <Text>
                    Spacious and family-friendly, our Family Room offers comfort
                    for everyone, with multiple beds, cozy seating, and modern
                    amenities—ideal for a relaxing and enjoyable family getaway.
                  </Text>
                  <Button>BOOK NOW</Button>
                </VStack>
              </VStack>
              <VStack
                bg="#f5f5f5"
                color="#000"
                transition="background 0.5s ease, color 0.5s ease, transform 0.5s ease"
                _hover={{
                  bg: "#000",
                  color: "#fff",
                }}
              >
                <VStack p="3rem 3rem 1rem 3rem">
                  <Text fontFamily="Prata" fontSize="1.3rem">
                    Deluxe Room
                  </Text>
                  <Text>
                    Elevate your stay in our Deluxe Room, offering refined
                    comfort, stylish decor, premium amenities, and extra
                    space—perfect for guests seeking a touch of luxury.
                  </Text>
                  <Button>BOOK NOW</Button>
                </VStack>
                <Image src={deluxe} alt="suite" />
              </VStack>
            </HStack>
          </VStack>

          <Box w="100%" h="70vh" position="relative">
            <video
              ref={videoRef}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src="https://res.cloudinary.com/dvvgaf1l9/video/upload/v1729015027/bestend/tour_sapbga.mp4"
            >
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <VStack
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                justify="center"
                align="center"
                bg="rgba(0, 0, 0, 0.5)"
                h="100%"
              >
                <Text
                  color="white"
                  fontSize="0.5rem"
                  letterSpacing="3px"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  WATCH OUR LUXURIOUS HOTEL
                </Text>
                <Text fontFamily="Prata" color="#fff" fontSize="2rem">
                  Take A Tour
                </Text>
              </VStack>
            )}

            <IconButton
              icon={isPlaying ? <Pause size={24} /> : <Play size={24} />}
              onClick={togglePlay}
              position="absolute"
              bottom="25%"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="full"
              aria-label={isPlaying ? "Pause" : "Play"}
              zIndex={2}
              opacity={isPlaying ? 0.5 : 1}
            />
          </Box>

          <VStack pt="5rem" pb="5rem" bg="#fff" w="100%" alignItems="center">
            <Text fontFamily="Prata" fontSize="2.5rem" mb="2rem">
              Resto & Bar
            </Text>
            <HStack>
              <Image
                src={resto}
                alt="resto"
                w="730px"
                h="300px"
                objectFit="cover"
              />
              <Box w="500px">
                <SlidingCarousel />
              </Box>
            </HStack>
          </VStack>

          <VStack pt="5rem" pb="3rem" bg="#fff" w="100%" alignItems="center">
            <Text fontFamily="Prata" fontSize="2.5rem" mb="2rem">
              Happy Guests
            </Text>

            <GuestCarousel />
          </VStack>

          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Landing;
