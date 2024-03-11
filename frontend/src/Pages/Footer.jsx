import React from "react";
import { Box, Grid, Heading, Link, Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="#f5f5f5"
      p={5}
      paddingBottom={{
        sm: "60px",
        md: "60px",
        lg: "20px",
      }}
      fontFamily="Source Sans 3"
      pt="60px"
      direction="column"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Smallest screen size (1 column)
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)", // Medium screen size (2 columns)
          lg: "repeat(4, 1fr)", // Large screen size (4 columns)
        }}
        gap={4}
      >
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Learn Something New
          </Heading>
          <br />
          <Link fontSize="13.5px">Learn Digital Marketing</Link>
          <br />
          <Link fontSize="13.5px">Learn Artificial Intelligence</Link>
          <br />
          <Link fontSize="13.5px">Learn Robotics</Link>
          <br />
          <Link fontSize="13.5px">Learn Digital Marketing Essentials</Link>
          <br />
          <Link fontSize="13.5px">Learn Digital Marketing Specialisation</Link>
          <br />
          <Link fontSize="13.5px">Learn Fundamental of Digital Marketing</Link>
          <br />
          <Link fontSize="13.5px">Learn Machine Learning</Link>
          <br />
          {/* <Link fontSize="13.5px">Learn Public Relations</Link>
          <br />
          <Link fontSize="13.5px">Boulder MS Data Science</Link>
          <br />
          <Link fontSize="13.5px">Illinois iMBA</Link>
          <br />
          <Link fontSize="13.5px">Illinois MS Computer Science</Link>
          <br />
          <Link fontSize="13.5px">UMich MS in Applied Data Science</Link> */}
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Topics
          </Heading>
          <br />
          <Link fontSize="13.5px">Digital Marketing</Link>
          <br />
          <Link fontSize="13.5px">Artificial Intelligence</Link>
          <br />
          <Link fontSize="13.5px">Robotics</Link>
          <br />
          <Link fontSize="13.5px">Machine Learing</Link>
          <br />
          <Link fontSize="13.5px">Data Science</Link>
          <br />
          <Link fontSize="13.5px">Excel</Link>
          <br />
          <Link fontSize="13.5px">Google</Link>
          <br />
          <Link fontSize="13.5px">Python</Link>
          <br />
          <Link fontSize="13.5px">React JS</Link>
          <br />
          <Link fontSize="13.5px">SQL</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Certificates
          </Heading>
          <br />
          <Link fontSize="13.5px">Digital Marketing Essentials Internship Certificate</Link>
          <br />
          <Link fontSize="13.5px">Digital Marketing Specialist Certification- Al Ameen Edathala</Link>
          <br />
          <Link fontSize="13.5px">Certified Digital Marketing Specialist Program - Adi Sankara</Link>
          <br />
          <Link fontSize="13.5px">Fundamentals of Digital Marketing</Link>
          <br />
          <Link fontSize="13.5px">Digital Marketing Certificate Program </Link>
          <br />
          <Link fontSize="13.5px">Artificial Intelligenct and Robotics</Link>
          <br />
          {/* <Link fontSize="13.5px">Machine Learning</Link>
          <br />
          <Link fontSize="13.5px">IBM Data Science</Link>
          <br />
          <Link fontSize="13.5px">Intuit Bookkeeping</Link>
          <br />
          <Link fontSize="13.5px">Meta Front-End Developer</Link> */}
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Featured Articles
          </Heading>
          <br />
          <Link fontSize="13.5px">
          Advance Your Career with Infinio's Digital Marketing Program, Leveraging the Power of Gen AI.
          </Link>
          <br />
          <Link fontSize="13.5px">
            Advance Your Career With our 2-year Digital Marketing Mastery Program for a transformative journey.
          </Link>
          <br />
          <Link fontSize="13.5px">Certificate Program: AI and Robotics Concepts & Applications in four semesters, equipping students with essential skills.</Link>
          <br />
          {/* <Link fontSize="13.5px">
            How to Break into the Field Machine Learning and Problem Solving
          </Link>
          <br /> */}
          <Link fontSize="13.5px">
          Join our internship program for comprehensive training in SEO, PPC, social media, and more with hands-on experience.
          </Link>
          <br />
          <Link fontSize="13.5px">Al Ameen Edathala's Digital Marketing Specialist Certification covers essential aspects of digital marketing in a comprehensive program.</Link>
          <br />
          <Link fontSize="13.5px">
          Join Adi Sankara's May 2023 program for comprehensive training in digital marketing: SEO, SEM, content, social media, and analytics.
          </Link>
          <br />
          <Link fontSize="13.5px">
          Digital Marketing Fundamentals: Core principles and strategies for online product/service promotion.          </Link>
          <br />
          {/* <Link fontSize="13.5px">
            Unlock Your Potential with a PMI Certification
          </Link>
          <br />
          <Link fontSize="13.5px">
            What You Should Know About CompTIA A+ Certification
          </Link> */}
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Thrissur Office
          </Heading>
          <br />
          <Link fontSize="13.5px">Vimala Building,</Link>
          <br />
          <Link fontSize="13.5px">Near St. Thomas' College</Link>
          <br />
          <Link fontSize="13.5px">Thrissur</Link>
          <br />
          <Link fontSize="13.5px">+91 - 9745450618, +91 - 8547636638</Link>
          <br />
          {/* <Link fontSize="13.5px">Careers</Link>
          <br />
          <Link fontSize="13.5px">Catalog</Link>
          <br />
          <Link fontSize="13.5px">Coursera Plus</Link>
          <br />
          <Link fontSize="13.5px">Professional Certificates</Link>
          <br />
          <Link fontSize="13.5px">MasterTrack® Certificates</Link>
          <br />
          <Link fontSize="13.5px">Degrees</Link>
          <br />
          <Link fontSize="13.5px">For Enterprise</Link>
          <br />
          <Link fontSize="13.5px">For Government</Link>
          <br />
          <Link fontSize="13.5px">For Campus</Link>
          <br />
          <Link fontSize="13.5px">Become a Partner</Link>
          <br />
          <Link fontSize="13.5px">Coronavirus Response</Link>
          <br />
          <Link fontSize="13.5px">Free Courses</Link>
          <br />
          <Link fontSize="13.5px">All Courses</Link> */}
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Kochi Office
          </Heading>
          <br />
          <Link fontSize="13.5px">METAVALLY TBI</Link>
          <br />
          <Link fontSize="13.5px">Aluva,</Link>
          <br />
          <Link fontSize="13.5px">Ernakulam</Link>
          <br />
          <Link fontSize="13.5px">+91 - 9496839168</Link>
          <br />
          {/* <Link fontSize="13.5px">Translators</Link>
          <br />
          <Link fontSize="13.5px">Blog</Link>
          <br />
          <Link fontSize="13.5px">Tech Blog</Link>
          <br />
          <Link fontSize="13.5px">Teaching Center</Link> */}
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Dubai Office
          </Heading>
          <br />
          <Link fontSize="13.5px">Jebel Ali</Link>
          <br />
          <Link fontSize="13.5px">Dubai</Link>
          <br />
          <Link fontSize="13.5px">+971-0556259175</Link>
          <br />
          <Link fontSize="13.5px">Privacy</Link>
          <br />
          {/* <Link fontSize="13.5px">Help</Link>
          <br />
          <Link fontSize="13.5px">Accessibility</Link>
          <br />
          <Link fontSize="13.5px">Contact</Link>
          <br />
          <Link fontSize="13.5px">Articles</Link>
          <br />
          <Link fontSize="13.5px">Directory</Link>
          <br />
          <Link fontSize="13.5px">Affiliates</Link>
          <br />
          <Link fontSize="13.5px">Modern Slavery Statement</Link> */}
        </Box>

        {/* <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Flex
            direction="column"
            justifyContent="space-around"
            alignContent="space-between"
            h={{
              lg: "100%",
              sm: "100%",
            }}
          >
            <Image
              width={{
                base:"35%",
                sm: "20%",
                md: "35%",
                lg: "45%",
              }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
              alt="AppleStoreLogo"
            />

            <Image

              width={{
                base:"35%",
                sm: "20%",
                md: "35%",
                lg: "45%",
              }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
              alt="Google_Play"
            />
            <Image
              width={{
                base:"15%",
                sm: "15%",
                md: "25%",
                lg: "35%",
              }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=1&w=151&h=120&q=40"
              alt="Certified"
            />
          </Flex>
        </Box> */}
        
      </Grid>
      <Flex
        mt={15}
        gap={7}
        borderTop="1px solid #c9c9c9"
        direction={{
          sm: "column",
          md: "row",
          lg: "row",
        }}
        justifyContent={{
          lg: "space-between",
        }}
        alignItems="center"
        padding={{
          sm: "10px",
          md: "35px",
          lg: "55px",
        }}
      >
        <Box>
          {" "}
          <Text fontSize="13.5px">
            © 2024 Infinio Technology Solutions. All rights reserved.
          </Text>
        </Box>
        <Flex spacing={4} overflow='hidden'>
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />

          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
          display={{
            base:"none",
            sm:"block"
          }}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
          display={{
            base:"none",
            sm:"block"
          }}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/9b7e964107839c77644d7e7d15035b73.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
