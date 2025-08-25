// ProjectsBox.tsx
import { FiGithub, FiRotateCcw, FiInfo } from 'react-icons/fi';
import { Box, Flex, VStack, Text, Badge, Link, Icon, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const FlipCard = ({ project, index }) => {
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
            h="450px"
            style={{ perspective: '1200px' }}
            onClick={handleFlip}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.03 }}
        >
            <MotionBox
                position="relative"
                w="100%"
                h="100%"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                {/* Front */}
                <Box
                    position="absolute"
                    w="100%"
                    h="100%"
                    style={{ backfaceVisibility: 'hidden' }}
                    borderRadius="20px"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.08)"
                    backdropFilter="blur(15px) saturate(180%)"
                    border="1px solid rgba(255,255,255,0.15)"
                    boxShadow="0 12px 35px rgba(0, 0, 0, 0.6)"
                    _hover={{
                        boxShadow: '0 15px 45px rgba(255, 0, 204, 0.35)',
                        borderColor: '#FF00CC',
                    }}
                >
                    {/* Larger image */}
                    <Box position="relative" h="250px" overflow="hidden">
                        <Box
                            as="img"
                            src={project.image}
                            alt={project.name}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transition="transform 0.5s ease"
                            _hover={{ transform: 'scale(1.1)' }}
                        />
                        <Flex position="absolute" top="15px" left="15px">
                            <Badge
                                colorScheme={getStatusColor(project.status)}
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="600"
                                boxShadow="0 0 10px rgba(255,255,255,0.25)"
                                as={motion.div}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                {project.status}
                            </Badge>
                        </Flex>
                    </Box>

                    {/* Details */}
                    <VStack p={5} spacing={4} align="stretch" h="200px">
                        <Text fontSize="xl" fontWeight="bold" color="#FF00CC" noOfLines={1}>
                            {project.name}
                        </Text>
                        <Wrap spacing={2}>
                            {project.techStack.slice(0, 3).map((tech, i) => (
                                <WrapItem key={i}>
                                    <Badge bg="whiteAlpha.200" color="white" px={2} py={1} borderRadius="md" fontSize="xs">
                                        {tech}
                                    </Badge>
                                </WrapItem>
                            ))}
                        </Wrap>
                        <Flex align="center" gap={2} color="gray.300" fontSize="sm" mt="auto">
                            <Icon as={FiInfo} />
                            <Text>Click to flip</Text>
                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                                <Icon as={FiRotateCcw} />
                            </motion.div>
                        </Flex>
                    </VStack>
                </Box>

                {/* Back */}
                <Box
                    position="absolute"
                    w="100%"
                    h="100%"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    borderRadius="20px"
                    bg="rgba(15,15,25,0.85)"
                    backdropFilter="blur(15px) saturate(200%)"
                    border="1px solid rgba(255,255,255,0.15)"
                    p={6}
                    display="flex"
                    flexDirection="column"
                    justify="space-between"
                    boxShadow="0 12px 35px rgba(0, 0, 0, 0.6)"
                >
                    <VStack spacing={3} align="center">
                        <Text fontSize="xl" fontWeight="bold" color="#FF00CC">
                            {project.name}
                        </Text>
                        <Text color="gray.200" fontSize="sm" textAlign="center">
                            {project.description}
                        </Text>
                    </VStack>

                    <Flex justify="space-between" align="center" mt={6}>
                        <Link
                            href={project.githubLink}
                            isExternal
                            onClick={(e) => e.stopPropagation()}
                            display="flex"
                            align="center"
                            gap={2}
                            color="#FF00CC"
                            _hover={{ color: 'white' }}
                        >
                            <Icon as={FiGithub} />
                            <Text fontSize="sm">View Code</Text>
                        </Link>

                        <Flex align="center" gap={2} color="gray.400" fontSize="sm">
                            <Icon as={FiRotateCcw} />
                            <Text>Flip Back</Text>
                        </Flex>
                    </Flex>
                </Box>
            </MotionBox>
        </MotionBox>
    );
};
