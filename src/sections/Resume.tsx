import { Box, Flex, HStack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import ResumeBox from "../components/ResumeBox.tsx";
import educationData from "../../public/resume/education.json";
import experienceData from "../../public/resume/experience.json";
import { IResumeBox } from "../interfaces/resume.interface.ts";

const Resume = () => {
    const education: IResumeBox[] = educationData;
    const experience: IResumeBox[] = experienceData;
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(max-width: 1024px)");
    const [isPhoneScreen] = useMediaQuery("(max-width: 480px)");
    const [isBelow1358px] = useMediaQuery("(max-width: 1358px)");

    return (
        <Box
            width={"90%"}
            backgroundColor={"#131313"}
            m={"33px auto"}
            display={"flex"}
            flexDirection={isPhoneScreen || isTabletScreen ? "column" : "row"}
            justifyContent={"center"}
            p={isPhoneScreen ? "15px" : "0"}
        >
            <VStack
                width={"100%"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                mt={isPhoneScreen || isTabletScreen ? "20px" : "10px"}
            >
                <Flex
                    fontSize={isPhoneScreen ? "1.75rem" : isSmallScreen ? "2rem" : isTabletScreen ? "1.5rem" : "1.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    alignItems="center"
                    justifyContent="center"
                    mb={"10px"}
                    fontWeight={"regular"}
                >
                    <Text color={"#FFFFFF"}>My</Text><Text color={"#01FF12"}>Resume</Text>
                </Flex>
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={isPhoneScreen ? "1.5rem" : isSmallScreen ? "2rem" : "2.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    fontWeight={"medium"}
                >
                    <Flex
                        fontSize={isPhoneScreen ? "1.5rem" : isSmallScreen ? "2rem" : "2.5rem"}
                        gap={"9px"}
                        letterSpacing={"1.1px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        fontWeight={"medium"}
                    >
                        <Text color={"#FFFFFF"}>Real</Text><Text color={"#01FF12"}>Problem Solutions</Text>
                    </Flex>
                    <Text color={"#FFFFFF"} marginTop={"-15px"}>Experience</Text>
                </Flex>

                <HStack
                    gap={{ base: "20px", sm: "40px", md: "100px" }}
                    alignItems={isPhoneScreen || isTabletScreen || isBelow1358px ? "center" : "flex-start"}
                    flexWrap={isPhoneScreen || isTabletScreen || isBelow1358px ? "wrap" : "nowrap"}
                    width={isPhoneScreen || isTabletScreen || isBelow1358px ? "90%" : " "}
                >
                    <VStack
                        spacing="20px"
                        width="100%"
                        align="left"
                    >
                        <Text
                            textShadow="0px 0px 3px #01FF12, 1px 1px 2px #01FF12"
                            color="#FFFFFF"
                            fontSize={{ base: "1.5rem", sm: "1.875rem" }}
                            fontWeight="bold"
                            textAlign="left"
                            width={isPhoneScreen || isTabletScreen || isBelow1358px ? "80%" : " "}
                            px="20px"
                            pt={"50px"}
                            pb={"50px"}
                            ml={isPhoneScreen || isTabletScreen || isBelow1358px ? "0px" : "100px"}
                        >
                            Education
                        </Text>
                        <Box
                            width="100%"
                            p={isPhoneScreen ? "10px" : isTabletScreen ? "15px" : "0"}
                        >
                            {education.map((item) => (
                                <ResumeBox
                                    key={item.schoolName}
                                    schoolName={item.schoolName}
                                    degree={item.degree}
                                    fromYear={item.fromYear}
                                    toYear={item.toYear}
                                    description={item.description}
                                />
                            ))}
                        </Box>
                    </VStack>

                    <VStack
                        spacing="20px"
                        width="100%"
                        align="left"
                    >
                        <Text
                            textShadow="0px 0px 3px #01FF12, 1px 1px 2px #01FF12"
                            color="#FFFFFF"
                            fontSize={{ base: "1.5rem", sm: "1.875rem" }}
                            fontWeight="bold"
                            textAlign={isPhoneScreen || isTabletScreen || isBelow1358px ? "left" : "right"}
                            mr={isPhoneScreen || isTabletScreen || isBelow1358px ? "100px" : "300px"}
                            width={isPhoneScreen || isTabletScreen || isBelow1358px ? "80%" : " "}
                            pt={"50px"}
                            pb={"50px"}
                            px={"20px"}
                        >
                            Experience
                        </Text>
                        <Box
                            width={isPhoneScreen || isTabletScreen || isBelow1358px ? "100%" : " "}
                            p={isPhoneScreen ? "10px" : isTabletScreen ? "15px" : "0"}
                        >
                            {experience.map((item) => (
                                <ResumeBox
                                    key={item.schoolName}
                                    schoolName={item.schoolName}
                                    degree={item.degree}
                                    fromYear={item.fromYear}
                                    toYear={item.toYear}
                                    description={item.description}
                                />
                            ))}
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Resume;
