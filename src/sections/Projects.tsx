import { Box, Flex, VStack, Text, useMediaQuery } from "@chakra-ui/react";
import ProjectsBox from "../components/ProjectsBox";
import projectsData from "../../public/project/description.json";
import { IProjectsBox } from "../interfaces/projects.interface.ts";

const Projects = () => {
    const projects: IProjectsBox[] = projectsData;
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(max-width: 1024px)");
    const [isPhoneScreen] = useMediaQuery("(max-width: 480px)");

    return (
        <Box
            width={"90%"}
            backgroundColor={"#131313"}
            m={"50px auto"}
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
                spacing="40px"
            >
                <Flex
                    fontSize={isPhoneScreen ? "1.75rem" : isSmallScreen ? "2rem" : "1.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    alignItems="center"
                    justifyContent="center"
                    fontWeight={"regular"}
                >
                    <Text color={"#FFFFFF"}>Latest</Text>
                    <Text color={"#FFFFFF"}>Works</Text>
                </Flex>

                <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={isPhoneScreen ? "1.5rem" : isSmallScreen ? "2rem" : "2.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    fontWeight={"medium"}
                >
                    <Text color={"#FFFFFF"}>Explore My Popular</Text><Text color={"#01FF12"}>Projects</Text>
                </Flex>

                <VStack
                    spacing="30px"
                    width={"100%"}
                    align={"center"}
                >
                    {projects.map((project) => (
                        <Box
                            key={project.name}
                            width={{ base: "100%", lg: "1359px" }}
                            height="300px"
                            borderRadius="10px"
                            boxShadow="0px 0px 10px 1px rgba(255, 255, 255, 0.3)"
                            overflow="hidden"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.02)" }}
                        >
                            <ProjectsBox
                                type={project.type}
                                name={project.name}
                                image={project.image}
                                techStack={project.techStack}
                                githubLink={project.githubLink}
                                description={project.description}
                            />
                        </Box>
                    ))}
                </VStack>
            </VStack>
        </Box>
    );
};

export default Projects;
