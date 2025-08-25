import { Flex, Text, useMediaQuery, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, useDisclosure } from '@chakra-ui/react';
import { navLinks } from '../styles/components/Navbar.ts';
import { FiMenu } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navbarVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 120, damping: 12 },
    },
};

const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, type: 'spring', stiffness: 100 },
    }),
};

const Navbar = () => {
    const [is1400wide] = useMediaQuery('(max-width: 1400px)');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isVisible, setIsVisible] = useState(true);
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll, lastScrollY]);

    return (
        <>
            <motion.div
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={navbarVariants}
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: isSmallScreen ? '20%' : '30%',
                    transform: 'translateX(-70%)',
                    width: 'auto',
                    padding: '0 32px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'rgba(19, 19, 19, 0.5)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    zIndex: 1000,
                }}
            >
                <Flex
                    gap={is1400wide ? '80px' : '40px'}
                    fontWeight="semibold"
                    fontSize="1.2rem"
                    alignItems="center"
                    w="100%"
                    justify="space-between"
                >
                    <Text
                        fontSize="1.5rem"
                        fontFamily="'Pacifico', cursive"
                        display="flex"
                        alignItems="center"
                    >
                        <Text color="#FF00CC">N</Text>arcis <Text color="#FF00CC">N</Text>acev
                    </Text>

                    {is1400wide ? (
                        <IconButton
                            icon={<FiMenu color="rgba(255,255,255,0.65)" />}
                            fontSize="1.5rem"
                            onClick={onOpen}
                            background="transparent"
                            _hover={{ background: 'transparent' }}
                            aria-label="Open Menu"
                        />
                    ) : (
                        <Flex gap="30px" alignItems="center">
                            <Text sx={navLinks} onClick={() => scrollToSection('home')}>Home</Text>
                            <Text sx={navLinks} onClick={() => scrollToSection('about')}>About</Text>
                            <Text sx={navLinks} onClick={() => scrollToSection('resume')}>Resume</Text>
                            <Text sx={navLinks} onClick={() => scrollToSection('skills')}>Skills</Text>
                            <Text sx={navLinks} onClick={() => scrollToSection('projects')}>Projects</Text>
                            <Text sx={navLinks} onClick={() => scrollToSection('contact')}>Contact</Text>
                        </Flex>
                    )}
                </Flex>
            </motion.div>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent
                    background="linear-gradient(180deg, #131313 0%, #1E1E1E 100%)"
                    borderLeft="1px solid rgba(255,255,255,0.1)"
                >
                    <DrawerCloseButton _focus={{ boxShadow: 'none' }} />
                    <DrawerHeader
                        color="#FF00CC"
                        fontSize="1.8rem"
                        fontFamily="'Pacifico', cursive"
                    >
                        Menu
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack align="start" spacing="32px" mt="20px">
                            {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map(
                                (link, i) => (
                                    <motion.div
                                        key={link}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        variants={menuVariants}
                                        whileHover={{ scale: 1.1, x: 5, color: '#FF00CC' }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ width: '100%' }}
                                    >
                                        <Text
                                            sx={navLinks}
                                            cursor="pointer"
                                            fontSize="1.4rem"
                                            onClick={() => {
                                                scrollToSection(link);
                                                onClose();
                                            }}
                                            _hover={{
                                                color: '#FF00CC',
                                                textShadow: '0px 0px 10px rgba(255,0,204,0.6)',
                                            }}
                                        >
                                            {link.charAt(0).toUpperCase() + link.slice(1)}
                                        </Text>
                                    </motion.div>
                                ),
                            )}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>;
        </>
    );
};

export default Navbar;
