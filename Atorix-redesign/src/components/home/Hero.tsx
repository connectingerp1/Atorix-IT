import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Stage, Sphere } from '@react-three/drei';
import { useTheme } from '../ThemeProvider';

// 3D Model Component
const SphereModel = () => {
  const meshRef = useRef<any>(null);
  const { theme } = useTheme();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  const primaryColor = theme === 'light' ? [0, 0.4, 0.9] : [0.1, 0.5, 1];
  const secondaryColor = theme === 'light' ? [0.87, 0.08, 0.53] : [0.9, 0.1, 0.6];

  return (
    <group position={[0, 0, 0]} scale={1.5}>
      {/* Main sphere with wireframe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#0065e1"
          wireframe
          emissive="#0065e1"
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Orbital spheres */}
      {[1, 2, 3].map((i) => (
        <mesh key={i} position={[i * 0.8 - 1.2, i * 0.4 - 0.6, i * 0.2 - 0.3]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={i % 2 === 0 ? primaryColor : secondaryColor} emissive={i % 2 === 0 ? "#0065e1" : "#e01587"} />
        </mesh>
      ))}
    </group>
  );
};

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent dark:from-transparent dark:via-primary-900/10 dark:to-transparent z-0">
        <div className={`w-full h-full ${theme === 'light' ? 'bg-hero-pattern-light' : 'bg-hero-pattern-dark'}`}></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight bg-clip-text text-transparent animated-gradient mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              ATORIX IT SOLUTIONS
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The Best SAP S4 HANA Implementation Partner in India. We provide robust, business process solutions for successful clients.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact" className="btn-primary">
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/services" className="btn-outline">
                Our Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500 dark:text-primary-400">100+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500 dark:text-primary-400">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center sm:col-span-1 col-span-2">
                <p className="text-3xl font-bold text-primary-500 dark:text-primary-400">9+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Model area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y }}
            className="h-[400px] sm:h-[500px] w-full"
          >
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <Stage environment="city" intensity={0.3} contactShadow shadows>
                  <SphereModel />
                </Stage>
              </PresentationControls>
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
          />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
