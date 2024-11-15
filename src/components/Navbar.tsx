import { Box, Flex, Text, useMediaQuery, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, useDisclosure } from "@chakra-ui/react";
import { navLinks } from "../styles/components/Navbar.ts";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
    const [is1400wide] = useMediaQuery("(max-width: 1400px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                border={"0px solid red"}
                height={"56px"}
                maxWidth={"80vw"}
                backgroundColor={"#131313"}
                m={"33px auto"}
                display={"flex"}
                gap={is1400wide ? "150px" : "50px"}
                alignItems={"center"}
            >
                <Text
                    fontSize={"2rem"}
                    fontFamily={"'Pacifico', cursive"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Text color={"#01FF12"}>N</Text>arcis <Text color={"#01FF12"}>N</Text>acev
                </Text>
                {is1400wide ? (
                    <IconButton
                        icon={<FiMenu color={"rgba(255,255,255,0.65)"} />}
                        fontSize="2rem"
                        marginLeft="auto"
                        onClick={onOpen}
                        backgroundColor="transparent"
                        _hover={{ background: "transparent" }}
                        aria-label="Open Menu"
                    />
                ) : (
                    <Flex
                        gap={"40px"}
                        fontWeight={"semibold"}
                        fontSize={"1.5rem"}
                        marginLeft={"auto"}
                        alignItems={"center"}
                    >
                        <Text sx={navLinks}>Home</Text>
                        <Text sx={navLinks}>About</Text>
                        <Text sx={navLinks}>Resume</Text>
                        <Text sx={navLinks}>Skills</Text>
                        <Text sx={navLinks}>Projects</Text>
                        <Text sx={navLinks}>Contact</Text>
                    </Flex>
                )}
            </Box>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent backgroundColor="#131313">
                    <DrawerCloseButton />
                    <DrawerHeader color={"#01FF12"}>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing="24px">
                            <Text sx={navLinks} onClick={onClose}>Home</Text>
                            <Text sx={navLinks} onClick={onClose}>About</Text>
                            <Text sx={navLinks} onClick={onClose}>Resume</Text>
                            <Text sx={navLinks} onClick={onClose}>Skills</Text>
                            <Text sx={navLinks} onClick={onClose}>Projects</Text>
                            <Text sx={navLinks} onClick={onClose}>Contact</Text>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
