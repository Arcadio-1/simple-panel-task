import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Setting_icon = ({ className, ...props }: Props) => {
  return (
    <svg className={className} {...props} viewBox="0 0 24 24">
      <mask
        id="mask0_1_1650"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="21"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2.0005H21.2849V22.7215H2V2.0005Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_1650)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.2022 17.4405C7.4312 17.4405 7.6602 17.4695 7.8842 17.5295C8.5602 17.7115 9.1472 18.1635 9.4952 18.7705C9.7212 19.1515 9.8462 19.5965 9.8502 20.0505C9.8502 20.7005 10.3722 21.2215 11.0142 21.2215H12.2672C12.9062 21.2215 13.4282 20.7035 13.4312 20.0645C13.4272 19.3585 13.7032 18.6875 14.2082 18.1825C14.7062 17.6845 15.4022 17.3855 16.0982 17.4055C16.5542 17.4165 16.9932 17.5395 17.3802 17.7595C17.9372 18.0785 18.6482 17.8885 18.9702 17.3385L19.6342 16.2315C19.7822 15.9765 19.8252 15.6565 19.7462 15.3615C19.6682 15.0665 19.4722 14.8105 19.2082 14.6595C18.5902 14.3035 18.1492 13.7295 17.9662 13.0415C17.7852 12.3665 17.8842 11.6295 18.2372 11.0225C18.4672 10.6225 18.8042 10.2855 19.2082 10.0535C19.7502 9.7365 19.9402 9.0275 19.6252 8.4755C19.6122 8.4535 19.6002 8.4305 19.5902 8.4065L19.0042 7.3905C18.6852 6.8355 17.9752 6.6445 17.4182 6.9615C16.8162 7.3175 16.1002 7.4195 15.4122 7.2385C14.7252 7.0605 14.1492 6.6255 13.7902 6.0115C13.5602 5.6275 13.4352 5.1805 13.4312 4.7255C13.4402 4.3835 13.3202 4.0765 13.1022 3.8515C12.8852 3.6275 12.5802 3.5005 12.2672 3.5005H11.0142C10.7042 3.5005 10.4142 3.6215 10.1952 3.8395C9.9772 4.0585 9.8582 4.3495 9.8602 4.6595C9.8392 6.1215 8.6442 7.2985 7.1972 7.2985C6.7332 7.2935 6.2862 7.1685 5.8982 6.9365C5.3532 6.6265 4.6412 6.8175 4.3222 7.3725L3.6452 8.4855C3.3352 9.0235 3.5252 9.7345 4.0772 10.0555C4.8962 10.5295 5.4072 11.4135 5.4072 12.3615C5.4072 13.3095 4.8962 14.1925 4.0752 14.6675C3.5262 14.9855 3.3362 15.6925 3.6542 16.2425L4.2852 17.3305C4.4412 17.6115 4.6962 17.8145 4.9912 17.8975C5.2852 17.9795 5.6092 17.9445 5.8792 17.7945C6.2762 17.5615 6.7382 17.4405 7.2022 17.4405ZM12.2672 22.7215H11.0142C9.5452 22.7215 8.3502 21.5275 8.3502 20.0585C8.3482 19.8775 8.2962 19.6895 8.1992 19.5265C8.0422 19.2525 7.7882 19.0565 7.4952 18.9785C7.2042 18.9005 6.8852 18.9435 6.6232 19.0955C5.9952 19.4455 5.2562 19.5305 4.5802 19.3405C3.9052 19.1495 3.3222 18.6855 2.9802 18.0705L2.3552 16.9935C1.6242 15.7255 2.0592 14.1005 3.3252 13.3685C3.6842 13.1615 3.9072 12.7755 3.9072 12.3615C3.9072 11.9475 3.6842 11.5605 3.3252 11.3535C2.0582 10.6175 1.6242 8.9885 2.3542 7.7205L3.0322 6.6075C3.7532 5.3535 5.3832 4.9115 6.6542 5.6415C6.8272 5.7445 7.0152 5.7965 7.2062 5.7985C7.8292 5.7985 8.3502 5.2845 8.3602 4.6525C8.3562 3.9555 8.6312 3.2865 9.1322 2.7815C9.6352 2.2775 10.3032 2.0005 11.0142 2.0005H12.2672C12.9832 2.0005 13.6792 2.2945 14.1782 2.8055C14.6762 3.3195 14.9512 4.0245 14.9302 4.7395C14.9322 4.9005 14.9852 5.0865 15.0812 5.2495C15.2402 5.5195 15.4912 5.7095 15.7892 5.7875C16.0872 5.8615 16.3992 5.8215 16.6642 5.6645C17.9442 4.9335 19.5732 5.3715 20.3042 6.6415L20.9272 7.7205C20.9432 7.7495 20.9572 7.7775 20.9692 7.8065C21.6312 9.0575 21.1892 10.6325 19.9592 11.3515C19.7802 11.4545 19.6352 11.5985 19.5352 11.7725C19.3802 12.0415 19.3372 12.3615 19.4152 12.6555C19.4952 12.9555 19.6862 13.2045 19.9552 13.3585C20.5622 13.7075 21.0152 14.2955 21.1962 14.9745C21.3772 15.6525 21.2782 16.3885 20.9252 16.9955L20.2612 18.1015C19.5302 19.3575 17.9012 19.7925 16.6342 19.0605C16.4652 18.9635 16.2702 18.9105 16.0762 18.9055H16.0702C15.7812 18.9055 15.4842 19.0285 15.2682 19.2435C15.0492 19.4625 14.9292 19.7545 14.9312 20.0645C14.9242 21.5335 13.7292 22.7215 12.2672 22.7215Z"
          fill="black"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6451 10.4746C10.6051 10.4746 9.75909 11.3216 9.75909 12.3616C9.75909 13.4016 10.6051 14.2466 11.6451 14.2466C12.6851 14.2466 13.5311 13.4016 13.5311 12.3616C13.5311 11.3216 12.6851 10.4746 11.6451 10.4746ZM11.6451 15.7466C9.77809 15.7466 8.25909 14.2286 8.25909 12.3616C8.25909 10.4946 9.77809 8.9746 11.6451 8.9746C13.5121 8.9746 15.0311 10.4946 15.0311 12.3616C15.0311 14.2286 13.5121 15.7466 11.6451 15.7466Z"
        fill="black"
      />
    </svg>
  );
};

export default Setting_icon;