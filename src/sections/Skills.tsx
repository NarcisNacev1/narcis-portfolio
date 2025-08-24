import { Box, Flex, Text, VStack, Grid } from '@chakra-ui/react';
import skillsData from '../../public/skills/skills.json';
import { ISkillsBox } from '../interfaces/skills.interface.ts';
import SkillsBox from '../components/SkillsBox.tsx';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills: ISkillsBox[] = skillsData;

    const headingVariant = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 120 } },
    };

    const skillVariant = (direction: 'left' | 'right') => ({
        hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, type: 'spring', stiffness: 120, duration: 0.7 },
        }),
    });

    const floatVariant = {
        animate: {
            y: [0, -10, 0],
            transition: { repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' },
        },
    };

    return (
        <Box id="skills" width="80%" m="33px auto" display="flex" flexDirection="column" justifyContent="center" p={{ base: '15px', md: '0' }}>
            <VStack width="100%" alignItems="center" justifyContent="flex-start" mt={{ base: '20px', md: '60px' }}>
                {/* Title */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headingVariant}>
                    <Flex fontSize={{ base: '1.75rem', md: '2rem' }} gap="9px" alignItems="center" justifyContent="center" mb="10px" fontWeight="regular" fontFamily="'Pacifico', cursive">
                        <Text color="#FFFFFF">My</Text>
                        <Text color="#FF00CC">Talent</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" justifyContent="center" fontSize={{ base: '1.5rem', md: '2rem' }} gap="9px" letterSpacing="1.1px" fontWeight="medium" fontFamily="'Pacifico', cursive">
                        <Flex fontSize={{ base: '1.5rem', md: '2rem', lg: '2.5rem' }} gap="9px" alignItems="center" justifyContent="center" fontWeight="medium">
                            <Text color="#FFFFFF">Professional</Text>
                            <Text color="#FFFFFF">Skills</Text>
                        </Flex>
                    </Flex>
                </motion.div>

                {/* Skills Grid */}
                <Grid
                    mt="40px"
                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
                    gap="30px"
                    placeItems="center"
                >
                    {skills.map((item, index) => (
                        <motion.div
                            key={item.skillName}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={skillVariant(index % 2 === 0 ? 'left' : 'right')}
                            animate={floatVariant.animate}
                        >
                            <SkillsBox skillName={item.skillName} image={item.image} />
                        </motion.div>
                    ))}
                </Grid>
            </VStack>
        </Box>
    );
};

export default Skills;
