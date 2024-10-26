import { Flex,  Image, Text } from "@chakra-ui/react";
import { ISkillsBox } from "../interfaces/skills.interface.ts";
import { SkillsFlexStyle } from "../styles/sections/Skills.ts";

const SkillsBox = ({
                       skillName,
                       image: imageUrl,
                   }: ISkillsBox) => {
    return (
            <Flex
                sx={SkillsFlexStyle}
                flexDirection={"row"}
                padding="16px"
                width="100px"
                height={"100px"}
                textAlign="center"
                mt={"20px"}
                backgroundColor="#1E1E1E"
                borderRadius="10px"
                _hover={{
                    transform: "scale(1.1)",
                    backgroundColor: "#2A2A2A",
                }}
                transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out"
            >
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={skillName}
                        boxSize="50px"
                        objectFit="contain"
                        margin="0 auto"
                        mb="10px"
                    />
                )}
                <Text fontSize="1.25rem" fontWeight="bold" color="#FFFFFF">
                    {skillName}
                </Text>
            </Flex>
    );
};

export default SkillsBox;
