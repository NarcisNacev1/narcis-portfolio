import { Box, Flex, Text, VStack, HStack, Image, Button, Spacer } from "@chakra-ui/react";
import { IProjectsBox } from "../interfaces/projects.interface.ts";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon

const ProjectsBox = ({
                         type,
                         name,
                         image: imageUrl,
                         techStack,
                         description,
                         githubLink,
                     }: IProjectsBox) => {
    return (
        <Box
            width={{ base: "100%", lg: "1359px" }}
            height="300px"
            backgroundColor="#1E1E1E"
            borderRadius="10px"
            position="relative"
            overflow="hidden"
        >
            <Flex height="100%">
                {/* Project Image on Left */}
                <Box
                    width={{ base: "40%", lg: "45%" }}
                    height="100%"
                    position="relative"
                    overflow="hidden"
                    mr={{ base: "5%", lg: "0" }}
                >
                    <Image
                        src={imageUrl}
                        alt={name}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        borderRadius="10px 0 0 10px"
                        position="absolute"
                        left="0"
                        top="0"
                    />
                </Box>

                {/* Project Details on Right */}
                <VStack
                    align="left"
                    p={{ base: "10px", lg: "20px" }}
                    width={{ base: "60%", lg: "55%" }}
                    color="white"
                    justify="center"
                >
                    <Text fontSize={{ base: "1.5rem", lg: "2rem" }} fontWeight="bold">
                        {name}
                    </Text>

                    <HStack width={"100%"}>
                        <Text fontSize={{ base: "1rem", lg: "1.25rem" }} color="#01FF12">
                            {type}
                        </Text>
                    </HStack>

                    <Text fontSize={{ base: "0.875rem", lg: "1rem" }} color="#BBB">
                        {description}
                    </Text>

                    {/* GitHub Button next to Tech Stack */}
                    <HStack align="center" width="100%">
                        <Text fontSize={{ base: "0.875rem", lg: "1rem" }} fontWeight={"bold"} color="#BBB">
                            {techStack}
                        </Text>
                        <Spacer /> {/* Spacer pushes the button to the right */}
                        <Button
                            as="a"
                            href={githubLink}
                            target="_blank"
                            color={"#BBB"}
                            variant="outline"
                            colorScheme="#BBB"
                            size="sm"
                            _hover={{
                                bg: "#01FF12",
                                color: "black",
                                boxShadow: "0 4px 10px rgba(0, 255, 18, 0.6)", // Glowing effect on hover
                            }} // Green hover effect with glowing shadow
                            leftIcon={<FaGithub />}
                        >
                            GitHub
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
        </Box>
    );
};

export default ProjectsBox;
