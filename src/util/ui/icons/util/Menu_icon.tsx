import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Menu_icon = ({ className, ...props }: Props) => {
  return (
    <svg className={className} {...props} viewBox="0 0 18 18">
      <path d="M18 0H0V2H18V0Z" fill="#616161" />
      <path d="M18 16H0V18H18V16Z" fill="#616161" />
      <path d="M18 8H0V10H18V8Z" fill="#616161" />
    </svg>
  );
};

export default Menu_icon;
