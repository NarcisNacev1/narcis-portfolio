import { Box, Flex, Text, VStack, Grid } from "@chakra-ui/react";
import skillsData from "../../public/skills/skills.json";
import { ISkillsBox } from "../interfaces/skills.interface.ts";
import SkillsBox from "../components/SkillsBox.tsx";

const Skills = () => {
    const skills: ISkillsBox[] = skillsData;

    return (
        <Box
            width={"80%"}
            backgroundColor={"#131313"}
            m={"33px auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            p={{ base: "15px", md: "0" }}
        >
            <VStack
                width={"100%"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                mt={{ base: "20px", md: "60px" }}
            >
                <Flex
                    fontSize={{ base: "1.75rem", md: "2rem", lg: "2.5rem" }}
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
                    fontSize={{ base: "1.5rem", md: "2rem" }}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    fontWeight={"medium"}
                >
                    <Flex
                        fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
                        gap={"9px"}
                        letterSpacing={"1.1px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        fontWeight={"medium"}
                    >
                        <Text color={"#FFFFFF"}>Professional</Text><Text color={"#FFFFFF"}>Skills</Text>
                    </Flex>
                </Flex>
                <Grid
                    width="95%"
                    gap={"20px"}
                    p={{ base: "10px", md: "15px", lg: "0" }}
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
                    justifyContent="center"
                >
                    {skills.map((item) => (
                        <SkillsBox
                            key={item.skillName}
                            skillName={item.skillName}
                            image={item.image}
                        />
                    ))}
                </Grid>
            </VStack>
        </Box>
    );
};

export default Skills;
