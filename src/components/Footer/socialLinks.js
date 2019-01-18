import React from "react";

import "./index.css";

const linkedInIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    styleName="svg"
  >
    <path
      id="in"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0C0.895431 0 0 0.895431 0 2V26C0 27.1046 0.895431 28 2 28H26C27.1046 28 28 27.1046 28 26V2C28 0.895431 27.1046 0 26 0H2ZM19.7091 23.8698H23.8592V16.5373C23.8592 12.9382 23.0828 10.1693 18.8775 10.1693C16.8571 10.1693 15.5024 11.2774 14.9479 12.3282H14.8923V10.5016H10.9092V23.8698H15.0585V17.2567C15.0585 15.5132 15.3902 13.8245 17.551 13.8245C19.6807 13.8245 19.7091 15.8186 19.7091 17.3687V23.8698ZM3.82034 6.26483C3.82034 7.5948 4.89753 8.67422 6.22866 8.67422C7.55648 8.67422 8.63543 7.5948 8.63543 6.26483C8.63543 4.93602 7.55648 3.8566 6.22866 3.8566C4.89753 3.8566 3.82034 4.93602 3.82034 6.26483ZM8.30449 23.8698H4.15127V10.5016H8.30449V23.8698Z"
      fill="#ABB1FB"
    />
  </svg>
);

const facebookIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    styleName="svg"
  >
    <path
      d="M14.9536 27.9996H2C0.895431 27.9996 0 27.1042 0 25.9996V2C0 0.895432 0.895431 0 2 0H25.9981C27.1026 0 27.9981 0.895431 27.9981 2V25.9996C27.9981 27.1042 27.1026 27.9996 25.9981 27.9996H19.3176V17.1567H22.9566L23.5019 12.931H19.3176V10.2328C19.3176 9.00964 19.6567 8.17533 21.4118 8.17533L23.6491 8.17455V4.39505C23.2623 4.34405 21.9339 4.22852 20.3882 4.22852C17.1623 4.22852 14.9536 6.19754 14.9536 9.81447V12.931H11.3042V17.1567H14.9536V27.9996Z"
      fill="#ABB1FB"
    />
  </svg>
);

const twitterIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    styleName="svg"
  >
    <path
      id="twitter"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0C0.895431 0 0 0.895431 0 2V26C0 27.1046 0.895431 28 2 28H26C27.1046 28 28 27.1046 28 26V2C28 0.895431 27.1046 0 26 0H2ZM20.9657 10.8966C20.9657 15.6356 17.3537 21.1096 10.7527 21.1096C8.72973 21.1096 6.83972 20.5146 5.25772 19.5066C5.53772 19.5416 5.82472 19.5556 6.11172 19.5556C7.79172 19.5556 9.33872 18.9816 10.5707 18.0156C9.00272 17.9876 7.67272 16.9516 7.21772 15.5236C7.43472 15.5656 7.65872 15.5866 7.88972 15.5866C8.21872 15.5866 8.53372 15.5446 8.83472 15.4606C7.19672 15.1316 5.95772 13.6756 5.95772 11.9396V11.8906C6.44072 12.1566 6.99372 12.3176 7.58172 12.3386C6.62272 11.6946 5.98572 10.5956 5.98572 9.3496C5.98572 8.6916 6.16072 8.0756 6.46872 7.5436C8.23973 9.7136 10.8857 11.1486 13.8677 11.2956C13.8117 11.0296 13.7767 10.7566 13.7767 10.4766C13.7767 8.4956 15.3867 6.8856 17.3677 6.8856C18.3967 6.8856 19.3277 7.3196 19.9857 8.0196C20.8047 7.8586 21.5747 7.5646 22.2677 7.1516C21.9947 7.9916 21.4277 8.6986 20.6857 9.1396C21.4137 9.0486 22.1067 8.8596 22.7507 8.5726C22.2677 9.2936 21.6587 9.9306 20.9587 10.4346C20.9657 10.5886 20.9657 10.7426 20.9657 10.8966Z"
      fill="#ABB1FB"
    />
  </svg>
);

const instagramIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    styleName="svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0C0.895431 0 0 0.895431 0 2V26C0 27.1046 0.895431 28 2 28H26C27.1046 28 28 27.1046 28 26V2C28 0.895431 27.1046 0 26 0H2ZM9.87516 4.06631C10.9414 4.01766 11.2819 4.00615 13.9969 4.00615C16.7118 4.00615 17.0523 4.01766 18.1185 4.06631C19.1826 4.11484 19.9093 4.28385 20.5452 4.53099C21.2025 4.78643 21.76 5.12826 22.3158 5.68401C22.8716 6.2398 23.2134 6.7973 23.4689 7.45468C23.716 8.09056 23.885 8.81726 23.9335 9.88131C23.9822 10.9476 23.9937 11.288 23.9937 14.003C23.9937 16.718 23.9822 17.0584 23.9335 18.1247C23.885 19.1887 23.716 19.9154 23.4689 20.5513C23.2134 21.2087 22.8716 21.7662 22.3158 22.322C21.76 22.8777 21.2025 23.2196 20.5452 23.475C19.9093 23.7221 19.1826 23.8912 18.1185 23.9397C17.0523 23.9883 16.7118 23.9998 13.9969 23.9998C11.2819 23.9998 10.9414 23.9883 9.87516 23.9397C8.81111 23.8912 8.0844 23.7221 7.44853 23.475C6.79115 23.2196 6.23365 22.8777 5.67786 22.322C5.1221 21.7662 4.78028 21.2087 4.52484 20.5513C4.2777 19.9154 4.10869 19.1887 4.06016 18.1247C4.01151 17.0584 4 16.718 4 14.003C4 11.288 4.01151 10.9476 4.06016 9.88131C4.10869 8.81726 4.2777 8.09056 4.52484 7.45468C4.78028 6.7973 5.1221 6.2398 5.67786 5.68401C6.23365 5.12826 6.79115 4.78643 7.44853 4.53099C8.0844 4.28385 8.81111 4.11484 9.87516 4.06631ZM18.0364 5.86568C16.9823 5.81758 16.6661 5.80738 13.9969 5.80738C11.3276 5.80738 11.0114 5.81758 9.95726 5.86568C8.98258 5.91012 8.45325 6.07298 8.10099 6.20988C7.63437 6.39123 7.30135 6.60786 6.95155 6.9577C6.60171 7.3075 6.38508 7.64052 6.20373 8.10714C6.06683 8.45941 5.90397 8.98873 5.85952 9.96341C5.81143 11.0175 5.80123 11.3337 5.80123 14.003C5.80123 16.6723 5.81143 16.9885 5.85952 18.0426C5.90397 19.0173 6.06683 19.5466 6.20373 19.8989C6.38508 20.3655 6.60175 20.6985 6.95155 21.0483C7.30135 21.3981 7.63437 21.6148 8.10099 21.7961C8.45325 21.933 8.98258 22.0959 9.95726 22.1403C11.0113 22.1884 11.3274 22.1986 13.9969 22.1986C16.6663 22.1986 16.9825 22.1884 18.0364 22.1403C19.0111 22.0959 19.5404 21.933 19.8927 21.7961C20.3593 21.6148 20.6923 21.3981 21.0421 21.0483C21.392 20.6985 21.6086 20.3655 21.79 19.8989C21.9269 19.5466 22.0897 19.0173 22.1342 18.0426C22.1823 16.9885 22.1925 16.6723 22.1925 14.003C22.1925 11.3337 22.1823 11.0175 22.1342 9.96341C22.0897 8.98873 21.9269 8.45941 21.79 8.10714C21.6086 7.64052 21.392 7.3075 21.0421 6.9577C20.6923 6.60786 20.3593 6.39123 19.8927 6.20988C19.5404 6.07298 19.0111 5.91012 18.0364 5.86568ZM13.9967 17.3352C12.1563 17.3352 10.6644 15.8433 10.6644 14.0029C10.6644 12.1625 12.1563 10.6706 13.9967 10.6706C15.8371 10.6706 17.329 12.1625 17.329 14.0029C17.329 15.8433 15.8371 17.3352 13.9967 17.3352ZM13.9967 8.86936C11.1615 8.86936 8.86321 11.1677 8.86321 14.0029C8.86321 16.8381 11.1615 19.1364 13.9967 19.1364C16.8319 19.1364 19.1302 16.8381 19.1302 14.0029C19.1302 11.1677 16.8319 8.86936 13.9967 8.86936ZM19.3331 9.8664C19.9957 9.8664 20.5328 9.32934 20.5328 8.6668C20.5328 8.00426 19.9957 7.46716 19.3331 7.46716C18.6706 7.46716 18.1335 8.00426 18.1335 8.6668C18.1335 9.32934 18.6706 9.8664 19.3331 9.8664Z"
      fill="#ABB1FB"
    />
  </svg>
);

export default [
  {
    name: "linkedIn",
    icon: linkedInIcon,
    url: "https://www.linkedin.com/company/svhealth",
  },
  {
    name: "facebook",
    icon: facebookIcon,
    url: "https://www.facebook.com/svhealthsoftware",
  },
  {
    name: "twitter",
    icon: twitterIcon,
    url: "https://twitter.com/SVHealth1",
  },
  {
    name: "instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com/sv_health/",
  },
];
