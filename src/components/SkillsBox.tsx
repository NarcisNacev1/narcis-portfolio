import { Flex, Image, Text } from "@chakra-ui/react";
import { ISkillsBox } from "../interfaces/skills.interface.ts";
import { SkillsFlexStyle } from "../styles/sections/Skills.ts";

const SkillsBox = ({
                       skillName,
                       image: imageUrl,
                   }: ISkillsBox) => {
    return (
        <Flex
            sx={SkillsFlexStyle}
            flexDirection="column"
            padding={{ base: "8px", sm: "12px", md: "16px", lg: "20px" }}
            width={{ base: "70px", sm: "90px", md: "110px", lg: "140px" }}
            height={{ base: "70px", sm: "90px", md: "110px", lg: "140px" }}
            textAlign="center"
            mt={{ base: "15px", sm: "20px" }}
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
                    boxSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
                    objectFit="contain"
                    margin="0 auto"
                    mb={{ base: "5px", sm: "10px" }}
                />
            )}
            <Text
                fontSize={{ base: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.25rem" }}
                fontWeight="bold"
                color="#FFFFFF"
            >
                {skillName}
            </Text>
        </Flex>
    );
};

export default SkillsBox;
