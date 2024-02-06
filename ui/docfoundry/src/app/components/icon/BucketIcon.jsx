import React from "react";

export const BucketIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-bucket"
        {...props}
    >
        <path d="M19 18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9z"></path>
        <path d="M10 12l4-6H8l4 6zm-6 0a4 4 0 0 1 7.2-2.4"></path>
    </svg>
);

export default BucketIcon;
