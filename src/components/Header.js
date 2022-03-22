import React from "react";
import {
  Spacer,
  Box,
  Flex,
  Image,
  Icon,
  useDisclosure,
  HStack,
  Button,
  Divider
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import {Link} from "react-router-dom";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex width="90%" margin="auto" p="3" minWidth="500px" justifyContent="center" alignItems="center" flex-direction='row' align='center'>
      <Box as="a" href="https://www.alexcaradonna.com">
        <Image
          src="https://static.wixstatic.com/media/0c38a4_45b23060142548d4bf77407c6fde0aad~mv2.png"
          alt="Logo To The Mars"
          boxSize="50px"
          objectFit="cover"
        ></Image>
      </Box>
      <Spacer />
        <HStack as='nav' className='navBar' width='66%'>
            <Link to="/">Home</Link>
            <Link to="/swap">Swap</Link>
            <Link to="/tokendata">Token Database</Link>
        </HStack>
      <Spacer />
      <HStack>
        <Box as="a" href="https://www.tothemars.in">
          <Icon color="#F58634" as={AiFillHome} boxSize="25px" />
        </Box>
        <Box>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </HStack>
    </Flex>
  );
}

export default Header;
