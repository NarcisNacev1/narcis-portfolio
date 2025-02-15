import { useState } from "react";
import { Box, Flex, VStack, Text, Button, useMediaQuery } from "@chakra-ui/react";
import ProjectsBox from "../components/ProjectsBox";
import projectsData from "../../public/project/description.json";
import { IProjectsBox } from "../interfaces/projects.interface.ts";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
    const projects: IProjectsBox[] = projectsData;
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
    const [isTabletScreen] = useMediaQuery("(max-width: 1024px)");
    const [isPhoneScreen] = useMediaQuery("(max-width: 480px)");
    const [isBelow1425] = useMediaQuery("(max-width: 1425px)");
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <Box
            id={"projects"}
            width={"90%"}
            backgroundColor={"#131313"}
            m={"50px auto"}
            display={"flex"}
            flexDirection={isPhoneScreen || isTabletScreen || isBelow1425 ? "column" : "row"}
            justifyContent={"center"}
            p={isPhoneScreen ? "15px" : "0"}
        >
            <VStack
                width={"100%"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                mt={isPhoneScreen || isTabletScreen || isBelow1425 ? "20px" : "10px"}
                spacing={isBelow1425 ? "20px" : " "}
            >
                <Flex
                    fontSize={isPhoneScreen ? "1.75rem" : isSmallScreen ? "2rem" : isBelow1425 ? "1.5rem" : "1.5rem"}
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
                    fontSize={isPhoneScreen ? "1.5rem" : isSmallScreen ? "2rem" : isBelow1425 ? "2.2rem" : "2.5rem"}
                    gap={"9px"}
                    letterSpacing={"1.1px"}
                    fontWeight={"medium"}
                    pt={"10px"}
                    pb={"50px"}
                >
                    <Text color={"#FFFFFF"}>Explore My Popular</Text>
                    <Text color={"#01FF12"}>Projects</Text>
                </Flex>

                <VStack spacing="30px" align={"center"}>
                    <AnimatePresence>
                        {displayedProjects.map((project) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: "100%" }}
                            >
                                <Box
                                    borderRadius="10px"
                                    boxShadow="0px 0px 10px 1px rgba(255, 255, 255, 0.3)"
                                    overflow="hidden"
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{ transform: "scale(1.02)" }}
                                    maxWidth="1400px"
                                    width="100%"
                                    margin="0 auto"
                                >
                                    <ProjectsBox
                                        type={project.type}
                                        name={project.name}
                                        image={project.image}
                                        techStack={project.techStack}
                                        githubLink={project.githubLink}
                                        description={project.description}
                                        status={project.status}
                                    />
                                </Box>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </VStack>

                <Flex justify="center" width="100%" pt={"20px"}>
                    <Button
                        onClick={toggleShowAll}
                        color={"#BBB"}
                        variant="outline"
                        colorScheme="#BBB"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                            bg: "#01FF12",
                            color: "black",
                            boxShadow: "0 4px 10px rgba(0, 255, 18, 0.6)",
                            transform: "scale(1.1)",
                        }}
                        size="lg"
                    >
                        {showAll ? "View Less Projects" : "View More Projects"}
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default Projects;
