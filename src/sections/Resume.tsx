import { Box, Flex, HStack, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import ResumeBox from '../components/ResumeBox.tsx';
import educationData from '../../public/resume/education.json';
import experienceData from '../../public/resume/experience.json';
import { IResumeBox } from '../interfaces/resume.interface.ts';
import { motion } from 'framer-motion';

const Resume = () => {
    const education: IResumeBox[] = educationData;
    const experience: IResumeBox[] = experienceData;
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isTabletScreen] = useMediaQuery('(max-width: 1024px)');
    const [isPhoneScreen] = useMediaQuery('(max-width: 480px)');
    const [isBelow1358px] = useMediaQuery('(max-width: 1358px)');

    const headingVariant = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 120 } },
    };

    const boxVariant = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 120 },
        }),
    };

    return (
        <Box
            id="resume"
            width="90%"
            m="33px auto"
            display="flex"
            flexDirection={isPhoneScreen || isTabletScreen ? 'column' : 'row'}
            justifyContent="center"
            p={isPhoneScreen ? '15px' : '0'}
        >
            <VStack width="100%" alignItems="center" justifyContent="flex-start" mt={isPhoneScreen || isTabletScreen ? '20px' : '10px'}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headingVariant}>
                    <Flex
                        fontSize={isPhoneScreen ? '1.75rem' : isSmallScreen ? '2rem' : isTabletScreen ? '1.5rem' : '1.5rem'}
                        gap="9px"
                        letterSpacing="1.1px"
                        alignItems="center"
                        justifyContent="center"
                        mb="10px"
                        fontWeight="regular"
                        fontFamily="'Pacifico', cursive"
                    >
                        <Text color="#FFFFFF">My</Text>
                        <Text color="#FF00CC">Resume</Text>
                    </Flex>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headingVariant}>
                    <Flex direction="column" alignItems="center" justifyContent="center" gap="9px" fontWeight="medium" fontFamily="'Pacifico', cursive">
                        <Flex fontSize={isPhoneScreen ? '1.5rem' : isSmallScreen ? '2rem' : '2.5rem'} gap="9px" alignItems="center" justifyContent="center" fontWeight="medium">
                            <Text color="#FFFFFF">Real</Text>
                            <Text color="#FF00CC">Problem Solutions</Text>
                        </Flex>
                        <Text color="#FFFFFF" marginTop="-15px" fontSize={isPhoneScreen ? '1.5rem' : isSmallScreen ? '2rem' : '2.5rem'}>
                            Experience
                        </Text>
                    </Flex>
                </motion.div>

                <HStack
                    gap={{ base: '20px', sm: '40px', md: '100px' }}
                    alignItems={isPhoneScreen || isTabletScreen || isBelow1358px ? 'center' : 'flex-start'}
                    flexWrap={isPhoneScreen || isTabletScreen || isBelow1358px ? 'wrap' : 'nowrap'}
                    width={isPhoneScreen || isTabletScreen || isBelow1358px ? '90%' : ' '}
                >
                    <VStack spacing="20px" width="100%" align="left">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headingVariant}>
                            <Text
                                textShadow="0px 0px 3px #FF00CC, 1px 1px 2px #FF00CC"
                                color="#FFFFFF"
                                fontSize={{ base: '1.5rem', sm: '1.875rem' }}
                                fontWeight="bold"
                                textAlign="left"
                                width={isPhoneScreen || isTabletScreen || isBelow1358px ? '80%' : ' '}
                                px="20px"
                                pt="50px"
                                pb="50px"
                                ml={isPhoneScreen || isTabletScreen || isBelow1358px ? '0px' : '100px'}
                            >
                                Education
                            </Text>
                        </motion.div>

                        <Box width="100%" p={isPhoneScreen ? '10px' : isTabletScreen ? '15px' : '0'}>
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.schoolName}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={boxVariant}
                                >
                                    <ResumeBox
                                        schoolName={item.schoolName}
                                        degree={item.degree}
                                        fromYear={item.fromYear}
                                        toYear={item.toYear}
                                        description={item.description}
                                    />
                                </motion.div>
                            ))}
                        </Box>
                    </VStack>

                    <VStack spacing="20px" width="100%" align="left">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headingVariant}>
                            <Text
                                textShadow="0px 0px 3px #FF00CC, 1px 1px 2px #FF00CC"
                                color="#FFFFFF"
                                fontSize={{ base: '1.5rem', sm: '1.875rem' }}
                                fontWeight="bold"
                                textAlign={isPhoneScreen || isTabletScreen || isBelow1358px ? 'left' : 'right'}
                                mr={isPhoneScreen || isTabletScreen || isBelow1358px ? '100px' : '300px'}
                                width={isPhoneScreen || isTabletScreen || isBelow1358px ? '80%' : ' '}
                                pt="50px"
                                pb="50px"
                                px="20px"
                            >
                                Experience
                            </Text>
                        </motion.div>

                        <Box width={isPhoneScreen || isTabletScreen || isBelow1358px ? '100%' : ' '} p={isPhoneScreen ? '10px' : isTabletScreen ? '15px' : '0'}>
                            {experience.map((item, index) => (
                                <motion.div
                                    key={item.schoolName}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={boxVariant}
                                >
                                    <ResumeBox
                                        schoolName={item.schoolName}
                                        degree={item.degree}
                                        fromYear={item.fromYear}
                                        toYear={item.toYear}
                                        description={item.description}
                                    />
                                </motion.div>
                            ))}
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Resume;
