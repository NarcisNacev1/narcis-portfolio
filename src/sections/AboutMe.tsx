import { Box, Flex, Image, Text, useMediaQuery, VStack, HStack } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { AboutMeIconFlexStyle } from '../styles/sections/AboutMe.ts';
import aboutmeData from '../../public/aboutme/aboutme.json';
import { IAboutInterface } from '../interfaces/about.interface.ts';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isTabletScreen] = useMediaQuery('(max-width: 1024px)');
    const [isPhoneScreen] = useMediaQuery('(max-width: 480px)');
    const [isBelow1220px] = useMediaQuery('(max-width: 1220px)');
    const aboutme: IAboutInterface[] = aboutmeData;

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
    };

    return (
        <Box
            id={'about'}
            border="0px solid red"
            height="auto"
            width={'80%'}
            m={'33px auto'}
            display={'flex'}
            flexDirection={isPhoneScreen || isTabletScreen || isBelow1220px ? 'column' : 'row'}
            alignItems={isPhoneScreen || isTabletScreen || isBelow1220px ? 'flex-start' : 'center'}
            p={isPhoneScreen ? '15px' : '0'}
        >
            <motion.div
                variants={itemVariants}
                style={{ flexShrink: 0, alignSelf: 'center' }}
            >
                <Image
                    border={'20px solid #1E1E1E'}
                    src={'intro/bitmoji1.png'}
                    width={isPhoneScreen ? '200px' : isSmallScreen ? '300px' : isTabletScreen ? '350px' : '660px'}
                    height="auto"
                    borderRadius={'20px'}
                    margin={isPhoneScreen || isTabletScreen || isBelow1220px ? '0 auto 20px' : '0px 60px 100px 0px'}
                    transition={'transform 0.3s ease-in-out'}
                    _hover={{ transform: 'scale(1.1)' }}
                />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                style={{ flexBasis: '60%', maxWidth: isPhoneScreen || isTabletScreen || isBelow1220px ? '100%' : '43%' }}
            >
                <VStack
                    mb={'100px'}
                    alignItems={isPhoneScreen || isTabletScreen || isBelow1220px ? 'center' : 'left'}
                    spacing={-2}
                    lineHeight="1.2"
                    textAlign={isPhoneScreen || isTabletScreen || isBelow1220px ? 'center' : 'left'}
                >
                    <motion.div variants={itemVariants}>
                        <Text fontSize={'1.25rem'} letterSpacing={'0.48px'} fontWeight={'normal'} mb={'20px'} mt={'0px'}>
                            About Me
                        </Text>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Box
                            fontSize={'2.5rem'}
                            letterSpacing={'1.1px'}
                            fontFamily="'Pacifico', cursive"
                            fontWeight={'normal'}
                            m={isPhoneScreen || isTabletScreen || isBelow1220px ? '0 auto' : ' '}
                        >
                            <Flex gap={'13px'}>
                                <Text color={'#FF00CC'}>Driven,</Text>
                                <Text color={'#FFFFFF'}>innovative</Text>
                            </Flex>
                            <Flex gap={'13px'}>
                                <Text color={'#FFFFFF'}>Software</Text>
                                <Text color={'#FF00CC'}>Engineer</Text>
                            </Flex>
                        </Box>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Text color={'#FFFFFF'} width={'100%'} letterSpacing={'0.48px'} mt={'20px'} lineHeight={'2.3'}>
                            Although I am relatively new to professional software development,
                            I bring a solid foundation in backend & frontend engineering and hands-on experience from internships.
                            I am passionate about continuous learning and dedicated to leveraging technology to solve complex challenges.
                            My focus is on delivering secure, scalable, and impactful solutions that drive meaningful results.
                        </Text>
                    </motion.div>

                    {aboutme.map((item) => (
                        <motion.div variants={itemVariants} key={item.id}>
                            <Box margin={isPhoneScreen || isTabletScreen || isBelow1220px ? '0 auto' : ' '}
                                width={isPhoneScreen || isTabletScreen || isBelow1220px ? '80%' : ' '}
                            >
                                <HStack spacing={isPhoneScreen ? '10px' : '20px'} mt={'20px'}>
                                    <Flex sx={AboutMeIconFlexStyle}>
                                        <FiCheckCircle size={'20px'}/>
                                    </Flex>
                                    <Text mt={'15px'} ml={'5px'}>{item.content}</Text>
                                </HStack>
                            </Box>
                        </motion.div>
                    ))}
                </VStack>
            </motion.div>
        </Box>
    );
};

export default AboutMe;
