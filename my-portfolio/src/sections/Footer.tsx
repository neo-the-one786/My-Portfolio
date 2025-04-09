import Link from "next/link";
import React, {useEffect, useState} from "react";
import {FaRegStar} from "react-icons/fa";
import {FiGitBranch} from "react-icons/fi";

export default function Footer() {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch("https://api.github.com/repos/neo-the-one786/My-Portfolio")
            .then((response) => response.json())
            .then((json) => {
                const {stargazers_count, forks_count} = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch((e) => console.error(e));
    }, []);

    return (
        <footer>
            <Link
                href="https://github.com/neo-the-one786/My-Portfolio"
                target="_blank"
                className="footer-link"
            >
                <span className="footer-info">&copy; 2025 Portfolio. Designed and Built by Divyanshu Mishra</span>
                {githubInfo && (
                    <div className="footer-git">
                        <div className="footer-git-item">
                            <FaRegStar className="footer-git-item-icon"/>
                            <span className="footer-git-item-text">{githubInfo.stars}</span>
                        </div>
                        <div className="footer-git-item">
                            <FiGitBranch className="footer-git-item-icon"/>
                            <span className="footer-git-item-text">{githubInfo.forks}</span>
                        </div>
                    </div>
                )}
            </Link>
        </footer>
    );
}