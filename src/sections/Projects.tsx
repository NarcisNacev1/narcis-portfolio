import { Box, Flex, HStack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import ProjectsBox from "../components/ProjectsBox"; // Assume a component similar to ResumeBox exists
import projectsData from "../../public/project/description.json"; // Assume your project data is structured in a JSON file
import { IProjectsBox } from "../interfaces/projects.interface.ts"; // Ensure you have an interface for projects if needed

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
            >
                {/* Title section */}
                <Flex
                    fontSize={isPhoneScreen ? "1.75rem" : isSmallScreen ? "2rem" : "1.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    alignItems="center"
                    justifyContent="center"
                    fontWeight={"regular"}
                    mb={"10px"}
                >
                    <Text color={"#FFFFFF"}>Latest</Text>
                    <Text color={"#FFFFFF"}>Works</Text>
                </Flex>

                {/* Subtitle */}
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

                {/* Project list */}
                <HStack
                    mt={"60px"}
                    gap={{ base: "20px", sm: "40px", md: "100px" }}
                    alignItems={isPhoneScreen || isTabletScreen ? "center" : "flex-start"}
                    flexWrap={isPhoneScreen || isTabletScreen ? "wrap" : "nowrap"}
                    width={isPhoneScreen || isTabletScreen ? "90%" : " "}
                >
                    {/* Map each project to a ProjectBox component */}
                    <VStack
                        spacing="20px"
                        width="100%"
                        align="left"
                    >
                        <Box
                            width="100%"
                            p={isPhoneScreen ? "10px" : isTabletScreen ? "15px" : "0"}
                        >
                            {projects.map((project) => (
                                <ProjectsBox
                                    key={project.name}
                                    type={project.type}
                                    name={project.name}
                                    image={project.image}
                                    techStack={project.techStack}
                                    githubLink={project.githubLink}
                                    description={project.description}
                                />
                            ))}
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Projects;
