import React, {useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";


type LoaderProps = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Loader({ isLoading, setIsLoading }: LoaderProps) {
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1900);
    }, [setIsLoading]);
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loader"
                    exit={{scale: 0}}
                    key="motiondivleave"
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                    }}
                >
                    <motion.svg
                        id="logo"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                    >
                        <title>Logo</title>
                        <g>
                            <g id="K" transform="translate(35.000000, 35.000000)">
                                <motion.path
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    exit={{
                                        scale: 2,
                                    }}
                                    fill="currentColor"
                                    d="
                                        M 5 0
                                        L 5 40
                                        L 18 40
                                        Q 32 40, 32 20
                                        Q 32 0, 18 0
                                        L 5 0
                                        Z

                                        M 10 10
                                        L 18 10
                                        Q 26 10, 26 20
                                        Q 26 30, 18 30
                                        L 10 30
                                        Z
                                    "

                                />
                            </g>
                            <motion.path
                                initial={{pathLength: 0}}
                                animate={{pathLength: 1}}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                exit={{
                                    scale: 2,
                                }}
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
                            />
                        </g>
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}