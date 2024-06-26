import React from "react";
import {
  Flex,
  Box,
  Select,
  Input,
  Button,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavBarDrawer } from "../components/NavBarDrawer";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  function signup() {
    navigate("/signup");
  }

  function home() {
    navigate("/");
  }



  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={4}
        bg="#f5f5f5"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="fixed"
        width="100%"
        zIndex={12}
      >
        <Flex align="center">
          <Box>
            {/* Logo */}
            {/* <img src={image} alt="Logo" width="30%" /> */}
            <Text
              fontSize={30}
              fontWeight="extrabold"
              color="#0056d2"
              onClick={home}
              _hover={{ cursor: "pointer" }}
            >
              Learn.Infinio
            </Text>
          </Box>
        </Flex>




        {isMobile && (
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            color="black"
            borderRadius="7px"
            _hover={{ backgroundColor: "#003e9c", color: "white" }}
          />
        )}

        {!isMobile && (
          <Flex align="center">
            {/* Links */}
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="#"
              >
                {/* Find your New Career */}
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="#"
              >
                {/* For Enterprise */}
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="#"
              >
                {/* For Universities */}
              </Link>
            </Box>
            <Box mr={4}>
              <Link textDecoration="none" color="#0056d2" href="/login">
                Login
              </Link>
            </Box>

            {/* Join for Free Button */}
            <Button
              bg="#0056d2"
              color="white"
              borderRadius="5px"
              _hover={{ bg: "#003e9c" }}
              onClick={signup}
            >
              Join for free
            </Button>
          </Flex>
        )}
      </Flex>
      <NavBarDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default Navbar;
