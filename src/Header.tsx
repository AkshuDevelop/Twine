import React from "react";

function Header() {
  return (
    <div className="w-full h-14 bg-[#0f0f0f] flex items-center px-4">
      <div className="flex items-center w-1/4">
        <div className="pl-1 text-white mr-4">
          <svg
            className="h-8 w-5.5"
            viewBox="0 0 59 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="59" height="9" rx="4.5" fill="#D9D9D9" />
            <rect y="15" width="59" height="9" rx="4.5" fill="#D9D9D9" />
            <rect y="30" width="59" height="9" rx="4.5" fill="#D9D9D9" />
          </svg>
        </div>
        <div className="text-white ml-1">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="107"
            height="131"
            viewBox="0 0 107 131"
            fill="none"
          >
            <rect width="107" height="131" rx="53.5" fill="#FF0000" />
            <rect x="30" y="34" width="17" height="64" rx="6" fill="#D9D9D9" />
            <rect x="60" y="34" width="17" height="64" rx="6" fill="#D9D9D9" />
          </svg>
        </div>
        <div className="text-white font-[roboto] flex font-extralight subpixel-antialiased text-sm">
          <div className="font-extrabold">T</div>
          Wine
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3 ml-36">
        <div className="flex items-center w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#333] text-white h-9 w-full p-1 pl-3 rounded-s-full border-zinc-600 border-b-2"
          />
          <div className="bg-zinc-800 text-white h-9 w-14 flex items-center p-1 rounded-e-full text-sm border-zinc-600 border-b-2">
            <svg
              className="h-5 w-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 97 97"
              fill="none"
            >
              <path
                d="M93.1127 77.0682L76.8272 60.7827L64.3008 55.6075C68.4717 49.6762 70.7062 42.6001 70.6981 35.3491C70.6981 15.8575 54.8407 0 35.3491 0C15.8575 0 0 15.8575 0 35.3491C0 54.8407 15.8575 70.6981 35.3491 70.6981C42.6632 70.7065 49.7978 68.4333 55.7589 64.1953L60.9207 76.688L77.2056 92.9743C78.25 94.0188 79.4899 94.8473 80.8545 95.4126C82.2191 95.9779 83.6817 96.2689 85.1588 96.2689C86.6358 96.269 88.0984 95.9781 89.4631 95.4129C90.8277 94.8477 92.0677 94.0192 93.1122 92.9748C94.1566 91.9304 94.9852 90.6905 95.5505 89.3259C96.1158 87.9613 96.4067 86.4987 96.4068 85.0216C96.4068 83.5445 96.1159 82.0819 95.5507 80.7173C94.9855 79.3526 94.1571 78.1127 93.1127 77.0682ZM6.4271 35.3491C6.4271 19.4018 19.4018 6.4271 35.3491 6.4271C51.2963 6.4271 64.271 19.4018 64.271 35.3491C64.271 51.2963 51.2963 64.271 35.3491 64.271C19.4018 64.271 6.4271 51.2963 6.4271 35.3491ZM88.5677 88.4297C87.663 89.3324 86.4371 89.8393 85.1591 89.8393C83.8811 89.8393 82.6553 89.3324 81.7506 88.4297L66.3713 73.0505L61.5723 61.4345L73.1886 66.2335L88.5681 81.6128C89.4707 82.5175 89.9775 83.7434 89.9774 85.0213C89.9773 86.2993 89.4704 87.5251 88.5677 88.4297Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-zinc-700 w-8 h-8 border-0 rounded-full items-center justify-between flex ml-4">
        <svg
          className="h-4.5 w-4.5 mx-1.75 my-1.75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 38"
          fill="none"
        >
          <path
            d="M13.8058 24.474C15.8024 24.4717 17.7164 23.6776 19.1282 22.2659C20.5399 20.8541 21.334 18.94 21.3363 16.9435V7.53045C21.3363 5.53325 20.5429 3.61785 19.1307 2.20562C17.7184 0.793384 15.803 0 13.8058 0C11.8086 0 9.89324 0.793384 8.48101 2.20562C7.06878 3.61785 6.27539 5.53325 6.27539 7.53045V16.9435C6.27763 18.94 7.07174 20.8541 8.48349 22.2659C9.89523 23.6776 11.8093 24.4717 13.8058 24.474ZM8.78554 7.53045C8.78554 6.19898 9.31446 4.92205 10.256 3.98056C11.1974 3.03907 12.4744 2.51015 13.8058 2.51015C15.1373 2.51015 16.4142 3.03907 17.3557 3.98056C18.2972 4.92205 18.8261 6.19898 18.8261 7.53045V16.9435C18.8261 18.275 18.2972 19.5519 17.3557 20.4934C16.4142 21.4349 15.1373 21.9638 13.8058 21.9638C12.4744 21.9638 11.1974 21.4349 10.256 20.4934C9.31446 19.5519 8.78554 18.275 8.78554 16.9435V7.53045Z"
            fill="white"
          />
          <path
            d="M25.1015 12.5508V16.9435C25.1015 23.1719 20.0341 28.2392 13.8058 28.2392C7.57752 28.2392 2.51015 23.1719 2.51015 16.9435V12.5508H0V16.9435C0 24.133 5.52421 30.0555 12.5507 30.6917V37.6523H15.0609V30.6917C22.0874 30.0555 27.6116 24.133 27.6116 16.9435V12.5508H25.1015Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
