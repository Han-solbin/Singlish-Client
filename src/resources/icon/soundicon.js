import React from "react";
import { COLOR } from "../../constants";
const Soundicon = ({ size = 24, color = COLOR.WHITE }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
    strokeWidth="0.3"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V4C19 3.44772 18.5523 3 18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM6.41421 7H9V4.41421L6.41421 7ZM19.3053 13.2807C19.7026 12.897 20.3357 12.9081 20.7193 13.3053C22.4269 15.0736 22.4269 17.9264 20.7193 19.6947C20.3357 20.0919 19.7026 20.103 19.3053 19.7193C18.9081 19.3357 18.897 18.7026 19.2807 18.3053C20.2398 17.3121 20.2398 15.6879 19.2807 14.6947C18.897 14.2974 18.9081 13.6643 19.3053 13.2807ZM18 12C18 10.7639 16.5889 10.0584 15.6 10.8L12.6667 13H12C10.3431 13 9 14.3431 9 16V17C9 18.6569 10.3431 20 12 20H12.6667L15.6 22.2C16.5889 22.9416 18 22.2361 18 21V12ZM13.8667 14.6L16 13V20L13.8667 18.4C13.5205 18.1404 13.0994 18 12.6667 18H12C11.4477 18 11 17.5523 11 17V16C11 15.4477 11.4477 15 12 15H12.6667C13.0994 15 13.5205 14.8596 13.8667 14.6Z"
        fill="#ffffff"
      ></path>{" "}
    </g>
  </svg>
);
export default Soundicon;
