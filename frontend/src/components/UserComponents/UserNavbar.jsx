import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarDrawer } from "../NavBarDrawer";
import { showToast } from "../SignUp";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const toast = useToast();
  const location = useLocation();
  function home() {
    navigate("/learn");
  }

  function handleShowSearchBar() {
    setShowSearchBar(!showSearchBar);
    if (showSearchBar && location.pathname == "/learn") {
      showToast({
        toast,
        message: `Below is you search Result`,
        color: "green",
      });
    }
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
        width="100vw"
        zIndex={12}
        top={0}
      >
        <Flex align="center">
          <Box>
            {/* Logo */}
            {/* <img src={image} alt="Logo" width="30%" /> */}
            <Text
              fontSize={30}
              fontWeight="extrabold"
              color="#0056d2"
              _hover={{ cursor: "pointer" }}
              onClick={home}
            >
              Learn.Infinio
            </Text>
          </Box>
        </Flex>

        
        {/* small screen search bar and icon  */}
        {isMobile &&
          location.pathname ==
            "/learn" &&(
              <Box>
                {showSearchBar ? (
                  <Flex align="center">
                    <Box>
                      {/* Search Bar */}
                      <Input
                        type="text"
                        variant="filled"
                        border="1px solid black"
                        fontSize="0.8rem"
                        m="0 2rem"
                        color="black"
                        placeholder="Find your new Skiil!"
                        borderRadius="10px 0 0px 10px"
                        _placeholder={{
                          color: "#555454",
                          letterSpacing: "0.5px",
                        }}
                      />
                    </Box>
                    <IconButton
                      aria-label="Search"
                      icon={<FaSearch />}
                      bg="#0056d2"
                      onClick={handleShowSearchBar}
                      color="white"
                      borderRightRadius="7px"
                      borderRadius="0px 10px 10px 0px"
                    />
                  </Flex>
                ) : (
                  <IconButton
                    aria-label="Search"
                    icon={<FaSearch />}
                    color="white"
                    borderRadius="7px"
                    bg="#0056d2"
                    onClick={handleShowSearchBar}
                    _hover={{ backgroundColor: "#003e9c", color: "white" }}
                  />
                )}
              </Box>
            )}

        {!isMobile && (
          <Flex align="center">
            {/* Links */}
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="/new-career"
              >
                {/* Find your New Career */}
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="/enterprise"
              >
                {/* For Enterprise */}
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="/universities"
              >
                {/* For Universities */}
              </Link>
            </Box>
            {/* <Box mr={4}>
            <Button colorScheme="red" size="md" onClick={handleLogout}>
              Logout
            </Button>
          </Box> */}
            <Box>
              <Dropdown />
            </Box>
          </Flex>
        )}
      </Flex>
      <NavBarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;
