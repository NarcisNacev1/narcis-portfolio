import {
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Text,
    VStack,
    useMediaQuery,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { buttonStyle, iconFlexStyle, iconStyle } from "../styles/sections/intro.ts";

const Intro = () => {
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(min-width: 769px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDownload = () => {
        const link = document.createElement('a');
            link.href = '/intro/cv/EnglishCV.pdf';
        link.download = 'EnglishCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Box
            id={"home"}
            border="0px solid red"
            height={isSmallScreen ? "auto" : "600.5px"}
            width={"80%"}
            backgroundColor={"#131313"}
            m={"100px auto"}
            p={isSmallScreen ? "20px" : "0"}
            display={"flex"}
            flexDirection={isSmallScreen ? "column" : "row"}
            gap={isSmallScreen ? "50px" : "150px"}
            alignItems={"center"}
        >
            {isSmallScreen && (
                <Image
                    border={"4px solid #01FF12"}
                    src={"intro/bitmoji1.png"}
                    width="300px"
                    height="auto"
                    borderRadius={"full"}
                    margin="0 auto"
                    transition={"transform 0.3s ease-in-out"}
                    _hover={{
                        transform: "scale(1.1)",
                    }}
                />
            )}

            <VStack alignItems={isSmallScreen ? "center" : "left"} textAlign={isSmallScreen ? "center" : "left"}>
                <Text
                    textTransform={"uppercase"}
                    fontSize={"1.25rem"}
                    letterSpacing={"1.28px"}
                >
                    hello, my name is
                </Text>
                <Flex fontSize={isSmallScreen ? "2.5rem" : "4rem"} gap={"24px"} letterSpacing={"1.28px"}>
                    <Text color={"#01FF12"}>Narcis</Text><Text color={"#FFFFFF"}>Nacev</Text>
                </Flex>
                <Text fontSize={isSmallScreen ? "1.5rem" : "1.5rem"} letterSpacing={"1.28px"} fontWeight={"normal"}>
                    Software Engineer
                </Text>
                <Text color={"#FFFFFF"} width={isSmallScreen ? "100%" : "43%"} letterSpacing={"0.48px"} mt={"20px"}
                      lineHeight={"2"}>
                    From Skopje, North Macedonia. I specialize in crafting secure and efficient backend solutions,
                    with expertise in Python, Django, Flask, and PostgreSQL.
                    Passionate about applying modern technologies to solve real-world problems.
                </Text>
                <HStack gap={"15px"}>
                    {/* Download Resume Button */}
                    <Button
                        sx={buttonStyle}
                        onClick={() => handleDownload()}
                    >
                        Download Resume
                    </Button>

                    {/* Contact Me Button */}
                    <Button
                        sx={{
                            ...buttonStyle,
                            width: { base: "135px", sm: "130px", md: "150px", lg: "175px" },
                            border: "1px solid #01FF12",
                            backgroundColor: "transparent",
                            _hover: {
                                backgroundColor: "transparent",
                                transform: "scale(1.1)",
                            },
                        }}
                        onClick={onOpen}
                    >
                        Contact Me
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#131313" color="#fff">
                            <ModalHeader>Contact Me</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p>Email: <a href="mailto:narcis.karanfilov@gmail.com" style={{ color: "#01FF12" }}>narcis.karanfilov@gmail.com</a></p>
                                <p>Phone: <a href="tel:+38971344010" style={{ color: "#01FF12" }}>+389 71 344 010</a></p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color={"#FFFFFF"}
                                    sx={{
                                        variant: "outline",
                                        colorScheme: "#BBB",
                                        border: "1px solid #01FF12",
                                        backgroundColor: "transparent",
                                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                        _hover: {
                                            backgroundColor: "#01FF12",
                                            color: "black",
                                            boxShadow: "0 4px 10px rgba(0, 255, 18, 0.6)",
                                            transform: "scale(1.1)",
                                        },
                                        _focus: {
                                            boxShadow: "0 0 8px rgba(0, 255, 18, 0.6)",
                                        },
                                    }}
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </HStack>

                <HStack gap={"20px"}>
                    <Flex sx={iconFlexStyle} as="a" href="https://github.com/NarcisNacev1" target="_blank">
                        <FiGithub style={iconStyle} />
                    </Flex>
                    <Flex sx={iconFlexStyle} as="a" href="https://mk.linkedin.com/in/nacevnarcis" target="_blank">
                        <FiLinkedin style={iconStyle} />
                    </Flex>
                    <Flex sx={iconFlexStyle} as="a" href="mailto:narcis.karanfilov@gmail.com">
                        <FiMail style={iconStyle} />
                    </Flex>
                    <Flex sx={iconFlexStyle} as="a" href="https://www.instagram.com/nacevnarcis/" target="_blank">
                        <FiInstagram style={iconStyle} />
                    </Flex>
                </HStack>
            </VStack>

            {isTabletScreen && (
                <Box alignItems={"center"} justifyContent={"center"}>
                    <Image
                        border={"4px solid #01FF12"}
                        src={"intro/bitmoji1.png"}
                        width="500px"
                        height="auto"
                        borderRadius={"full"}
                        margin="0 250px 0 0"
                        transition={"transform 0.3s ease-in-out"}
                        _hover={{
                            transform: "scale(1.1)",
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

export default Intro;
