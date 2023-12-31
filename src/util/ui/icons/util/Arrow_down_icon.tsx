import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Arrow_down_icon = ({ className, ...props }: Props) => {
  return (
    <svg className={className} {...props} viewBox="0 0 16 17">
      <g clipPath="url(#clip0_0_1805)">
        <path
          d="M4 6.5L8 10.5L12 6.5"
          stroke="#4D4D4D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1805">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow_down_icon;
