import {
  Flex,
  Text,
  Link,
  Grid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

import Infinio from '../../asset/images/Infinio.jpg';
import neom from '../../asset/images/neom.jpg';
import finder from '../../asset/images/finder.jpg';
import credize from '../../asset/images/credize.jpg';
import BL from '../../asset/images/BL.png';
import zg from '../../asset/images/zg.jpg';
import apothecary from '../../asset/images/theapothecary.jpg';
import artz from '../../asset/images/keralavibes.png';



const Section2 = () => {
  const columnCount = useBreakpointValue({ sm: 4, md: 6, lg: 8 });

  return (
    <Flex
      direction="column"
      gap={6}
      bg="#f5f5f5"
      p={10}
      justifyContent={"center"}
      alignItems={"center"}
    
    >
      <Text
        fontSize={{
          lg: "2xl",
          sm: "l",
          md: "xl",
        }}
      >
        {/* We collaborate with{" "} */}
        <Link color="#0056d2" href="https://metavalleytbi.com/"target="blank" fontWeight="bold">
          We Have 27 Companies in Collaborate with
        </Link>
      </Text>
      <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={6}>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={Infinio}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={neom}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={finder}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={credize}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={BL}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={zg}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={apothecary}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
        <Flex justify="center" align="center" p={4}>
          <Image
            src={artz}
            alt="Chakra Logo"
            objectFit="contain"
          />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Section2;
