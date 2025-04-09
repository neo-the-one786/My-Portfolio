import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FiGithub, FiExternalLink} from "react-icons/fi";
import {motion} from "framer-motion";

export default function Projects() {
    const projectsData = [
        {
            image: "/Image Enhancement.png",
            projectName: "Image Enhancement App using PSO",
            projectLink: "https://github.com/neo-the-one786/PSO-Image-Enhancement",
            projectDescription:
                "Developed an image enhancement application using Particle Swarm Optimization (PSO), featuring a Jupyter Notebook implementation, Flask-based backend, Vite-powered frontend, and Anaconda project setup for database management.",
            projectTech: [
                "Jupyter",
                "React",
                "Flask",
                "NumPy",
                "pandas",
                "matplotlib",
            ],
            projectExternalLinks: {
                github: "https://github.com/neo-the-one786/PSO-Image-Enhancement",
                externalLink: "",
            },
        },
        {
            image: "/Bol Bachchan.png",
            projectName: "Realtime Chat App",
            projectLink: "https://github.com/neo-the-one786/Bol-Bachchan",
            projectDescription:
                "Developed Bol-Bachchan, a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Material UI for a polished UI. Implemented form validation, session management, password encryption, avatar selection, emoji support (React Emoji Picker), and real-time messaging using Socket.io for seamless communication.",
            projectTech: [
                "React",
                "Sockets",
                "Node.js",
                "Express",
                "MongoDB",
                "Styled Components",
                "Material UI",
                "BCrypt",
                "Sessions",
                "Form Validation",
            ],
            projectExternalLinks: {
                github: "https://github.com/neo-the-one786/Bol-Bachchan",
                externalLink: "https://github.com/neo-the-one786/Bol-Bachchan",
            },
        },
        {
            image: "/Devanagari Digit Recognition.png",
            projectName: "Devanagari Digit Recognition Model",
            projectLink: "https://github.com/neo-the-one786/Devanagari-Digit-Recognition",
            projectDescription:
                "Developed a Devanagari Digit Recognition system using Python, leveraging scikit-learn, TensorFlow, pandas, NumPy, OpenCV, and Convolutional Neural Networks (CNNs) for image processing and classification. Implemented a CNN model to accurately classify handwritten Devanagari digits.",
            projectTech: [
                "Python",
                "Jupyter",
                "scikit-learn",
                "TensforFlow",
                "pandas",
                "NumPy",
                "OpenCV",
                "CNN",
            ],
            projectExternalLinks: {
                github: "https://github.com/neo-the-one786/Devanagari-Digit-Recognition",
                externalLink: "https://github.com/neo-the-one786/Devanagari-Digit-Recognition",
            },
        },
        {
            image: "/Simplified Java.png",
            projectName: "STL and ES5 implementation in Java",
            projectLink: "https://github.com/neo-the-one786/Simplified-Java",
            projectDescription:
                "Developed an image enhancement application using Particle Swarm Optimization (PSO), featuring a Jupyter Notebook implementation, Flask-based backend, Vite-powered frontend, and Anaconda project setup for database management.",
            projectTech: [
                "Java", "Collections", "Stream API", "Lambda Expression"
            ],
            projectExternalLinks: {
                github: "https://github.com/neo-the-one786/Simplified-Java",
                externalLink: "https://github.com/neo-the-one786/Simplified-Java",
            },
        },
        {
            image: "/Virtual Machine.png",
            projectName: "Virtual Machine based on von Neumann Architecture",
            projectLink: "https://github.com/neo-the-one786/Simplified-Java",
            projectDescription:
                "Developed COAMimicry, a C-based Virtual Machine simulator with a custom ISA. Used structs and enums for opcodes, registers, and instructions, implementing a fetch-decode-execute cycle with arithmetic, logic, and data transfer operations.",
            projectTech: [
                "C", "struct", "enum"
            ],
            projectExternalLinks: {
                github: "https://github.com/neo-the-one786/Simplified-Java",
                externalLink: "https://github.com/neo-the-one786/Simplified-Java",
            },
        },
    ];
    return (
        <div className="projects" id="work">
            <motion.div
                className="title"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{duration: 0.6}}
                variants={{
                    visible: {opacity: 1, y: -50},
                    hidden: {opacity: 0, y: 0},
                }}
            >
                <h2>Some Things I’ve Built</h2>
            </motion.div>
            <div className="projects-container">
                {projectsData.map(
                    ({
                         image,
                         projectDescription,
                         projectLink,
                         projectExternalLinks,
                         projectName,
                         projectTech,
                     }) => {
                        return (
                            <motion.div
                                className="project"
                                key={projectName}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{duration: 0.6}}
                                variants={{
                                    visible: {opacity: 1, y: -50},
                                    hidden: {opacity: 0, y: 0},
                                }}
                            >
                                <div className="project-image">
                                    <div className="project-image-overlay"></div>
                                    <div className="project-image-container">
                                        <Image src={image} fill alt={projectName} quality={100}/>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <p className="project-info-overline">Featured Project</p>
                                    <a className="project-info-title" href={projectLink}>{projectName}</a>
                                    <div className="project-info-description">
                                        <p>{projectDescription}</p>
                                    </div>
                                    <ul className="project-info-tech-list">
                                        {projectTech.map((tech) => (
                                            <li className="project-info-tech-list-item" key={tech}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="project-info-links">
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.github}
                                                className="project-info-links-item-link"
                                                target="_blank"
                                            >
                                                <FiGithub/>
                                            </Link>
                                        </li>
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.externalLink}
                                                className="project-info-links-item-link"
                                            >
                                                <FiExternalLink/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    }
                )}
            </div>
        </div>
    );
}
