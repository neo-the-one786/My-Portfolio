import Link from "next/link";
import "@/scss/components/_button.scss"

export function Button({text, link}: { text: string, link: string }) {
    return (
        <>
            <Link className="btn" href={link} target="_blank">
                {text}

            </Link>
        </>
    );
}