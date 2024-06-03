const navProfile = [
  {
    name: "Overview",
    link: "/",
    iconSvg: (
      <svg
        width="27px"
        height="27px"
        viewBox="0 0 24 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.15">
          <path
            d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z"
            fill="#ffffff"
          />
          <path
            d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z"
            fill="#ffffff"
          />
          <path
            d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z"
            fill="#ffffff"
          />
          <path
            d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
            fill="#ffffff"
          />
        </g>
        <path
          d="M9 9H15M9 9V15M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9ZM15 9V15M15 9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6V9ZM15 15H9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18V15Z"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },

  {
    name: "Meetings",
    link: "?tab=Meetings",
    iconSvg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M3 6.5C3 5.94772 3.44772 5.5 4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V6.5Z"
          fill="#ffffff"
        />
        <path
          d="M16 9L21 7V17L16 15M4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V6.5C3 5.94772 3.44772 5.5 4 5.5Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Blogs",
    link: "?tab=blogs",
    iconSvg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M21 18V12H16L14 15H10L8.5 12H3V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z"
          fill="#ffffff"
        />
        <path
          d="M3 12H8.5L10 15H14L16 12H21M3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V12M3 12L5.75667 4.64888C5.90304 4.25857 6.27616 4 6.693 4H17.307C17.7238 4 18.097 4.25857 18.2433 4.64888L21 12"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Photos",
    link: "?tab=photos",
    iconSvg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
          fill="#ffffff"
        />
        <path
          d="M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14.1901M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8481 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5864L15.7901 12.4679C16.4651 11.9279 17.4053 11.8855 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5301L20 14.1901M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Slideshows",
    link: "?tab=slideshows",
    iconSvg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.89999 17H18.09C19.99 17 20.99 16 20.99 14.1V2H2.98999V14.1C2.99999 16 3.99999 17 5.89999 17Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 2H22"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22L12 20V17"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22L12 20"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Activity",
    link: "?tab=activity",

    iconSvg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect
            width={24}
            height={24}
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 24 24)"
            fill=""
          />{" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.5066 6.65264C11.0199 5.26682 12.98 5.26683 13.4933 6.65264L14.1209 8.34727C14.2662 8.73956 14.6403 8.99995 15.0586 8.99995L16.5269 8.99995C17.9614 8.99995 18.6798 10.7343 17.6655 11.7487L16.1306 13.2835C15.8942 13.52 15.7915 13.8589 15.8571 14.1868L16.2262 16.0319C16.4943 17.3727 15.0333 18.3872 13.8707 17.6675L12.5263 16.8352C12.2038 16.6356 11.7961 16.6356 11.4736 16.8352L10.1292 17.6675C8.96662 18.3872 7.5056 17.3727 7.77375 16.0319L8.14279 14.1868C8.20836 13.8589 8.10574 13.52 7.86931 13.2835L6.29284 11.7071C5.29385 10.7081 6.00138 8.99995 7.41416 8.99995L8.94126 8.99995C9.35959 8.99995 9.73371 8.73956 9.87901 8.34727L10.5066 6.65264Z"
            fill="#ffffff"
          />{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "Tasks",
    link: "?tab=tasks",
    iconSvg: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect width={24} height={24} />{" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 11.9342C22 11.956 22 11.978 22 12L22 16.0658C22 16.9523 22.0001 17.7161 21.9179 18.3278C21.8297 18.9833 21.631 19.6117 21.1213 20.1213C20.6117 20.631 19.9833 20.8297 19.3278 20.9179C18.7161 21.0001 17.9523 21.0001 17.0658 21L6.93416 21C6.04768 21.0001 5.28386 21.0001 4.6722 20.9179C4.01669 20.8297 3.38834 20.631 2.87867 20.1213C2.36901 19.6117 2.17027 18.9833 2.08213 18.3278C1.9999 17.7161 1.99994 16.9523 1.99999 16.0658L1.99999 11.9342C1.99994 11.0477 1.9999 10.2839 2.08213 9.67221C2.17027 9.0167 2.36901 8.38835 2.87867 7.87868C3.38834 7.36902 4.01669 7.17028 4.6722 7.08215C5.28386 6.99991 6.04768 6.99995 6.93417 7L17 7C17.022 7 17.044 7 17.0658 7C17.9523 6.99995 18.7161 6.99991 19.3278 7.08215C19.9833 7.17028 20.6117 7.36902 21.1213 7.87868C21.631 8.38835 21.8297 9.0167 21.9179 9.67221C22.0001 10.2839 22 11.0477 22 11.9342Z"
            fill="#ffffff"
          />{" "}
          <path
            d="M19 6.04361V5.71429C19 4.21523 17.7848 3 16.2857 3H7.71429C6.21523 3 5 4.21523 5 5.71429V6.0436C5.57491 5.99987 6.22076 5.99994 6.88123 6.00001L17.1187 6.00001C17.7792 5.99994 18.4251 5.99987 19 6.04361Z"
            fill="#ffffff"
          />{" "}
        </g>
      </svg>
    ),
  },
];
export default navProfile;
