import {
    Box,
    Button,
    Flex,
    Text,
    useMediaQuery,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
    const [isWide] = useMediaQuery("(max-width: 995px)");
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = {
        fontWeight: "semibold",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        _hover: {
            transform: "scale(1.1)",
            color: "#01FF12",
        },
    };

    const buttonStyles = {
        variant: "outline",
        colorScheme: "#BBB",
        transition: "transform 0.3s ease-in-out",
        _hover: {
            bg: "#01FF12",
            color: "black",
            boxShadow: "0 4px 10px rgba(0, 255, 18, 0.6)",
            transform: "scale(1.1)", // Scale effect on hover
        },
    };

    return (
        <Box
            id={"contact"}
            as="footer"
            backgroundColor="#131313"
            color="#fff"
            padding="40px 20px"
            boxShadow="0 -4px 8px rgba(0, 0, 0, 0.2)"
            position="relative"
            bottom="0"
            width="100%"
        >
            <Flex
                maxWidth="80vw"
                margin="0 auto"
                justifyContent="space-between"
                alignItems="center"
                direction={isWide ? "column" : "row"}
                gap={isMobile ? "20px" : "40px"}
            >
                {/* Contact Buttons */}
                <Flex
                    gap="20px"
                    direction={isWide ? "row" : "row"}
                    alignItems="center"
                >
                    <Button
                        onClick={() => window.open("mailto:narcis.karanfilov@gmail.com")}
                        {...buttonStyles}
                    >
                        Contact Me
                    </Button>
                    <Button
                        onClick={() => window.location.href = "tel:+38971344010"}
                        {...buttonStyles}
                    >
                        Call Me
                    </Button>

                    {isWide && (
                        <Button onClick={onOpen} {...buttonStyles}>
                            Menu
                        </Button>
                    )}
                </Flex>

                {/* Navigation Links */}
                {!isWide && (
                    <HStack gap="40px">
                        {["home", "about", "resume", "skills", "projects", "contact"].map((id) => (
                            <Text
                                key={id}
                                onClick={() => scrollToSection(id)}
                                sx={navLinks}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Text>
                        ))}
                    </HStack>
                )}

                {/* Drawer for Wide Screens */}
                <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent backgroundColor="#131313">
                        <DrawerCloseButton />
                        <DrawerHeader color="#01FF12">Menu</DrawerHeader>
                        <DrawerBody>
                            <HStack justify="center" spacing="24px">
                                {["home", "about", "resume", "skills", "projects", "contact"].map((id) => (
                                    <Text
                                        key={id}
                                        onClick={() => {
                                            scrollToSection(id);
                                            onClose();
                                        }}
                                        sx={navLinks}
                                    >
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </Text>
                                ))}
                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>

            {/* Scroll to Top Button */}
            <Button
                onClick={scrollToTop}
                position="fixed"
                bottom="20px"
                right="20px"
                backgroundColor="#01FF12"
                color="#fff"
                borderRadius="50%"
                boxShadow="0 4px 10px rgba(0, 255, 18, 0.6)"
                _hover={{
                    transform: "scale(1.1)",
                }}
            >
                <FiArrowUp size="24px" />
            </Button>
        </Box>
    );
};

export default Footer;
