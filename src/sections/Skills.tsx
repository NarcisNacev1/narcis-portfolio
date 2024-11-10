import {Box, Flex, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import skillsData from "../../public/skills/skills.json";
import { ISkillsBox } from "../interfaces/skills.interface.ts";
import SkillsBox from "../components/SkillsBox.tsx";

const Skills = () => {
    const skills: ISkillsBox[] = skillsData;
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(max-width: 1024px)");
    const [isPhoneScreen] = useMediaQuery("(max-width: 480px)");
    const [isBelow1358px] = useMediaQuery("(max-width: 1358px)");

    const getWidthPercentage = () => {
        if (isPhoneScreen) return "100%";
        if (isTabletScreen) return "48%";
        if (isSmallScreen || isBelow1358px) return "30%";
        return "16%";
    };

    return (
        <Box
            width={"80%"}
            backgroundColor={"#131313"}
            m={"33px auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            p={isPhoneScreen ? "15px" : "0"}
        >
            <VStack
                width={"100%"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                mt={isPhoneScreen || isTabletScreen ? "20px" : "60px"}
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
                    <Text color={"#FFFFFF"}>My</Text><Text color={"#01FF12"}>Talent</Text>
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
                        <Text color={"#FFFFFF"}>Professional</Text><Text color={"#FFFFFF"}>Skills</Text>
                    </Flex>
                </Flex>
                <Flex
                    width="95%"
                    gap={"20px"}
                    p={isPhoneScreen ? "10px" : isTabletScreen ? "15px" : "0"}
                    wrap="wrap"
                    justifyContent="center"
                >
                    {skills.map((item) => (
                        <Flex key={item.skillName} width={getWidthPercentage()} justifyContent="center">
                            <SkillsBox
                                skillName={item.skillName}
                                image={item.image}
                            />
                        </Flex>
                    ))}
                </Flex>
            </VStack>
        </Box>
    );
};

export default Skills;
