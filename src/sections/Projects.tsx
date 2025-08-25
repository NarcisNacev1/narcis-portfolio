import { Box, Flex, VStack, Text, useMediaQuery, SimpleGrid } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { FlipCard } from '../components/ProjectsBox.tsx';
import projectsData from '../../public/project/description.json';

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const Projects = () => {
    const projects = projectsData;
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isTabletScreen] = useMediaQuery('(max-width: 1024px)');
    const [isPhoneScreen] = useMediaQuery('(max-width: 480px)');
    const [isBelow1425] = useMediaQuery('(max-width: 1425px)');

    return (
        <Box
            id="projects"
            width="90%"
            m="80px auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <VStack
                width="100%"
                alignItems="center"
                justifyContent="flex-start"
                mt={isPhoneScreen || isTabletScreen || isBelow1425 ? '20px' : '10px'}
                spacing={isBelow1425 ? '20px' : '30px'}
            >
                <MotionFlex
                    fontSize={isPhoneScreen ? '1.75rem' : isSmallScreen ? '2rem' : isBelow1425 ? '1.5rem' : '1.5rem'}
                    gap="9px"
                    letterSpacing="1.1px"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="regular"
                    fontFamily="'Pacifico', cursive"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <MotionText color="#FFFFFF">Latest</MotionText>
                    <MotionText color="#FFFFFF">Works</MotionText>
                </MotionFlex>

                <MotionFlex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={isPhoneScreen ? '1.5rem' : isSmallScreen ? '2rem' : isBelow1425 ? '2.2rem' : '2.5rem'}
                    gap="9px"
                    letterSpacing="1.1px"
                    fontWeight="medium"
                    fontFamily="'Pacifico', cursive"
                    pt="10px"
                    pb="50px"
                    flexWrap="wrap"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <MotionText color="#FFFFFF">Explore My Popular</MotionText>
                    <MotionText color="#FF00CC">Projects</MotionText>
                </MotionFlex>

                <SimpleGrid
                    columns={{ base: 1, sm: 2, lg: 3 }}
                    spacing={10}
                    w="100%"
                    maxW="1400px"
                >
                    <AnimatePresence>
                        {projects.map((project, index) => (
                            <FlipCard key={project.name} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </SimpleGrid>
            </VStack>
        </Box>
    );
};

export default Projects;
