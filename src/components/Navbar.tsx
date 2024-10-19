import {Box, Flex, Text} from "@chakra-ui/react";
import {navLinks} from "../styles/components/Navbar.ts";

const Navbar = () => {
    return (
        <>
            <Box
                border={"0px solid red"}
                height={"56px"}
                width={"1700px"}
                backgroundColor={"#131313"}
                m={"33px auto"}
                display={"flex"}
                gap={"150px"}
                alignItems={"center"}
            >
                <Text
                    fontSize={"2rem"}
                    fontFamily={"'Pacifico', cursive"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Text color={"#01FF12"}>N</Text>arcis <Text color={"#01FF12"}>N</Text>acev
                </Text>

                <Flex
                    gap={"40px"}
                    fontWeight={"semibold"}
                    fontSize={"1.5rem"}
                    marginLeft={"auto"}
                    alignItems={"center"}
                >
                    <Text sx={navLinks}>Home</Text>
                    <Text sx={navLinks}>About</Text>
                    <Text sx={navLinks}>Services</Text>
                    <Text sx={navLinks}>Resume</Text>
                    <Text sx={navLinks}>Skills</Text>
                    <Text sx={navLinks}>Projects</Text>
                    <Text sx={navLinks}>Contact</Text>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar;