import React from "react";
import * as _ from "./style"; // 코드 분리

const Logo = ({ subTitle }) => {
  return (
    <_.LogoCover>
      <_.LogoIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.4526 8.78506C32.014 8.78506 33.3093 9.22046 33.9993 10.9621C34.4375 11.9616 35.1084 14.207 34.9851 15.275C34.9823 15.2997 34.9795 15.3252 34.9766 15.3515C34.9264 15.8119 34.8498 16.515 33.9172 17.3698C33.438 17.7258 32.5206 18.6021 32.3152 18.8896C32.1509 19.0403 31.888 19.6208 31.9866 20.738C32.0003 21.5732 32.0441 23.3751 32.1099 23.9009L32.4795 27.5155C32.548 28.1316 32.6767 29.4214 32.6438 29.6514C32.6301 29.9664 32.537 30.7276 32.2742 31.2534C32.1646 31.4998 31.8798 31.9927 31.6169 31.9927H31.5348H31.4526V8.78506ZM31.4526 8.78516C30.8913 8.78516 29.596 9.22056 28.9059 10.9622C28.4678 11.9617 27.7969 14.2071 27.9201 15.2751C27.923 15.2998 27.9258 15.3253 27.9286 15.3515C27.9788 15.812 28.0555 16.5151 28.9881 17.3699C29.4673 17.7259 30.3847 18.6022 30.59 18.8897C30.7543 19.0404 31.0172 19.6209 30.9186 20.7381C30.905 21.5733 30.8611 23.3752 30.7954 23.901L30.4257 27.5156C30.3573 28.1317 30.2286 29.4215 30.2614 29.6515C30.2751 29.9664 30.3682 30.7277 30.6311 31.2535C30.7407 31.4999 31.0254 31.9928 31.2883 31.9928H31.3705H31.4526V8.78516Z"
            fill="#85858D"
          />
          <path
            d="M28.4541 14.9049C28.3884 13.9848 28.8511 12.4267 29.1113 11.8242L33.0956 17.164C32.7013 17.7227 31.6717 17.8076 31.2061 17.7802C30.1546 17.7802 29.2756 16.8765 29.0291 16.589C28.6184 16.0961 28.4815 15.3978 28.4541 14.9049Z"
            fill="#6B6C71"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0919 7.88144C12.9902 7.90375 12.8901 7.92701 12.7917 7.95119C11.1072 8.29064 8.02235 9.61279 7.09485 12.7045C7.0127 13.0057 6.89769 13.7149 7.09485 14.1421C6.47871 14.7582 5.20537 16.237 5.04107 17.2228C4.91784 17.88 5 19.3587 6.31441 20.0159V20.1391C5.98581 20.4541 5.44361 21.6014 5.90366 23.6716C6.06796 24.1782 6.5773 25.2079 7.30023 25.2736H7.38238H7.46453C7.39607 25.9308 7.39059 27.4999 7.91636 28.5186C8.29973 29.3264 9.51009 31.0152 11.1203 31.541C11.9144 31.8422 13.8559 32.4118 15.2689 32.2804L15.3395 32.126L15.3929 32.1437L15.4743 32.3214C16.8873 32.4528 18.8288 31.8833 19.6229 31.582C21.1427 31.0056 22.4023 29.3092 22.7857 28.5014C23.3115 27.4827 23.306 25.9136 23.2375 25.2564H23.3197H23.4018C24.1248 25.1907 24.6341 24.1611 24.7984 23.6545C25.2585 21.5842 24.7163 20.4369 24.3877 20.122V19.9987C25.7021 19.3415 25.7842 17.8628 25.661 17.2056C25.4967 16.2198 24.2234 14.7411 23.6072 14.1249C23.8044 13.6977 23.6894 12.9885 23.6072 12.6873C22.6214 9.40124 19.1985 8.1142 17.6102 7.88144C16.6533 7.6821 15.507 7.67422 14.5638 7.72944C14.2341 7.74346 13.9044 7.7703 13.587 7.81395C13.395 7.83628 13.2276 7.85956 13.0919 7.88144Z"
            fill="#85858D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.681 11.7009C11.6952 9.89356 12.5714 8.40115 13.1328 7.88086C10.4382 8.24232 8.47757 10.1948 7.83406 11.1258C6.84824 12.506 6.93039 13.7273 7.0947 14.1654C6.83181 14.3954 6.19103 15.1649 5.9035 15.5209C5.31202 16.3096 5.08199 17.1092 5.04092 17.4104C4.87662 18.8562 5.82135 19.738 6.31426 19.9981V20.2035C5.78849 20.6964 5.71182 21.8329 5.7392 22.3395C5.80492 24.574 6.9167 25.2147 7.46438 25.2558C7.46438 26.0773 7.54653 27.1316 7.5876 27.556C8.04765 29.8563 10.2164 31.2528 11.2433 31.6636C14.1679 32.6494 16.8981 32.3482 17.8976 32.0744C15.7288 32.403 13.7489 31.869 13.0506 31.6636C10.9969 31.0885 9.68245 29.9247 9.35385 29.3634C8.99239 28.969 8.71033 27.4191 8.61449 26.6935C8.51591 25.9705 8.49126 24.9683 8.49126 24.5575C8.49126 24.3275 8.4365 20.1077 8.40911 18.0265C10.3807 15.8906 14.2145 15.5757 15.8849 15.6852C19.8281 15.8167 22.6486 18.1224 23.566 19.2588L23.2374 25.2558H23.2785C24.1 25.2887 24.634 24.1742 24.7983 23.6128C25.2583 21.5426 24.7161 20.4226 24.3875 20.1214V19.9981C25.5376 19.4231 25.7156 18.2182 25.7019 17.6568C25.743 16.5889 24.5655 15.1786 23.9767 14.494C24.2396 14.8555 24.3601 15.3292 24.3875 15.5209C24.5518 16.2767 24.0452 17.0133 23.7714 17.2872C23.4756 17.4843 22.1694 16.8216 21.5533 16.4657C18.563 15.0198 14.6115 15.0143 13.0096 15.2334C10.504 15.4388 8.6008 16.4793 7.95728 17.0407C7.76012 17.1393 7.68344 16.9996 7.66975 16.9175C6.97968 14.7487 8.03943 13.4945 8.65557 13.1385C9.34563 12.3827 11.6267 11.8652 12.681 11.7009ZM13.4203 28.2543C13.3519 28.2543 13.215 28.3857 13.215 28.5829C13.215 28.6377 13.2643 28.7472 13.4614 28.7472H17.3636C17.4594 28.7472 17.6429 28.7143 17.6101 28.5829C17.6101 28.4734 17.5197 28.2543 17.1582 28.2543H13.4203ZM14.6937 29.8563C14.6937 29.7878 14.7512 29.6509 14.9812 29.6509H15.8027C15.8712 29.6646 16.0081 29.7166 16.0081 29.8152C16.0081 29.8699 15.9834 29.9795 15.8849 29.9795H14.858C14.8032 29.9795 14.6937 29.9548 14.6937 29.8563ZM12.8453 18.4784C13.3656 18.5605 14.4637 18.7166 14.6937 18.6838H14.7758H16.1313H16.2135C16.4435 18.7166 17.5416 18.5605 18.0619 18.4784C19.7049 18.3141 20.6086 18.8207 20.855 19.0945C20.9372 19.204 20.9947 19.3163 20.5675 19.0534C20.1403 18.7905 19.746 18.7248 19.5406 18.7248C18.8423 18.6427 17.5827 19.1493 17.035 19.4642C17.0678 19.6285 17.1034 21.0114 17.1171 21.6823C17.15 22.2409 17.7059 22.7913 17.9797 22.9967C18.5712 23.4896 19.2668 23.6128 19.5406 23.6128C20.1978 23.6785 21.0467 23.0651 21.389 22.7502C21.0275 23.1774 20.4443 23.5033 20.1978 23.6128C19.3763 24.0729 18.1851 23.6128 17.6922 23.3253C17.6593 23.4239 17.7606 23.695 17.8154 23.8182C18.1769 24.804 17.8565 25.3243 17.6511 25.4612C17.3137 25.8133 16.8109 25.9929 16.2956 26.0754L16.2956 26.0773C16.2636 26.0817 16.2297 26.0861 16.1941 26.0903C15.942 26.1245 15.6893 26.1367 15.4537 26.1357C15.218 26.1367 14.9652 26.1245 14.713 26.0903C14.6774 26.0861 14.6435 26.0817 14.6115 26.0773L14.6116 26.0754C14.0962 25.9929 13.5934 25.8133 13.256 25.4612C13.0507 25.3243 12.7303 24.804 13.0917 23.8182C13.1465 23.695 13.2478 23.4239 13.215 23.3253C12.7221 23.6128 11.5309 24.0729 10.7094 23.6128C10.4629 23.5033 9.87963 23.1774 9.51816 22.7502C9.86046 23.0651 10.7094 23.6785 11.3666 23.6128C11.6404 23.6128 12.3359 23.4896 12.9274 22.9967C13.2013 22.7913 13.7572 22.2409 13.79 21.6823C13.8037 21.0114 13.8393 19.6285 13.8722 19.4642C13.3245 19.1493 12.0648 18.6427 11.3666 18.7248C11.1612 18.7248 10.7669 18.7905 10.3397 19.0534C9.91249 19.3163 9.97 19.204 10.0521 19.0945C10.2986 18.8207 11.2023 18.3141 12.8453 18.4784ZM23.6071 14.1243C23.4701 13.9874 23.1306 13.6971 22.8677 13.6314C22.8266 13.6177 22.7527 13.5657 22.7856 13.4671C22.7992 13.426 22.8759 13.3603 23.0731 13.426C23.1963 13.4671 23.4921 13.6068 23.6892 13.8368C23.6892 13.9052 23.6728 14.0586 23.6071 14.1243Z"
            fill="#6B6C71"
          />
        </svg>
      </_.LogoIcon>
      <_.LogoTitle>MUKGEN</_.LogoTitle>
      {subTitle && <_.LogoSubTitle>영양사 선생님</_.LogoSubTitle>}
    </_.LogoCover>
  );
};

export default Logo;