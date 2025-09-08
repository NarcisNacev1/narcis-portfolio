import { Box, Flex, Text, useDisclosure, VStack, Badge } from '@chakra-ui/react';
import { IResumeBox } from '../interfaces/resume.interface.ts';
import { FiChevronDown, FiCalendar, FiBookOpen, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ResumeBox = ({
    schoolName,
    degree,
    fromYear,
    toYear,
    description,
    type,
}: IResumeBox) => {
    const { isOpen, onToggle } = useDisclosure();

    const isWork = type === 'work';
    const backgroundGradient = isWork
        ? 'linear-gradient(135deg, rgba(255,0,204,0.08) 0%, rgba(80,0,60,0.15) 100%)'
        : 'linear-gradient(135deg, rgba(0,204,255,0.08) 0%, rgba(0,80,120,0.12) 100%)';

    const IconComponent = isWork ? FiBriefcase : FiBookOpen;

    const cardVariants = {
        closed: {
            height: 'auto',
            transition: { duration: 0.4, ease: 'easeInOut' },
        },
        open: {
            height: 'auto',
            transition: { duration: 0.4, ease: 'easeInOut' },
        },
    };

    const chevronVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 },
    };

    const contentVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.4, ease: 'easeInOut', delay: 0.1 },
        },
    };

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={cardVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <Box
                position="relative"
                width={{ base: '100%', sm: '90%', md: '80%', lg: '615px' }}
                background={backgroundGradient}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor={isWork ? 'rgba(255, 0, 204, 0.25)' : 'rgba(255, 0, 204, 0.2)'}
                borderRadius="16px"
                overflow="hidden"
                onClick={onToggle}
                _hover={{
                    borderColor: 'rgba(255, 0, 204, 0.4)',
                    boxShadow: isWork
                        ? '0 8px 32px rgba(255, 0, 204, 0.2)'
                        : '0 8px 32px rgba(255, 0, 204, 0.15)',
                }}
                transition="all 0.3s ease"
                boxShadow={isWork
                    ? '0 4px 20px rgba(0, 0, 0, 0.4)'
                    : '0 4px 20px rgba(0, 0, 0, 0.3)'}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="4px"
                    height="100%"
                    background="linear-gradient(180deg, #FF00CC 0%, rgba(255, 0, 204, 0.5) 100%)"
                />

                <Flex
                    p="24px"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack alignItems="flex-start" spacing={3} flex={1}>
                        <Flex alignItems="center" gap={3}>
                            <Box
                                p={2}
                                borderRadius="8px"
                                background={isWork
                                    ? 'rgba(255, 0, 204, 0.12)'
                                    : 'rgba(255, 0, 204, 0.1)'}
                                border="1px solid rgba(255, 0, 204, 0.2)"
                            >
                                <IconComponent color="#FF00CC" size={20} />
                            </Box>
                            <Text
                                fontSize={{ base: '1.3rem', sm: '1.6rem' }}
                                fontWeight="600"
                                color="#FFFFFF"
                                fontFamily="'Arial', cursive"
                                textShadow="0px 0px 10px rgba(255, 0, 204, 0.3)"
                            >
                                {schoolName}
                            </Text>
                        </Flex>

                        <Flex alignItems="center" gap={2}>
                            <FiCalendar color="rgba(255, 255, 255, 0.7)" size={16} />
                            <Text
                                fontSize={{ base: '0.9rem', sm: '1rem' }}
                                color="rgba(255, 255, 255, 0.7)"
                                fontWeight="500"
                            >
                                {fromYear} - {toYear}
                            </Text>
                            {toYear === 'PRESENT' && (
                                <Badge
                                    colorScheme="pink"
                                    variant="subtle"
                                    background="rgba(255, 0, 204, 0.15)"
                                    color="#FF00CC"
                                    border="1px solid rgba(255, 0, 204, 0.3)"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    fontSize="0.75rem"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    letterSpacing="0.5px"
                                >
                                    Current
                                </Badge>
                            )}
                        </Flex>
                    </VStack>

                    <motion.div
                        variants={chevronVariants}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Box
                            p={3}
                            borderRadius="full"
                            background="rgba(255, 0, 204, 0.1)"
                            border="1px solid rgba(255, 0, 204, 0.2)"
                            _hover={{
                                background: 'rgba(255, 0, 204, 0.15)',
                                borderColor: 'rgba(255, 0, 204, 0.4)',
                            }}
                            transition="all 0.2s ease"
                        >
                            <FiChevronDown color="#FF00CC" size={20} />
                        </Box>
                    </motion.div>
                </Flex>

                <motion.div variants={contentVariants}>
                    <Box px="24px" pb="24px">
                        <Box
                            width="100%"
                            height="1px"
                            background="linear-gradient(90deg, rgba(255, 0, 204, 0.3) 0%, transparent 100%)"
                            mb={4}
                        />

                        <VStack alignItems="flex-start" spacing={4}>
                            <Box>
                                <Text
                                    fontSize={{ base: '1rem', sm: '1.1rem' }}
                                    fontWeight="600"
                                    color="#FFFFFF"
                                    mb={2}
                                >
                                    {degree}
                                </Text>
                                <Text
                                    fontSize={{ base: '0.9rem', sm: '1rem' }}
                                    color="rgba(255, 255, 255, 0.8)"
                                    lineHeight="1.6"
                                    fontFamily="'Inter', sans-serif"
                                >
                                    {description}
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </motion.div>

                <Box
                    position="absolute"
                    top="50%"
                    left="-50%"
                    width="200%"
                    height="1px"
                    background="linear-gradient(90deg, transparent 0%, rgba(255, 0, 204, 0.3) 50%, transparent 100%)"
                    opacity={isOpen ? 1 : 0}
                    transition="opacity 0.3s ease"
                    transform="translateY(-50%)"
                    pointerEvents="none"
                />
            </Box>
        </motion.div>
    );
};

export default ResumeBox;