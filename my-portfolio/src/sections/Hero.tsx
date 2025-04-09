import Link from "next/link";
import {Button} from "@/components/Button";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [, setIndex] = useState(1);
    const toRotate = ["Programmer", "Web Developer", "Data Science Enthusiast"];
    const smileys = [':)', ';)', ':P'];
    const [smileyIndex, setSmileyIndex] = useState(0);
    const period = 2000;
    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker)
        };
    }, [text])
    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    useEffect(() => {
        const smileyInterval = setInterval(() => {
            setSmileyIndex((prev) => (prev + 1) % smileys.length);
        }, 800);
        return () => clearInterval(smileyInterval);
    }, [tick, delta, smileys.length]);
    return (
        <>
            <div className="hero">
                <motion.h1
                    className="hero-title"
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.6,
                    }}
                >
                    Ni Hao! My name is
                </motion.h1>
                <motion.h2
                    className="hero-title-large"
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.75,
                    }}
                >
                    Divyanshu Mishra
                </motion.h2>
                <motion.h3
                    className="hero-title-large hero-title-sub"
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 1.05,
                    }}
                >
                    <></>
                    Welcome to my portfolio {smileys[smileyIndex]}
                </motion.h3>
                <motion.span
                    className="hero-title-large hero-title-sub"
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 1.35,
                    }}
                >
                    {text}
                </motion.span>
                <motion.p
                    className="hero-text"
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 1.35,
                    }}
                >
                    I am a coder by hobby and an engineering student with a significant amount of experience in data structures, design and analysis of algorithms, database management and warehousing, artificial intelligence, machine learning etc. I study at&nbsp;
                    <Link href="https://kiit.ac.in/" target="_blank" className="link">
                        KIIT University.
                    </Link>
                </motion.p>
                <motion.div
                    className="hero-button"
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 1.65,
                    }}
                >
                    <Button text="Check out my Resume" link="https://youtube.com/"></Button>
                </motion.div>
            </div>
        </>
    );
}