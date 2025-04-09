import Image from "next/image";
import {motion} from "framer-motion";

export function About() {
    return (
        <>
            <motion.div
                className="about"
                id="about"
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
                    <h2>About me</h2>
                </div>
                <div className="about-grid">
                    <div className="about-grid-info">
                        <div className="about-grid-info-text">
                            Ni Hao! My name is Divyanshu, and I am passionate about creating web applications and machine learning models. My interest in coding began when I was first introduced to the BASIC programming language back in 2015. In the winter of 2016, I had created my first "game", a minimalist and simplistic attempt at the famous Q&A TV show, Kaun Banega Crorepati. That was my first "app", if one could call it that.
                        </div>
                        <div className="about-grid-info-text">
                            Fast-forward to today, I specialise in designing and developing web applications and machine learning models.
                        </div>
                        <p className="about-grid-info-text">
                            Here are a few technologies I've worked with:
                        </p>
                        <ul className="about-grid-info-list">
                            <li className="about-grid-info-list-item">Java</li>
                            <li className="about-grid-info-list-item">Python</li>
                            <li className="about-grid-info-list-item">JavaScript</li>
                            <li className="about-grid-info-list-item">C\C++</li>
                            <li className="about-grid-info-list-item">MongoDB</li>
                            <li className="about-grid-info-list-item">PostgreSQL</li>
                            <li className="about-grid-info-list-item">Express.js</li>
                            <li className="about-grid-info-list-item">React</li>
                            <li className="about-grid-info-list-item">Node.js</li>
                            <li className="about-grid-info-list-item">Next.js</li>
                            <li className="about-grid-info-list-item">Bootstrap</li>
                            <li className="about-grid-info-list-item">TailwindCSS</li>
                            <li className="about-grid-info-list-item">Flask</li>
                            <li className="about-grid-info-list-item">Heroku</li>
                            <li className="about-grid-info-list-item">NumPy</li>
                            <li className="about-grid-info-list-item">pandas</li>
                            <li className="about-grid-info-list-item">matplotlib</li>
                            <li className="about-grid-info-list-item">TensorFlow</li>
                            <li className="about-grid-info-list-item">scikit-learn</li>
                            <li className="about-grid-info-list-item">OpenCV</li>
                            <li className="about-grid-info-list-item">NLTK</li>
                        </ul>
                    </div>
                    <div className="about-grid-photo">
                        <div className="overlay"></div>
                        <div className="overlay-border"></div>
                        <div className="about-grid-photo-container">
                            <Image src="/Profile Photo Semi Formal Zoomed.jpg" alt="pfp" fill></Image>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}