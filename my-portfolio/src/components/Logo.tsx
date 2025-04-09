import React from "react";

function Logo() {
    return (
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <title>Logo</title>
            <g>
                {/* Letter D */}
                <g id="D" transform="translate(35, 30)">
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="
                            M 5 0
                            L 5 40
                            L 20 40
                            Q 30 40, 30 20
                            Q 30 0, 20 0
                            Z

                            M 10 10
                            L 18 10
                            Q 24 10, 24 20
                            Q 24 30, 18 30
                            L 10 30
                            Z
                        "
                    />
                </g>

                {/* Outer polygon */}
                <path
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    d="
                        M 50, 5
                        L 11, 27
                        L 11, 72
                        L 50, 95
                        L 89, 73
                        L 89, 28
                        Z
                    "
                />
            </g>
        </svg>
    );
}

export default Logo;
