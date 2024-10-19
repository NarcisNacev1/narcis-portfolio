import {Box, Button, Flex, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FiGithub, FiInstagram, FiLinkedin, FiMail} from "react-icons/fi";
import {buttonStyle, iconFlexStyle, iconStyle} from "../styles/sections/intro.ts";

const Intro = () => {
    return (
        <Box
            border="0px solid red"
            height={"600.5px"}
            width={"1500px"}
            backgroundColor={"#131313"}
            m={"100px auto"}
            display={"flex"}
            gap={"150px"}
        >
            <HStack>
                <VStack alignItems={"left"}>
                    <Text
                        textTransform={"uppercase"}
                        fontSize={"1.25rem"}
                        letterSpacing={"1.28px"}
                    >
                        hello, my name is
                    </Text>
                    <Flex fontSize={"4rem"} gap={"24px"} letterSpacing={"1.28px"}>
                        <Text color={"#01FF12"}>Narcis</Text><Text color={"#FFFFFF"}>Nacev</Text>
                    </Flex>
                    <Text fontSize={"1.5rem"} letterSpacing={"1.28px"}>
                        Software Engineer
                    </Text>
                    <Text color={"#FFFFFF"} width={"43%"} letterSpacing={"0.48px"} mt={"20px"}>
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
                                width: "175px",
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
                <Box alignItems={"right"} justifyContent={"right"}>
                    <Image
                        border={"4px solid #01FF12 "}
                        src={"intro/bitmoji1.png"}
                        boxSize={"500px"}
                        borderRadius={"full"}
                        marginRight={"250px"}
                        transition={"transform 0.3s ease-in-out"}
                        _hover = {{
                            transform: "scale(1.1)"
                        }}

                    />
                </Box>
            </HStack>
        </Box>
    );
};

export default Intro;
