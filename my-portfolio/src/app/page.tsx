'use client'

import "@/scss/index.scss"
import Navbar from "@/sections/Navbar"
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Contact} from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Projects from "@/sections/Projects";
import {useState} from "react";
import Head from "next/head";
import Loader from "@/components/Loader";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const handleLoaderLoaded = () => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 450);
    };
    return (
        <>
            <div className="app">
                <Head>
                    <title>Divanshu Mishra</title>
                    <link rel="icon" type="image/png" href="/DM_Logo_Fin.png"/>
                </Head>
                {showContent && (
                    <>
                        <Navbar/>
                        <SocialIcons/>
                        <Email/>
                        <main>
                            <Hero/>
                            <About/>
                            <Experience/>
                            <Projects/>
                            <Contact/>
                        </main>
                        <Footer/>
                    </>
                )}
                <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded}/>
            </div>
        </>
    );
}
