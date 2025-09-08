import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ISkillsBox } from '../interfaces/skills.interface.ts';

const MotionBox = motion.create(Box);

const SkillsBox = ({ skillName, image }: ISkillsBox) => {
    return (
        <MotionBox
            w="150px"
            h="150px"
            borderRadius="20px"
            bg="rgba(255, 255, 255, 0.05)"
            backdropFilter="blur(12px)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.25)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                boxShadow: '0 12px 40px rgba(255, 0, 204, 0.6)',
            }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <Image
                src={image}
                alt={skillName}
                boxSize="70px"
                mb="10px"
                filter="drop-shadow(0 0 4px rgba(255,0,204,0.5))"
            />
            <Text
                color="#fff"
                fontWeight="semibold"
                fontSize="1rem"
                textAlign="center"
            >
                {skillName}
            </Text>
        </MotionBox>
    );
};

export default SkillsBox;
