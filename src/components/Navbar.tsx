import {
    Box,
    Flex,
    Text,
    useMediaQuery,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { navLinks } from "../styles/components/Navbar.ts";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [is1400wide] = useMediaQuery("(max-width: 1400px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="56px"
                backgroundColor="rgba(19, 19, 19, 0.85)"
                backdropFilter="blur(10px)"
                zIndex="1000"
                transition="transform 0.3s ease-in-out"
                transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            >
                <Box
                    maxWidth="80vw"
                    margin="0 auto"
                    display="flex"
                    gap={is1400wide ? "150px" : "50px"}
                    alignItems="center"
                    height="100%"
                >
                    <Text
                        fontSize="2rem"
                        fontFamily="'Pacifico', cursive"
                        display="flex"
                        alignItems="center"
                    >
                        <Text color="#01FF12">N</Text>arcis <Text color="#01FF12">N</Text>acev
                    </Text>
                    {is1400wide ? (
                        <IconButton
                            icon={<FiMenu color="rgba(255,255,255,0.65)" />}
                            fontSize="2rem"
                            marginLeft="auto"
                            onClick={onOpen}
                            backgroundColor="transparent"
                            _hover={{ background: "transparent" }}
                            aria-label="Open Menu"
                        />
                    ) : (
                        <Flex
                            gap="40px"
                            fontWeight="semibold"
                            fontSize="1.5rem"
                            marginLeft="auto"
                            alignItems="center"
                        >
                            <Text sx={navLinks} onClick={() => scrollToSection("home")}>
                                Home
                            </Text>
                            <Text sx={navLinks} onClick={() => scrollToSection("about")}>
                                About
                            </Text>
                            <Text sx={navLinks} onClick={() => scrollToSection("resume")}>
                                Resume
                            </Text>
                            <Text sx={navLinks} onClick={() => scrollToSection("skills")}>
                                Skills
                            </Text>
                            <Text sx={navLinks} onClick={() => scrollToSection("projects")}>
                                Projects
                            </Text>
                            <Text sx={navLinks} onClick={() => scrollToSection("contact")}>
                                Contact
                            </Text>
                        </Flex>
                    )}
                </Box>
            </Box>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent backgroundColor="#131313">
                    <DrawerCloseButton />
                    <DrawerHeader color="#01FF12">Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing="24px">
                            <Text sx={navLinks} onClick={() => { scrollToSection("home"); onClose(); }}>
                                Home
                            </Text>
                            <Text sx={navLinks} onClick={() => { scrollToSection("about"); onClose(); }}>
                                About
                            </Text>
                            <Text sx={navLinks} onClick={() => { scrollToSection("resume"); onClose(); }}>
                                Resume
                            </Text>
                            <Text sx={navLinks} onClick={() => { scrollToSection("skills"); onClose(); }}>
                                Skills
                            </Text>
                            <Text sx={navLinks} onClick={() => { scrollToSection("projects"); onClose(); }}>
                                Projects
                            </Text>
                            <Text sx={navLinks} onClick={() => { scrollToSection("contact"); onClose(); }}>
                                Contact
                            </Text>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
