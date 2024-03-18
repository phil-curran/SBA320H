/* eslint-disable react/prop-types */
const CompassIcon = ({ rotation }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 26.5 26.5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="linearGradient4"
        x1="39.4"
        x2="45.1"
        y1="15.8"
        y2="25.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" />
        <stop stopOpacity="0" offset="1" />
      </linearGradient>
    </defs>
    <g>
      <path
        d="m13.2 0c-7.3-1.11e-7 -13.2 5.93-13.2 13.2 0 7.3 5.93 13.2 13.2 13.2 7.3 0 13.2-5.93 13.2-13.2 1e-6 -7.3-5.93-13.2-13.2-13.2zm-0.793 1.62v10.8h-10.8c0.389-5.8 5.01-10.4 10.8-10.8zm1.59 5.17e-4c5.8 0.39 10.4 5.01 10.8 10.8h-10.8v-10.8zm-12.4 12.4h10.8v10.8c-5.8-0.389-10.4-5.01-10.8-10.8zm12.4 0h10.8c-0.39 5.8-5.01 10.4-10.8 10.8v-10.8z"
        color="#000000"
        opacity=".992"
        strokeLinecap="round"
        strokeMiterlimit="21.2"
        style={{ stroke: "none" }}
      />
      <g opacity=".992">
        <path
          d="m0.794 13.2h24.9"
          color="#000000"
          fill="url(#linearGradient4)"
          strokeLinecap="round"
          strokeMiterlimit="21.2"
          style={{ stroke: "none" }}
        />
      </g>
      <path
        d="m13.2 4.23 6.74 16.1-6.74-4.23-6.74 4.23z"
        fill="#1abc9c"
        opacity=".992"
        strokeLinecap="round"
        strokeMiterlimit="21.2"
        strokeWidth="1.59"
        transform={`rotate(${rotation} 13.2 13.2)`}
      />
    </g>
  </svg>
);

export default CompassIcon;
