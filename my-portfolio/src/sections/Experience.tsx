import {useRef, useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";

export function Experience() {
    const [selected, setSelected] = useState(0)
    const sliderRef = useRef(null);
    const underlineStyle = {
        top: `${selected * 2.5}rem`,
    };
    const experiences = [
        {
            name: "Qutopia",
            url: "https://ksac.kiit.ac.in/societies/qutopia/",
            role: "Web Developer",
            start: "2023",
            end: "2024",
            shortDescription: [
                "This was my first 'work' as a member of the Tech Team of my college's quizzing society",
                "I created a simple landing page for the society",
                "I also created a minimalistic portal for practising quizzes",
            ]
        },
        {
            name: "Upcoming",
            url: "smth",
            role: "Intern",
            start: "TBA",
            end: "TBA",
            shortDescription: [
                "This is my work description",
                "Great innit?"
            ]
        },
        {
            name: "Upcoming",
            url: "smth",
            role: "Intern",
            start: "TBA",
            end: "TBA",
            shortDescription: [
                "This is my work description",
                "Great innit?"
            ]
        },
    ];
    return (
        <>
            <motion.div
                className="experience"
                id="experience"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{duration: 0.6}}
                variants={{
                    visible: {opacity: 1, y: -50},
                    hidden: {opacity: 0, y: 0},
                }}
            >
                <div className="title">
                    <h2>Where I&apos;ve worked: </h2>
                </div>
                <div className="container">
                    <ul className="exp-slider">
                        <ul className="exp-slider" ref={sliderRef}>
                            <div className="underline" style={underlineStyle}/>
                            {
                                experiences.map((experience, index) => (
                                    <li
                                        className={`exp-slider-item ${index === selected ? "exp-slider-item-selected" : ""}`}
                                        onClick={() => setSelected(index)}
                                        key={experience.name}
                                    >
                                        <span>{experience.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </ul>
                    <div className="exp-details">
                        <div className="exp-details-position">
                            <h3>
                                <span>{experiences[selected].role}</span>
                                <span className="exp-details-position-company">
                                    &nbsp;@&nbsp;
                                    <Link className="link" href={experiences[selected].url}>
                                        {experiences[selected].name}{" "}
                                    </Link>
                                </span>
                            </h3>
                            <p className="exp-details-range">
                                {experiences[selected].start} - {experiences[selected].end}
                            </p>
                            <ul className="exp-details-list">
                                {
                                    experiences[selected].shortDescription.map((description, index) => (
                                            <li key={index} className="exp-details-list-item">
                                                {description}
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}