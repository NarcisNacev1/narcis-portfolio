import {Box, Flex, Image, Text, useMediaQuery, VStack, HStack} from "@chakra-ui/react";
import {FiCheckCircle} from "react-icons/fi";
import {AboutMeIconFlexStyle} from "../styles/sections/AboutMe.ts";
import aboutmeData from "../../public/aboutme/aboutme.json";
import {IAboutInterface} from "../interfaces/about.interface.ts";


const AboutMe = () => {
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(max-width: 1024px)");
    const [isPhoneScreen] = useMediaQuery("(max-width: 480px)");
    const [isBelow1220px] = useMediaQuery("(max-width: 1220px)");
    const aboutme: IAboutInterface[] = aboutmeData;

    return (
        <Box
            border="0px solid red"
            height="auto"
            width={"80%"}
            backgroundColor={"#131313"}
            m={"33px auto"}
            display={"flex"}
            flexDirection={isPhoneScreen || isTabletScreen || isBelow1220px ? "column" : "row"}
            alignItems={isPhoneScreen || isTabletScreen || isBelow1220px ? "flex-start" : "center"}
            p={isPhoneScreen ? "15px" : "0"}
        >
            <Box flexShrink={0} alignSelf={"center"}>
                <Image
                    border={"20px solid #1E1E1E"}
                    src={"intro/bitmoji2.png"}
                    width={isPhoneScreen ? "200px" : isSmallScreen ? "300px" : isTabletScreen ? "350px" : "660px"}
                    height="auto"
                    borderRadius={"20px"}
                    margin={isPhoneScreen || isTabletScreen || isBelow1220px ? "0 auto 20px" : "0px 60px 100px 0px"}
                    transition={"transform 0.3s ease-in-out"}
                    _hover={{transform: "scale(1.1)"}}
                />
            </Box>

            <VStack
                mb={"100px"}
                alignItems={"left"}
                spacing={-2}
                lineHeight="1.2"
                flexBasis={"60%"}
                maxWidth={isPhoneScreen || isTabletScreen || isBelow1220px ? "100%" : "43%"}
                textAlign={isPhoneScreen || isTabletScreen || isBelow1220px ? "center" : "left"}
            >
                <Text fontSize={"1.25rem"} letterSpacing={"0.48px"} fontWeight={"normal"} mb={"20px"} mt={"0px"}>
                    About Me
                </Text>
                <Box
                    fontSize={"2.5rem"}
                    letterSpacing={"1.1px"}
                    fontWeight={"normal"}
                    m={isPhoneScreen || isTabletScreen || isBelow1220px ? "0 auto" : " "}
                >
                    <Flex gap={"13px"}>
                        <Text color={"#01FF12"}>Driven,</Text>
                        <Text color={"#FFFFFF"}>innovative</Text>
                    </Flex>
                    <Flex gap={"13px"}>
                        <Text color={"#FFFFFF"}>Software</Text>
                        <Text color={"#01FF12"}>Engineer</Text>
                    </Flex>
                </Box>
                <Text color={"#FFFFFF"} width={"100%"} letterSpacing={"0.48px"} mt={"20px"} lineHeight={"2.3"}>
                    More than 5 years experience in the development of software and
                    solutions. A conscientious person who pays attention to details. Very
                    passionate about software development, always willing and ready to
                    learn new things/concepts. Proven leader with the ability to streamline
                    development processes to drive the achievement of
                    organisational objectives.
                </Text>
                {aboutme.map((item) => (
                    <Box margin={isPhoneScreen || isTabletScreen || isBelow1220px ? "0 auto" : " "}
                         width={isPhoneScreen || isTabletScreen || isBelow1220px ? "80%" : " "}
                    >
                        <HStack
                            key={item.id}
                            spacing={isPhoneScreen ? "10px" : "20px"}
                            mt={"20px"}
                        >
                            <Flex sx={AboutMeIconFlexStyle}>
                                <FiCheckCircle size={"20px"}/>
                            </Flex>
                            <Text mt={"15px"} ml={"5px"}>{item.content}</Text>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default AboutMe;
