import {FiGithub, FiLinkedin} from "react-icons/fi";
import Link from "next/link";
import {SiCodechef, SiCodeforces, SiGeeksforgeeks, SiHackerrank, SiIndeed, SiKaggle, SiLeetcode, SiStackoverflow} from "react-icons/si";

export default function SocialIcons() {
    const socialIcons = [
        {name: "LinkedIn", icon: <FiLinkedin></FiLinkedin>, link: "https://www.linkedin.com/in/divyanshu-mishra-neo-the-one786/"},
        {name: "Indeed", icon: <SiIndeed></SiIndeed>, link: "https://profile.indeed.com/p/divyanshum-m23m0mh"},
        {name: "GitHub", icon: <FiGithub></FiGithub>, link: "https://github.com/neo-the-one786"},
        {name: "Kaggle", icon: <SiKaggle></SiKaggle>, link: "https://www.kaggle.com/neotheone786"},
        {name: "LeetCode", icon: <SiLeetcode></SiLeetcode>, link: "https://leetcode.com/u/neo_the_one786/"},
        {name: "Codeforces", icon: <SiCodeforces></SiCodeforces>, link: "https://codeforces.com/profile/neo_the_one786"},
        {name: "CodeChef", icon: <SiCodechef></SiCodechef>, link: "https://www.codechef.com/users/neo_the_one786"},
        {name: "Hackerrank", icon: <SiHackerrank></SiHackerrank>, link: "https://www.hackerrank.com/profile/neo_the_one786"},
        {name: "GeeksForGeeks", icon: <SiGeeksforgeeks></SiGeeksforgeeks>, link: "https://www.geeksforgeeks.org/user/neo_the_one786/"},
        {name: "StackOverflow", icon: <SiStackoverflow></SiStackoverflow>, link: "https://stackoverflow.com/users/21681013/neo-the-one786"},
    ];
    return (
        <>
            <div className="social-icons">
                <ul className="social-icons-list">
                    {
                        socialIcons.map(({name, icon, link}) => (
                            <li key={name} title={name} className="social-icons-list-item">
                                <Link href={link} className="social-icons-list-item-link" target="_blank">{icon}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    );
}