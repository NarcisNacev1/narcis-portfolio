import { Box, Collapse, Flex, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { IResumeBox } from "../interfaces/resume.interface.ts";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ResumeIconFlexStyle } from "../styles/sections/Resume.ts";

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
            width={"615px"}
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
                ml={"25px"}
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
                            <FiMinus
                                color={"#01FF12"}
                                fontSize={"1.6rem"}
                                style={{ height: "100%", margin: "0 auto" }}
                            />
                        ) : (
                            <FiPlus
                                color={"#01FF12"}
                                fontSize={"1.6rem"}
                                style={{ height: "100%", margin: "0 auto" }}
                            />
                        )}
                    </Box>
                </Box>
            </Flex>

            <VStack alignItems={"left"} gap={4}>
                <Text fontSize={"1.5rem"}>{schoolName}</Text>

                <Box
                    alignItems="flex-start"
                    height={isOpen ? "100px" : "10px"}
                    overflow={"hidden"}
                    transition="height 0.9s ease, opacity 0.9s ease-in-out"
                >
                    <Collapse in={isOpen}>
                        <HStack
                            justifyContent={"space-between"}
                            fontFamily={"'Kalam', cursive"}
                            fontSize={"1.5rem"}
                            opacity={isOpen ? 1 : 0}
                        >
                            <Text>{degree}</Text>
                            <Text pr={3}>
                                {fromYear} - {toYear}
                            </Text>
                        </HStack>
                        <Text fontSize={"1.125rem"}>{description}</Text>
                    </Collapse>
                </Box>
            </VStack>
        </Box>
    );
};

export default ResumeBox;
