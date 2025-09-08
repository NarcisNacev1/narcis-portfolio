import { Box, Button, Flex, Text, useMediaQuery, HStack, IconButton, VStack, Link } from '@chakra-ui/react';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = {
        fontWeight: 'medium',
        fontSize: 'sm',
        transition: 'all 0.3s ease-in-out',
        _hover: {
            color: '#FF00CC',
            transform: 'translateY(-2px)',
        },
    };

    const socialIconStyle = {
        size: '20px',
        transition: 'all 0.3s ease-in-out',
        _hover: {
            color: '#FF00CC',
            transform: 'scale(1.2)',
        },
    };

    return (
        <MotionBox
            id="contact"
            as="footer"
            color="white"
            py={8}
            px={6}
            bg="rgba(15, 15, 25, 0.95)"
            backdropFilter="blur(16px)"
            borderTop="1px solid rgba(255, 255, 255, 0.1)"
            position="relative"
            width="100%"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Flex
                maxWidth="1200px"
                margin="0 auto"
                justifyContent="space-between"
                alignItems="center"
                direction={isMobile ? 'column' : 'row'}
                gap={8}
            >
                <VStack align={isMobile ? 'center' : 'flex-start'} spacing={2}>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, #FF00CC, #FF6B6B)"
                        bgClip="text"
                    >
                        Narcis Nacev
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                        Software Engineer
                    </Text>
                </VStack>

                {!isMobile && (
                    <HStack spacing={8}>
                        {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
                            <Text
                                key={id}
                                onClick={() => scrollToSection(id)}
                                sx={navLinks}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Text>
                        ))}
                    </HStack>
                )}

                <HStack spacing={4}>
                    <HStack spacing={3}>
                        <Link href="https://github.com/NarcisNacev1" target="_blank" _hover={{ textDecoration: 'none' }}>
                            <IconButton
                                aria-label="GitHub"
                                icon={<FiGithub />}
                                variant="ghost"
                                color="gray.400"
                                {...socialIconStyle}
                            />
                        </Link>
                        <Link href="https://linkedin.com/in/nacevnarcis" target="_blank" _hover={{ textDecoration: 'none' }}>
                            <IconButton
                                aria-label="LinkedIn"
                                icon={<FiLinkedin />}
                                variant="ghost"
                                color="gray.400"
                                {...socialIconStyle}
                            />
                        </Link>
                        <Link href="https://instagram.com/nacevnarcis" target="_blank" _hover={{ textDecoration: 'none' }}>
                            <IconButton
                                aria-label="Instagram"
                                icon={<FiInstagram />}
                                variant="ghost"
                                color="gray.400"
                                {...socialIconStyle}
                            />
                        </Link>
                    </HStack>

                    <Button
                        onClick={() => window.open('mailto:narcis.karanfilov@gmail.com')}
                        leftIcon={<FiMail />}
                        variant="outline"
                        borderColor="rgba(255, 255, 255, 0.2)"
                        bg="rgba(255, 255, 255, 0.05)"
                        color="white"
                        size="sm"
                        _hover={{
                            bg: '#FF00CC',
                            borderColor: '#FF00CC',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(255, 0, 204, 0.3)',
                        }}
                        transition="all 0.3s ease-in-out"
                    >
                        Contact
                    </Button>
                </HStack>
            </Flex>

            <Flex
                maxWidth="1200px"
                margin="20px auto 0"
                justifyContent="space-between"
                alignItems="center"
                borderTop="1px solid rgba(255, 255, 255, 0.1)"
                pt={6}
                direction={isMobile ? 'column' : 'row'}
                gap={4}
            >
                <Text fontSize="sm" color="gray.500">
                    © {new Date().getFullYear()} Narcis Nacev. All rights reserved.
                </Text>

                <HStack spacing={2}>
                    <Text fontSize="sm" color="gray.500">
                        Made with
                    </Text>
                    <FiHeart color="#FF00CC" size="14px" />
                    <Text fontSize="sm" color="gray.500">
                        using React & Chakra UI
                    </Text>
                </HStack>
            </Flex>
        </MotionBox>
    );
};

export default Footer;