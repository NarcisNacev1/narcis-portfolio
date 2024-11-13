import { Box, Flex, Text, VStack, HStack, Image, Button, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import { IProjectsBox } from "../interfaces/projects.interface.ts";
import { FaGithub } from "react-icons/fa";

const ProjectsBox = ({
                         type,
                         name,
                         image: imageUrl,
                         techStack,
                         description,
                         githubLink,
                         status,
                     }: IProjectsBox) => {
    return (
        <Box
            width="100%"
            height="auto"
            backgroundColor="#1E1E1E"
            borderRadius="10px"
            position="relative"
            overflow="hidden"
            mb={5}
            boxShadow="none"
        >
            {/* Status Badge */}
            <Box
                position="absolute"
                top="10px"
                right="10px"
                backgroundColor={status === "Finished" ? "green.500" : "yellow.500"}
                color="white"
                px="8px"
                py="4px"
                borderRadius="5px"
                fontSize="0.8rem"
                fontWeight="bold"
                zIndex="1"
            >
                {status}
            </Box>

            <Flex
                direction={{ base: "column", lg: "row" }}
                height="100%"
                width="100%"
                wrap="wrap"
            >
                {/* Image Section */}
                <Box
                    width={{ base: "100%", lg: "45%" }}
                    height={{ base: "200px", lg: "315px" }} // Set the height explicitly
                    position="relative"
                    overflow="hidden"
                    mb={{ base: 4, lg: 0 }}
                >
                    <Image
                        src={imageUrl}
                        alt={name}
                        objectFit="cover"
                        width="800px" // Set the width explicitly
                        height="415px" // Set the height explicitly
                        borderRadius="10px 0 0 10px"
                        boxShadow="none"
                    />
                </Box>

                {/* Project Details */}
                <VStack
                    align="left"
                    p={{ base: "10px", lg: "20px" }}
                    width={{ base: "100%", lg: "55%" }}
                    color="white"
                    justify="center"
                >
                    <Text fontSize={{ base: "1.5rem", lg: "2rem" }} fontWeight="bold" noOfLines={2}>
                        {name}
                    </Text>

                    <HStack width={"100%"}>
                        <Text fontSize={{ base: "1rem", lg: "1.25rem" }} color="#01FF12">
                            {type}
                        </Text>
                    </HStack>

                    {/* Description with no truncation */}
                    <Text fontSize={{ base: "0.875rem", lg: "1rem" }} color="#BBB" whiteSpace="normal" overflow="visible" textOverflow="unset">
                        {description}
                    </Text>

                    {/* Tech Stack */}
                    <Wrap spacing={2} mt={2}>
                        {techStack.split(",").map((tech, index) => (
                            <WrapItem key={index}>
                                <Text
                                    fontSize={{ base: "0.875rem", lg: "1rem" }}
                                    color="white"
                                    bg="#333"
                                    px={3}
                                    py={1}
                                    borderRadius="5px"
                                    fontWeight="light"
                                >
                                    {tech.trim()}
                                </Text>
                            </WrapItem>
                        ))}
                    </Wrap>

                    {/* GitHub Button */}
                    <HStack align="center" width="100%" mt={4}>
                        <Spacer />
                        <Button
                            as="a"
                            href={githubLink}
                            target="_blank"
                            color={"#BBB"}
                            variant="outline"
                            colorScheme="gray"
                            size="sm"
                            _hover={{
                                bg: "#01FF12",
                                color: "black",
                                boxShadow: "none",
                            }}
                            leftIcon={<FaGithub />}
                            textDecoration="none"
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
