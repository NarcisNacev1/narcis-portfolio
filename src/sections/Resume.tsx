import {Box, Flex, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import ResumeBox from "../components/ResumeBox.tsx";
import educationData from "../../public/resume/education.json";
import experienceData from "../../public/resume/experience.json";
import {IResumeBox} from "../interfaces/resume.interface.ts";

const Resume = () => {
    const education: IResumeBox[] = educationData;
    const experience: IResumeBox[] = experienceData;
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(max-width: 1024px)");
    const [isPhoneScreen] = useMediaQuery("(max-width: 480px)");
    const [isBelow1220px] = useMediaQuery("(max-width: 1220px)");

    return (
        <Box
            height={"2800px"}
            width={"80%"}
            backgroundColor={"#131313"}
            m={"33px auto"}
            display={"flex"}
            flexDirection={isPhoneScreen || isTabletScreen || isBelow1220px ? "column" : "row"}
            justifyContent={"flex-start"}
            p={isPhoneScreen ? "15px" : "0"}
        >
            <VStack
                display={"flex"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                mt={isPhoneScreen || isTabletScreen ? "20px" : "10px"}
            >
                <Flex fontSize={isPhoneScreen ? "2rem" : isSmallScreen ? "2.5rem" : isTabletScreen ? "3rem" : "1.5rem"}
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
                    fontSize={isPhoneScreen ? "2rem" : isSmallScreen ? "2.5rem" : isTabletScreen ? "3rem" : "2.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    fontWeight={"medium"}
                >
                    <Flex
                        fontSize={isPhoneScreen ? "2rem" : isSmallScreen ? "2.5rem" : isTabletScreen ? "3rem" : "2.5rem"}
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
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    mb="50px"
                    mt="50px"
                >

                    <Box
                        textShadow="0px 0px 3px #01FF12, 1px 1px 2px #01FF12"
                        color="#FFFFFF"
                        fontSize="1.875rem"
                        fontWeight="bold"
                        textAlign="left"
                        mx={"300px"}
                    >
                        <Text>Education</Text>
                    </Box>

                    <Box
                        textShadow="0px 0px 3px #01FF12, 1px 1px 2px #01FF12"
                        color="#FFFFFF"
                        fontSize="1.875rem"
                        fontWeight="bold"
                        textAlign="right"
                        mx={"300px"}
                    >
                        <Text>Experience</Text>
                    </Box>
                </Flex>
                <HStack gap={"100px"} alignItems={"flex-start"}>
                    <Box>


                        {education.map((item) => (
                            <>
                                <ResumeBox
                                    schoolName={item.schoolName}
                                    degree={item.degree}
                                    fromYear={item.fromYear}
                                    toYear={item.toYear}
                                    description={item.description}
                                />
                            </>
                        ))}
                    </Box>
                    <Box>
                        {experience.map((item) => (
                            <>
                                <ResumeBox
                                    schoolName={item.schoolName}
                                    degree={item.degree}
                                    fromYear={item.fromYear}
                                    toYear={item.toYear}
                                    description={item.description}
                                />
                            </>
                        ))}
                    </Box>
                </HStack>
            </VStack>


        </Box>
    )
}

export default Resume;
