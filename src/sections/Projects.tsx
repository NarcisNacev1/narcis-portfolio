import { useState } from 'react';
import {
    Box,
    Flex,
    VStack,
    Text,
    useMediaQuery,
    SimpleGrid,
    Badge,
    Link,
    Icon,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiRotateCcw, FiInfo } from 'react-icons/fi';

import projectsData from '../../public/project/description.json';

const MotionBox = motion(Box);

const FlipCard = ({ project, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
        case 'finished': return 'green';
        case 'in progress': return 'yellow';
        case 'beta': return 'purple';
        default: return 'gray';
        }
    };

    return (
        <MotionBox
            position="relative"
            w="100%"
            h="400px"
            style={{ perspective: '1000px' }}
            cursor="pointer"
            onClick={handleFlip}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <MotionBox
                position="relative"
                w="100%"
                h="100%"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                {/* Front Face */}
                <Box
                    position="absolute"
                    w="100%"
                    h="100%"
                    style={{ backfaceVisibility: 'hidden' }}
                    borderRadius="15px"
                    overflow="hidden"
                    bg="linear-gradient(145deg, #1a1a2e, #16213e)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    boxShadow="0 10px 30px rgba(255, 255, 255, 0.1)"
                    _hover={{
                        boxShadow: '0 15px 40px rgba(255, 0, 204, 0.3)',
                    }}
                    transition="box-shadow 0.3s ease"
                >
                    <Box position="relative" h="200px" overflow="hidden">
                        <Box
                            as="img"
                            src={project.image}
                            alt={project.name}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transition="transform 0.3s ease"
                            _groupHover={{ transform: 'scale(1.05)' }}
                        />
                        <Flex
                            position="absolute"
                            top="15px"
                            left="15px"
                            right="15px"
                            justify="space-between"
                            align="flex-start"
                        >
                            <Badge
                                colorScheme={getStatusColor(project.status)}
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="600"
                            >
                                {project.status}
                            </Badge>
                        </Flex>
                    </Box>

                    <VStack p={4} spacing={3} align="stretch" justify="space-between" h="150px">
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color="#FF00CC"
                            lineHeight="1.2"
                        >
                            {project.name}
                        </Text>

                        <Wrap spacing={2}>
                            {project.techStack.slice(0, 3).map((tech, i) => (
                                <WrapItem key={i}>
                                    <Badge
                                        bg="whiteAlpha.100"
                                        color="white"
                                        px={2}
                                        py={1}
                                        borderRadius="md"
                                        fontSize="xs"
                                        border="1px solid"
                                        borderColor="whiteAlpha.300"
                                    >
                                        {tech}
                                    </Badge>
                                </WrapItem>
                            ))}
                            {project.techStack.length > 3 && (
                                <WrapItem>
                                    <Badge
                                        bg="rgba(255, 0, 204, 0.2)"
                                        color="#FF00CC"
                                        px={2}
                                        py={1}
                                        borderRadius="md"
                                        fontSize="xs"
                                    >
                                        +{project.techStack.length - 3}
                                    </Badge>
                                </WrapItem>
                            )}
                        </Wrap>

                        <Flex align="center" gap={2} color="gray.400" fontSize="sm" mt="auto">
                            <Icon as={FiInfo} />
                            <Text>Click to flip & read more</Text>
                            <MotionBox
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            >
                                <Icon as={FiRotateCcw} />
                            </MotionBox>
                        </Flex>
                    </VStack>
                </Box>

                {/* Back Face */}
                <Box
                    position="absolute"
                    w="100%"
                    h="100%"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    borderRadius="15px"
                    bg="linear-gradient(145deg, #1a1a2e, #16213e)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    p={6}
                    display="flex"
                    flexDirection="column"
                    justify="space-between"
                    boxShadow="0 10px 30px rgba(255, 255, 255, 0.1)"
                >
                    <VStack spacing={4} align="center" textAlign="center">
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color="#FF00CC"
                        >
                            {project.name}
                        </Text>
                        <Badge
                            colorScheme="pink"
                            variant="subtle"
                            px={3}
                            py={1}
                            borderRadius="full"
                        >
                            {project.type}
                        </Badge>
                    </VStack>

                    <Box flex="1" py={4}>
                        <Text
                            color="gray.300"
                            fontSize="sm"
                            lineHeight="1.6"
                            textAlign="center"
                        >
                            {project.description}
                        </Text>
                    </Box>

                    <VStack spacing={4}>
                        <Box>
                            <Text fontSize="sm" fontWeight="semibold" color="white" mb={2} textAlign="center">
                                Tech Stack:
                            </Text>
                            <Wrap justify="center" spacing={2}>
                                {project.techStack.map((tech, i) => (
                                    <WrapItem key={i}>
                                        <Badge
                                            bg="whiteAlpha.200"
                                            color="white"
                                            px={2}
                                            py={1}
                                            borderRadius="md"
                                            fontSize="xs"
                                        >
                                            {tech}
                                        </Badge>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </Box>

                        <Flex justify="space-between" align="center" w="100%">
                            <Link
                                href={project.githubLink}
                                isExternal
                                onClick={(e) => e.stopPropagation()}
                                display="flex"
                                align="center"
                                gap={2}
                                color="#FF00CC"
                                _hover={{ color: 'white' }}
                                transition="color 0.2s"
                            >
                                <Icon as={FiGithub} />
                                <Text fontSize="sm">View Code</Text>
                            </Link>

                            <Flex align="center" gap={2} color="gray.400" fontSize="sm">
                                <Icon as={FiRotateCcw} />
                                <Text>Click to flip back</Text>
                            </Flex>
                        </Flex>
                    </VStack>
                </Box>
            </MotionBox>
        </MotionBox>
    );
};

const Projects = () => {
    const projects = projectsData; // Replace with your actual import
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isTabletScreen] = useMediaQuery('(max-width: 1024px)');
    const [isPhoneScreen] = useMediaQuery('(max-width: 480px)');
    const [isBelow1425] = useMediaQuery('(max-width: 1425px)');

    return (
        <Box
            id="projects"
            width="90%"
            m="50px auto"
            display="flex"
            flexDirection={isPhoneScreen || isTabletScreen || isBelow1425 ? 'column' : 'row'}
            justifyContent="center"
            p={isPhoneScreen ? '15px' : '0'}
        >
            <VStack
                width="100%"
                alignItems="center"
                justifyContent="flex-start"
                mt={isPhoneScreen || isTabletScreen || isBelow1425 ? '20px' : '10px'}
                spacing={isBelow1425 ? '20px' : '30px'}
            >
                <Flex
                    fontSize={isPhoneScreen ? '1.75rem' : isSmallScreen ? '2rem' : isBelow1425 ? '1.5rem' : '1.5rem'}
                    gap="9px"
                    letterSpacing="1.1px"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="regular"
                    fontFamily="'Pacifico', cursive"
                >
                    <Text color="#FFFFFF">Latest</Text>
                    <Text color="#FFFFFF">Works</Text>
                </Flex>

                <Flex
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
                >
                    <Text color="#FFFFFF">Explore My Popular</Text>
                    <Text color="#FF00CC">Projects</Text>
                </Flex>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={8}
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