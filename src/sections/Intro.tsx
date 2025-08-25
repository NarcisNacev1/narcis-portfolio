import { Box, Button, Flex, HStack, Text, VStack, useMediaQuery, useDisclosure } from '@chakra-ui/react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Sparkles } from '@react-three/drei';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { buttonStyle, iconFlexStyle, iconStyle } from '../styles/sections/intro.ts';
import { Avatar } from '../components/Avatar.tsx';
import { Suspense, useState } from 'react';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const floatVariant = {
    float: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Intro = () => {
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isTabletScreen] = useMediaQuery('(min-width: 769px)');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/intro/cv/EnglishCV.pdf';
        link.download = 'EnglishCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const AvatarCanvas = ({ width, height }: { width: string; height: string }) => {
        const [use3D, setUse3D] = useState(true);

        const grassTopTexture = useLoader(TextureLoader, '/textures/endstone1.png');
        const dirtTexture = useLoader(TextureLoader, '/textures/endstone.png');

        grassTopTexture.wrapS = grassTopTexture.wrapT = THREE.RepeatWrapping;
        grassTopTexture.repeat.set(1,1);
        grassTopTexture.magFilter = THREE.NearestFilter;
        grassTopTexture.minFilter = THREE.NearestFilter;

        dirtTexture.wrapS = dirtTexture.wrapT = THREE.RepeatWrapping;
        dirtTexture.repeat.set(1, 0.1);
        dirtTexture.magFilter = THREE.NearestFilter;
        dirtTexture.minFilter = THREE.NearestFilter;

        if (!use3D) {
            return (
                <img
                    src={'intro/bitmoji1.png'}
                    width={width}
                    height={height}
                    style={{
                        border: '4px solid #FF00CC',
                        borderRadius: '50%',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            );
        }

        return (
            <Box
                width={width}
                height={height}
                overflow={'hidden'}
                borderRadius="full"
                transition={'transform 0.3s ease-in-out'}
                _hover={{
                    transform: 'scale(1.1)',
                }}
            >
                <Canvas shadows
                    camera={{
                        position: [0, 0, 4],
                        fov: 35,
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    onError={() => {
                        console.error('3D Canvas error, falling back to image');
                        setUse3D(false);
                    }}
                >
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[2, 5, 3]} intensity={0.8} castShadow />
                    <pointLight position={[-2, 2, 2]} intensity={0.3} />

                    <Suspense fallback={
                        <Html center>
                            <div style={{ color: '#FF00CC', fontSize: '14px', fontFamily: "'Pacifico', cursive" }}>Loading...</div>
                        </Html>
                    }>
                        <Sparkles
                            count={50}
                            scale={2}
                            size={1.5}
                            speed={0.4}
                            color="#FF00CC"
                            position={[0, 0, 0]}
                        />

                        <Html position={[0, 1.5, 0]} center>
                            <Text fontSize="1.5rem" color="#FF00CC">Narcis Nacev</Text>
                        </Html>

                        <Html position={[0, -2.2, 0]} center>
                            <Button onClick={handleDownload} sx={buttonStyle}>Download Resume</Button>
                        </Html>

                        <group position={[0, -0.95, 0]}>
                            <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
                                <cylinderGeometry args={[0.8, 0.4, 0.2, 32]} />
                                <meshStandardMaterial
                                    map={dirtTexture}
                                    roughness={0.8}
                                    metalness={0}
                                />
                            </mesh>

                            <mesh position={[0, 0.125, 0]} castShadow receiveShadow>
                                <cylinderGeometry args={[0.8, 0.8, 0.005, 32]} />
                                <meshStandardMaterial
                                    map={grassTopTexture}
                                    roughness={0.8}
                                    metalness={0}
                                />
                            </mesh>

                            <Avatar position={[0, 0.15, 0]} scale={0.9} rotation={[0, 0, 0]} />
                        </group>
                    </Suspense>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 1.8}
                        minPolarAngle={Math.PI / 3}
                        target={[0, 0, 0]}
                    />
                </Canvas>
            </Box>
        );
    };

    return (
        <Box
            id={'home'}
            height={isSmallScreen ? 'auto' : '600.5px'}
            width={'80%'}
            m={'100px auto'}
            p={isSmallScreen ? '20px' : '0'}
            display={'flex'}
            flexDirection={isSmallScreen ? 'column' : 'row'}
            gap={isSmallScreen ? '50px' : '150px'}
            alignItems={'center'}
        >
            {isSmallScreen && (
                <AvatarCanvas width="500px" height="500px" />
            )}

            <VStack
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                alignItems={isSmallScreen ? 'center' : 'left'}
                textAlign={isSmallScreen ? 'center' : 'left'}
            >
                <Text
                    as={motion.p}
                    variants={itemVariants}
                    textTransform="uppercase"
                    fontSize="1.25rem"
                    letterSpacing="1.28px"
                >
                    hello, my name is
                </Text>

                <Flex
                    as={motion.div}
                    variants={itemVariants}
                    fontSize={isSmallScreen ? '2.5rem' : '4rem'}
                    gap="24px"
                    fontFamily="'Pacifico', cursive"
                    letterSpacing="1.28px"
                >
                    <Text color="#FF00CC">Narcis</Text>
                    <Text color="#FFFFFF">Nacev</Text>
                </Flex>

                <Text
                    as={motion.p}
                    variants={itemVariants}
                    fontSize="1.5rem"
                    letterSpacing="1.28px"
                    fontWeight="normal"
                >
                    Software Engineer
                </Text>

                <Text
                    as={motion.p}
                    variants={itemVariants}
                    color="#FFFFFF"
                    width={isSmallScreen ? '100%' : '43%'}
                    letterSpacing="0.48px"
                    mt="20px"
                    lineHeight="2"
                >
                    From Skopje, North Macedonia. I specialize in crafting secure and efficient backend & frontend solutions,
                    with expertise in Django, Flask, Vue js and PostgreSQL.
                    Passionate about applying modern technologies to solve real-world problems.
                </Text>

                <HStack as={motion.div} variants={itemVariants} gap="15px">
                    <Button
                        sx={buttonStyle}
                        fontFamily="'Pacifico', cursive"
                        onClick={() => handleDownload()}
                    >
                        Download Resume
                    </Button>

                    <Button
                        sx={{
                            ...buttonStyle,
                            width: { base: '135px', sm: '130px', md: '150px', lg: '175px' },
                            border: '1px solid #FF00CC',
                            backgroundColor: 'transparent',
                            _hover: { backgroundColor: 'transparent', transform: 'scale(1.1)' },
                        }}
                        fontFamily="'Pacifico', cursive"
                        onClick={() => window.open('mailto:narcis.karanfilov@gmail.com')}
                    >
                        Contact Me
                    </Button>
                </HStack>

                <HStack as={motion.div} variants={itemVariants} gap="20px">
                    <Flex sx={iconFlexStyle} as="a" href="https://github.com/NarcisNacev1" target="_blank">
                        <FiGithub style={iconStyle} />
                    </Flex>
                    <Flex sx={iconFlexStyle} as="a" href="https://mk.linkedin.com/in/nacevnarcis" target="_blank">
                        <FiLinkedin style={iconStyle} />
                    </Flex>
                    <Flex sx={iconFlexStyle} as="a" href="mailto:narcis.karanfilov@gmail.com">
                        <FiMail style={iconStyle} />
                    </Flex>
                    <Flex sx={iconFlexStyle} as="a" href="https://www.instagram.com/nacevnarcis/" target="_blank">
                        <FiInstagram style={iconStyle} />
                    </Flex>
                </HStack>
            </VStack>

            {isTabletScreen && (
                <Box alignItems={'center'} justifyContent={'center'}>
                    <motion.div variants={floatVariant} animate="float">
                        <AvatarCanvas width="500px" height="800px" />
                    </motion.div>
                </Box>
            )}
        </Box>
    );
};

export default Intro;