import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section5 = () => {
  return (
    <Flex
      direction={"column"}
      p={{
        base:"10px",
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "80px",
      }}
      gap={10}
    >
      <Flex>
        <Text
          fontSize={{
            sm: "3xl",
            md: "3xl",
            lg: "4xl",
            xl: "4xl",
          }}
          fontWeight={"semibold"}
        >
          Explore Our Courses
        </Text>
      </Flex>
      <Flex>
        <Grid
          w={"100%"}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{
            base:"5",
            sm: "3",
            md: "4",
            lg: "5",
            xl: "6",
          }}
        >
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                width="120%"
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Coures Archives
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                4 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit={"fill"}
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Digital Marketing Mastery Program
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                2 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Robotics
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                1 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Digitial Marketing Essentials:
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                Internship Program
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
              Digital Marketing Specialist Certification
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                Al Ameen Edathala
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
              Certified Digital Marketing Specialist Program
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                Adi Sankara - May 2023
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
              Fundamentals of Digital Marketing
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                1 Course
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
              Digital Marketing Certificate Program 
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                BBA 2022 Batch
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
              Digital Marketing Certificate Program
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                BBA 2023 Batch
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
              Artificial Intellignce and Robotics
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                1 Course
              </Text>
            </Flex>
          </Flex>
          {/* <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                width="120%"
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Math and Logic
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                70 Courses
              </Text>
            </Flex>
          </Flex> */}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Section5;
