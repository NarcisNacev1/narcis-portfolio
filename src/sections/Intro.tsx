import { Box, Button, Flex, HStack, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { buttonStyle, iconFlexStyle, iconStyle } from "../styles/sections/intro.ts";

const Intro = () => {
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(min-width: 769px)");

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
                {/* Image positioned at the top for small screens */}
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
                            transform: "scale(1.1)"
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
                        From Nairobi, Kenya. I have rich experience
                        in development cycle for dynamic web projects,
                        app development, and I am also proficient in
                        UX/UI design.
                    </Text>
                    <HStack gap={"15px"}>
                        <Button sx={buttonStyle}>
                            Download Resume
                        </Button>
                        <Button
                            sx={{
                                ...buttonStyle,
                                width: {base: "135px", sm: "130px", md: "150px", lg: "175px"},
                                border: "1px solid #01FF12",
                                backgroundColor: "transparent",
                                _hover: {
                                    backgroundColor: "transparent",
                                    transform: "scale(1.1)"
                                }
                            }}
                        >
                            Contact Me
                        </Button>
                    </HStack>
                    <HStack gap={"20px"}>
                        <Flex sx={iconFlexStyle}>
                            <FiGithub style={iconStyle}/>
                        </Flex>
                        <Flex sx={iconFlexStyle}>
                            <FiLinkedin style={iconStyle}/>
                        </Flex>
                        <Flex sx={iconFlexStyle}>
                            <FiMail style={iconStyle}/>
                        </Flex>
                        <Flex sx={iconFlexStyle}>
                            <FiInstagram style={iconStyle}/>
                        </Flex>
                    </HStack>
                </VStack>

                {/* Image only appears on tablet and larger screens */}
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
                                transform: "scale(1.1)"
                            }}
                        />
                    </Box>
                )}
            </Box>
            );
            };

            export default Intro;
