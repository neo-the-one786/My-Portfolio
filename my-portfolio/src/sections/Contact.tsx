import {Button} from "@/components/Button";
import {motion} from "framer-motion";

export function Contact() {
    return (
        <>
            <motion.div
                className="contact"
                id="contact"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}
            >
                <h2 className="contact-title">What&apos;s next?</h2>
                <h2 className="contact-sub-title">Get in Touch</h2>
                <p className="contact-text">
                    My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to reach out to you
                </p>
                <div className="contacts-cta">
                    <Button text="Say Hello" link="mailto:divyanshumishrathecoder1729@gmail.com"></Button>
                </div>
            </motion.div>
        </>
    );
}