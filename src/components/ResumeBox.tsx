import { Box, Collapse, Flex, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { IResumeBox } from "../interfaces/resume.interface.ts";
import { FiMinus, FiPlus } from "react-icons/fi";
import { presentStyles, ResumeIconFlexStyle } from "../styles/sections/Resume.ts";

const ResumeBox = ({
                       schoolName,
                       degree,
                       fromYear,
                       toYear,
                       description,
                   }: IResumeBox) => {
    const { isOpen, onToggle } = useDisclosure();
    const rotationDegree = isOpen ? 180 : 0;

    return (
        <Box
            border={"1px solid #01FF12"}
            borderLeft={"none"}
            width={{ base: "100%", sm: "90%", md: "80%", lg: "615px" }}
            p={"15px 0"}
            textShadow="0px 0px 3px #01FF12, 1px 1px 2px #01FF12"
            color={"#FFFFFF"}
            position={"relative"}
            height={"fit-content"}
        >
            <Flex
                width={"100%"}
                justifyContent={"flex-end"}
                mt={"-43px"}
                ml={{ base: "0", sm: "25px" }}
            >
                <Box
                    backgroundColor={"#131313"}
                    width={"55px"}
                    height={"55px"}
                    border={"1px solid #01FF12"}
                    borderRadius={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={ResumeIconFlexStyle}
                    onClick={onToggle}
                    cursor={"pointer"}
                    transition="transform 0.3s ease"
                    transform={`rotate(${rotationDegree}deg)`}
                >
                    <Box width={"100%"} height={"100%"}>
                        {isOpen ? (
                            <FiMinus color={"#01FF12"} fontSize={"1.6rem"} style={{ height: "100%", margin: "0 auto" }} />
                        ) : (
                            <FiPlus color={"#01FF12"} fontSize={"1.6rem"} style={{ height: "100%", margin: "0 auto" }} />
                        )}
                    </Box>
                </Box>
            </Flex>

            <VStack alignItems={"left"} spacing={4}>
                <Text fontSize={{ base: "1.2rem", sm: "1.5rem" }}>{schoolName}</Text>

                <Box alignItems="flex-start" overflow={"hidden"}>
                    <Collapse
                        in={isOpen}
                        animateOpacity
                        startingHeight={5}
                        transition={{ enter: { duration: 1.5 }, exit: { duration: 1.5 } }}
                    >
                        <HStack
                            justifyContent={"space-between"}
                            fontFamily={"'Kalam', cursive"}
                            fontSize={{ base: "1rem", sm: "1.5rem" }}
                            opacity={isOpen ? 1 : 0}
                            width={"100%"}
                        >
                            <Text pb={1} width={"70%"} fontSize={{ base: "1rem", sm: "1.5rem" }}>{degree}</Text>

                            <Flex
                                alignItems={"center"}
                                justifyContent={"flex-end"}
                                width={"auto"}
                                flexDirection={{ base: "column", sm: "row" }}
                                gap={{ base: "5px", sm: "2px" }}
                            >
                                <Text
                                    width={"100%"}
                                    minWidth={"100px"}
                                    textAlign={"center"}
                                    fontSize={{ base: "0.875rem", sm: "1.25rem" }}
                                >
                                    {fromYear}
                                </Text>
                                <Text> - </Text>
                                <Text
                                    width={"1001%"}
                                    minWidth={"100px"}
                                    textAlign={"center"}
                                    fontSize={{ base: "0.875rem", sm: "1.25rem" }}
                                    style={toYear === "PRESENT" ? presentStyles : {}}
                                    mr={4}
                                >
                                    {toYear}
                                </Text>
                            </Flex>
                        </HStack>
                        <Text fontSize={{ base: "0.875rem", sm: "1.125rem" }}>{description}</Text>
                    </Collapse>
                </Box>
            </VStack>
        </Box>
    );
};

export default ResumeBox;
