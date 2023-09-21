import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const TechLines: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-[19.60038rem] h-[22.61406rem]', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 318 367"
      fill="none"
    >
      <path
        d="M228.66 365.085L140.68 364.209L110.014 338.1L38.1493 337.384L1.03147 303.001M78.3906 320.583L46.1604 320.262L10.7342 290.978L12.1054 153.375L25.728 141.391L51.8605 141.652L58.0361 133.894L58.2737 110.048L48.793 99.7888L41.8711 95.0284L2.67222 94.6378M2.91374 70.4009L69.1163 71.0606L95.8784 95.5666L95.5434 129.185L122.753 152.523L122.098 218.197L108.056 228.613L77.5678 228.309L60.8613 243.781L60.6276 267.236L92.134 296.48L126.106 296.819L162.38 328.457M44.8351 278.416L45.2558 236.197L72.0615 212.616L89.4832 212.79L100.465 203.516L100.956 154.261L88.4306 143.58M63.4761 156.233C62.0823 156.219 44.8929 156.048 36.4724 155.964L25.4553 168.755L24.8554 228.957L30.8829 236.054L30.4738 277.1M194.837 262.318L145.621 261.827L126.282 279.228L99.7135 278.963L83.3031 264.725L83.4394 251.043L91.3649 242.521L104.867 242.655M191.195 190.737C182.484 190.65 157.658 190.403 146.334 190.29L146.708 152.762L116.523 121.966L116.909 83.2656L79.3168 52.7874L3.53237 52.0322M71.4692 37.775L106.472 37.8107L139.717 67.4637L176.738 67.8326L197.049 84.0642L269.349 84.7846L285.308 100.582M316.68 55.9346L305.897 45.2713L199.624 44.2123L186.464 53.4641L147.701 53.0779L128.285 34.5095L128.248 2.24209L71.4287 2.18408M170.407 91.2268L185.973 102.72L248.256 103.34L276.294 130.987L315.928 131.382M139.37 102.255L139.238 115.546L164.309 134.953L163.985 167.399L196.215 167.72"
        stroke="#DDDDDD"
        stroke-width="3"
      />
    </svg>
  );
};

export default TechLines;
