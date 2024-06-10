"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout'
export default function Liste ()
{return(
        <DefaultLayout>

    <div className="xl:pl-60  pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
  <nav className="xl:pl-60  top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800">
    <div className="flex lg:items-stretch xl:max-w-6xl xl:mx-auto">
      <div className="flex flex-1 items-stretch h-14">
        <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex lg:hidden navbar-item-label py-2 px-3">
          <span className="inline-flex justify-center items-center w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"
              />
            </svg>
          </span>
        </div>
        <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 hidden lg:flex xl:hidden navbar-item-label py-2 px-3">
          <span className="inline-flex justify-center items-center w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          </span>
        </div>
        <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex navbar-item-label my-2 mx-3">
          <form action="#">
            <div className="mb-6 last:mb-0">
              <div className="">
                <div className="relative">
                  <input
                    name="search"
                    placeholder="Search"
                    className="px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none h-12 border-0 bg-transparent "
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-none items-stretch flex h-14 lg:hidden">
        <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex navbar-item-label py-2 px-3">
          <span className="inline-flex justify-center items-center w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="hidden max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800">
        <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 lg:py-2 lg:px-3 ">
          <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
            <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                />
              </svg>
            </span>
            <span className="px-2 transition-colors ">Sample menu</span>
            <span className="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </span>
          </div>
          <div className="lg:hidden text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700">
            <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 ">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Item One</span>
              </div>
            </div>
            <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 ">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Item Two</span>
              </div>
            </div>
            <hr className="hidden lg:block lg:my-0.5 dark:border-slate-700 border-t border-gray-100" />
            <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 ">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Item Last</span>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 lg:py-2 lg:px-3 ">
          <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
            <div className="w-6 h-6 mr-3 inline-flex">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com"
                alt="doe.doe.doe@example.com"
                className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
              />
            </div>
            <span className="px-2 transition-colors ">John Doe</span>
            <span className="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </span>
          </div>
          <div className="lg:hidden text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700">
            <a
              className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 "
              href="/admin-one-react-tailwind/profile"
            >
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">My Profile</span>
              </div>
            </a>
            <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 ">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Settings</span>
              </div>
            </div>
            <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 ">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Messages</span>
              </div>
            </div>
            <hr className="hidden lg:block lg:my-0.5 dark:border-slate-700 border-t border-gray-100" />
            <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 ">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                    />
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Log Out</span>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 lg:w-16 lg:justify-center">
          <div className="flex items-center ">
            <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"
                />
              </svg>
            </span>
            <span className="px-2 transition-colors lg:hidden">Light/Dark</span>
          </div>
        </div>
        <a
          target="_blank"
          className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 lg:w-16 lg:justify-center"
          href="https://github.com/justboil/admin-one-react-tailwind"
        >
          <div className="flex items-center ">
            <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </span>
            <span className="px-2 transition-colors lg:hidden">GitHub</span>
          </div>
        </a>
        <a
          target="_blank"
          className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 lg:w-16 lg:justify-center"
          href="https://github.com/justboil/admin-one-vue-tailwind"
        >
          <div className="flex items-center ">
            <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"
                />
              </svg>
            </span>
            <span className="px-2 transition-colors lg:hidden">
              Vue version
            </span>
          </div>
        </a>
        <div className="block lg:flex items-center relative cursor-pointer navbar-item-label dark:text-white dark:hover:text-slate-400 py-2 px-3 lg:w-16 lg:justify-center">
          <div className="flex items-center ">
            <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                />
              </svg>
            </span>
            <span className="px-2 transition-colors lg:hidden">Log out</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <aside className="-left-60 lg:left-0 lg:hidden xl:flex zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden">
    <div className="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
      <div className="aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900">
        <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
          <b className="font-black">One</b>
        </div>
        <button className="hidden lg:inline-block xl:hidden p-3">
          <span className="inline-flex justify-center items-center w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars">
        <ul className="">
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/dashboard"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/tables"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none aside-menu-item-active font-bold">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 aside-menu-item-active font-bold">
                Tables
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/forms"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Forms
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/ui"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">UI</span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/responsive"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Responsive
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Styles
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/profile"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Profile
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/login"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Login
              </span>
            </a>
          </li>
          <li>
            <a
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="/admin-one-react-tailwind/error"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Error
              </span>
            </a>
          </li>
          <li>
            <div className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white">
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1  ">
                Dropdown
              </span>
              <span className="inline-flex justify-center items-center w-12 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                  />
                </svg>
              </span>
            </div>
            <ul className="aside-menu-dropdown hidden">
              <li>
                <div className="flex cursor-pointer py-3 px-6 text-sm aside-menu-item dark:text-slate-300 dark:hover:text-white">
                  <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                    Item One
                  </span>
                </div>
              </li>
              <li>
                <div className="flex cursor-pointer py-3 px-6 text-sm aside-menu-item dark:text-slate-300 dark:hover:text-white">
                  <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                    Item Two
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a
              target="_blank"
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="https://github.com/justboil/admin-one-react-tailwind"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                GitHub
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              href="https://github.com/justboil/admin-one-vue-tailwind"
            >
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"
                  />
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Vue version
              </span>
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <div className="flex cursor-pointer py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600">
            <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
              <svg
                viewBox="0 0 24 24"
                width={18}
                height={18}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                />
              </svg>
            </span>
            <span className="grow text-ellipsis line-clamp-1 pr-12 ">
              Logout
            </span>
          </div>
        </li>
      </ul>
    </div>
  </aside>
  <section className="p-6 xl:max-w-6xl xl:mx-auto">
    <section className=" mb-6 flex items-center justify-between">
      <div className="flex items-center justify-start">
        <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="inline-block"
          >
            <path
              fill="currentColor"
              d="M21,19A1,1 0 0,1 20,20H19V18H21V19M15,20V18H17V20H15M11,20V18H13V20H11M7,20V18H9V20H7M4,20A1,1 0 0,1 3,19V18H5V20H4M19,4H5A2,2 0 0,0 3,6V8H5L11,8H13L19,8H21V6C21,4.89 20.11,4 19,4M5,14H3V16H5V14M5,10H3V12H5V10M21,10H19V12H21V10M21,14H19V16H21V14M11,16V14H13V16H11M11,12V10H13V12H11"
            />
          </svg>
        </span>
        <h1 className="leading-tight text-3xl">Tables</h1>
      </div>
      <a
        target="_blank"
        className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-gray-800 dark:border-white ring-gray-300 dark:ring-gray-400 bg-gray-800 text-white dark:bg-white dark:text-black hover:bg-gray-700 hover:dark:bg-slate-100  text-sm px-3 py-1"
        href="https://github.com/justboil/admin-one-react-tailwind"
      >
        <span className="inline-flex justify-center items-center w-6 h-6 ">
          <svg
            viewBox="0 0 24 24"
            width={16}
            height={16}
            className="inline-block"
          >
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </span>
        <span className="px-1">Star on GitHub</span>
      </a>
    </section>
    <div className="px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 bg-blue-500 border-blue-500 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <span className="inline-flex justify-center items-center w-10 md:w-5 h-10 md:h-5 md:mr-2">
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16A2,2 0 0,0 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z"
              />
            </svg>
          </span>
          <span className="text-center md:text-left md:py-2">
            <b>Responsive table.</b> Collapses on mobile
          </span>
        </div>
        <button
          className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-white ring-gray-200 dark:ring-gray-500 bg-white text-black hover:bg-gray-100  p-1"
          type="button"
        >
          <span className="inline-flex justify-center items-center w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div className="bg-white flex mb-6 rounded-2xl flex-col dark:bg-slate-900/70">
      <div className="flex-1  undefined">
        <table>
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Company</th>
              <th>City</th>
              <th>Progress</th>
              <th>Created</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b-0 lg:w-6 before:hidden">
                <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Howell-Hand"
                    alt="Howell Hand"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
              </td>
              <td data-label="Name">Howell Hand</td>
              <td data-label="Company">Kiehn-Green</td>
              <td data-label="City">Emelyside</td>
              <td data-label="Progress" className="lg:w-32">
                <progress
                  className="flex w-2/5 self-center lg:w-full"
                  max={100}
                  value={70}
                >
                  70
                </progress>
              </td>
              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  Mar 3, 2023
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b-0 lg:w-6 before:hidden">
                <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope-Howe"
                    alt="Hope Howe"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
              </td>
              <td data-label="Name">Hope Howe</td>
              <td data-label="Company">Nolan Inc</td>
              <td data-label="City">Paristown</td>
              <td data-label="Progress" className="lg:w-32">
                <progress
                  className="flex w-2/5 self-center lg:w-full"
                  max={100}
                  value={68}
                >
                  68
                </progress>
              </td>
              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  Dec 1, 2023
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b-0 lg:w-6 before:hidden">
                <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nelson-Jerde"
                    alt="Nelson Jerde"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
              </td>
              <td data-label="Name">Nelson Jerde</td>
              <td data-label="Company">Nitzsche LLC</td>
              <td data-label="City">Jailynbury</td>
              <td data-label="Progress" className="lg:w-32">
                <progress
                  className="flex w-2/5 self-center lg:w-full"
                  max={100}
                  value={49}
                >
                  49
                </progress>
              </td>
              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  May 18, 2023
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b-0 lg:w-6 before:hidden">
                <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kim-Weimann"
                    alt="Kim Weimann"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
              </td>
              <td data-label="Name">Kim Weimann</td>
              <td data-label="Company">Brown-Lueilwitz</td>
              <td data-label="City">New Emie</td>
              <td data-label="Progress" className="lg:w-32">
                <progress
                  className="flex w-2/5 self-center lg:w-full"
                  max={100}
                  value={38}
                >
                  38
                </progress>
              </td>
              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  May 4, 2023
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b-0 lg:w-6 before:hidden">
                <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Justice-O-Reilly"
                    alt="Justice O'Reilly"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
              </td>
              <td data-label="Name">Justice O'Reilly</td>
              <td data-label="Company">Lakin-Muller</td>
              <td data-label="City">New Kacie</td>
              <td data-label="Progress" className="lg:w-32">
                <progress
                  className="flex w-2/5 self-center lg:w-full"
                  max={100}
                  value={38}
                >
                  38
                </progress>
              </td>
              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  Mar 27, 2023
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 mr-3 last:mr-0 mb-3 undefined p-1"
                    type="button"
                  >
                    <span className="inline-flex justify-center items-center w-6 h-6 ">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
            <div className="flex items-center justify-start undefined -mb-3 flex-wrap">
              <button
                className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-200 dark:bg-slate-700 hover:bg-gray-200 hover:dark:bg-slate-700 mr-3 last:mr-0 mb-3 undefined text-sm p-1"
                type="button"
              >
                <span className="px-2">1</span>
              </button>
              <button
                className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 mr-3 last:mr-0 mb-3 undefined text-sm p-1"
                type="button"
              >
                <span className="px-2">2</span>
              </button>
              <button
                className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 mr-3 last:mr-0 mb-3 undefined text-sm p-1"
                type="button"
              >
                <span className="px-2">3</span>
              </button>
              <button
                className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 mr-3 last:mr-0 mb-3 undefined text-sm p-1"
                type="button"
              >
                <span className="px-2">4</span>
              </button>
            </div>
            <small className="mt-6 md:mt-0">Page 1 of 4</small>
          </div>
        </div>
      </div>
    </div>
    <section className="pt-6 mb-6 flex items-center justify-between">
      <div className="flex items-center justify-start">
        <span className="inline-flex justify-center items-center w-6 h-6 mr-2">
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="inline-block"
          >
            <path
              fill="currentColor"
              d="M22.11 21.46L2.39 1.73L1.11 3L3.22 5.11C3.08 5.38 3 5.68 3 6V18C3 19.11 3.9 20 5 20H18.11L20.84 22.73L22.11 21.46M10.11 12H5V8H6.11L10.11 12M11 18H5V14H11V18M13 18V14.89L16.11 18H13M13 9.8L7.2 4H19C20.11 4 21 4.89 21 6V17.8L19 15.8V14H17.2L15.2 12H19V8H13V9.8Z"
            />
          </svg>
        </span>
        <h1 className="leading-tight text-2xl">Empty variation</h1>
      </div>
      <button
        className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800  p-1"
        type="button"
      >
        <span className="inline-flex justify-center items-center w-6 h-6 ">
          <svg
            viewBox="0 0 24 24"
            width={16}
            height={16}
            className="inline-block"
          >
            <path
              fill="currentColor"
              d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
            />
          </svg>
        </span>
      </button>
    </section>
    <div className="px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 bg-red-500 border-red-500 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <span className="inline-flex justify-center items-center w-10 md:w-5 h-10 md:h-5 md:mr-2">
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M22.11 21.46L2.39 1.73L1.11 3L3.22 5.11C3.08 5.38 3 5.68 3 6V18C3 19.11 3.9 20 5 20H18.11L20.84 22.73L22.11 21.46M10.11 12H5V8H6.11L10.11 12M11 18H5V14H11V18M13 18V14.89L16.11 18H13M13 9.8L7.2 4H19C20.11 4 21 4.89 21 6V17.8L19 15.8V14H17.2L15.2 12H19V8H13V9.8Z"
              />
            </svg>
          </span>
          <span className="text-center md:text-left md:py-2">
            <b>Empty card.</b> When there's nothing to show
          </span>
        </div>
        <button
          className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-white ring-gray-200 dark:ring-gray-500 bg-white text-black hover:bg-gray-100  p-1"
          type="button"
        >
          <span className="inline-flex justify-center items-center w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="inline-block"
            >
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div className="bg-white flex  rounded-2xl flex-col dark:bg-slate-900/70">
      <div className="flex-1 p-6 undefined">
        <div className="text-center py-24 text-gray-500 dark:text-slate-400">
          <p>Nothing's here…</p>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-2 px-6 xl:max-w-6xl xl:mx-auto">
    <div className="block md:flex items-center justify-between">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <b>
          ©2024,{" "}
          <a href="https://justboil.me/" rel="noreferrer" target="_blank">
            JustBoil.me
          </a>
          .
        </b>{" "}
        Get more with{" "}
        <a
          href="https://tailwind-react.justboil.me/dashboard"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600"
        >
          Premium version
        </a>
      </div>
      <div className="md:py-2">
        <a href="https://justboil.me" rel="noreferrer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={250}
            height={100}
            viewBox="0 0 250 100"
            className="w-auto h-8 md:h-6 mx-auto"
          >
            <path
              fill="currentColor"
              d="M1.157,85.323a16.088,16.088,0,0,0-.865,4.431,7.265,7.265,0,0,0,.432,2.594,10.327,10.327,0,0,0,3.242,5.62,15.634,15.634,0,0,0,2.7,1.189,9.272,9.272,0,0,0,2.378.216,12.225,12.225,0,0,0,7.241-2.486,20.191,20.191,0,0,0,5.188-4.431A34.34,34.34,0,0,0,26.014,85c1.081-2.053,1.837-4,2.81-5.728,0.756-2.162,1.729-4.107,2.378-6.052q1.135-2.918,1.945-5.512a5.088,5.088,0,0,1,.324-0.973,36.294,36.294,0,0,0,1.837-5.079L36.714,56.9c0.216-1.081.864-2.269,1.081-3.458,0.432-1.945.216-1.621,2.486-3.026a4.822,4.822,0,0,0,.865-0.54,23.217,23.217,0,0,0,2.81-1.513,76.926,76.926,0,0,1,13.077-5.62,21.183,21.183,0,0,1,5.836-.865,11.968,11.968,0,0,1,4.755.865,0.65,0.65,0,0,1,.432.108,1.372,1.372,0,0,0,.648.108,0.988,0.988,0,0,0,.757-0.324V42.418a1.742,1.742,0,0,0-.432-0.756,4.576,4.576,0,0,1-.757-0.54,8.575,8.575,0,0,1-1.729-.865,21.494,21.494,0,0,0-5.187-.757c-0.432,0-.973.108-1.405,0.108a28.926,28.926,0,0,0-6.593,1.081A74.714,74.714,0,0,0,43.63,44.8l-2.053.865-1.189.648H40.172a0.271,0.271,0,0,1-.324-0.216V45.984a1.839,1.839,0,0,1,.108-0.756c0.324-.865.432-1.945,0.756-3.026,0.432-1.4.757-3.026,1.081-4.539a14.662,14.662,0,0,1,.648-3.134c0.757-3.783,1.405-7.241,2.378-10.807a0.817,0.817,0,0,0-.108-0.432c0.108-2.486,1.081-4.755,1.189-7.241L46.981,10V9.563a0.65,0.65,0,0,1,.108-0.432c0.216-.648.108-1.3,0.324-1.945a0.837,0.837,0,0,1,.865-0.757h0.54a0.817,0.817,0,0,0,.432-0.108c2.594-.54,5.079-0.973,7.673-1.4a39.862,39.862,0,0,1,4-.54,1.371,1.371,0,0,1,.648-0.108,1.388,1.388,0,0,1,1.081.432H63.3a1.1,1.1,0,0,0,.973-0.648V3.619A2.055,2.055,0,0,0,63.192,1.89,5.67,5.67,0,0,0,62,1.133,3.05,3.05,0,0,0,60.382.7c-0.216,0-.432.108-0.756,0.108-1.837.324-3.458,0.54-5.4,0.757-1.4.216-2.81,0.54-4.647,0.757-0.216,0-.324.108-0.54,0.108a1.743,1.743,0,0,1-.973-0.324,4.314,4.314,0,0,0-1.405-.757H46.332a0.594,0.594,0,0,0-.54.324,2.05,2.05,0,0,0-.756.865,6.3,6.3,0,0,1-1.621,1.189L37.9,4.808c-3.458.648-6.7,1.621-10.375,2.27a93.654,93.654,0,0,0-14.049,4.971,5.662,5.662,0,0,1-2.81,1.081H10.56c-0.108,0-.108.108-0.216,0.324l0.324,0.865a1.891,1.891,0,0,0,1.513.756,2.109,2.109,0,0,0,.757-0.108c0.432,0,.649-0.108,1.081-0.108a7.346,7.346,0,0,0,1.837-.865c2.594-1.081,5.3-1.729,7.673-2.486,6.16-1.729,12.428-2.7,18.48-4.107,0,0.108.108,0.108,0.216,0.108A0.817,0.817,0,0,0,42.658,7.4a0.582,0.582,0,0,1,.432.432,0.974,0.974,0,0,1,.108.54c-0.757,1.945-.865,4.215-1.621,6.16a13.36,13.36,0,0,0-.216,1.945,4.644,4.644,0,0,0-.216,1.3L37.9,30.746c-0.648,3.891-1.837,7.781-2.594,11.672a54.359,54.359,0,0,0-2.053,6.809,5.5,5.5,0,0,1-2.27,2.81,84.863,84.863,0,0,0-7.133,5.079,28.533,28.533,0,0,0-3.134,2.27l-7.781,6.7a34.571,34.571,0,0,0-6.484,7.889A32.361,32.361,0,0,0,3.1,80.243,17.466,17.466,0,0,0,1.157,85.323ZM30.121,59.277a28.267,28.267,0,0,1-2.27,6.052,0.914,0.914,0,0,0-.216.648,53.766,53.766,0,0,1-2.161,5.836c-0.54,1.405-.973,2.81-1.513,4.107a2.055,2.055,0,0,1-.756,1.189,32.565,32.565,0,0,1-2.27,5.3,51.775,51.775,0,0,1-3.566,6.268,16.461,16.461,0,0,1-3.242,4,16.635,16.635,0,0,1-5.187,3.134,12.189,12.189,0,0,1-1.945.324c-0.216,0-.432.108-0.648,0.108a1.733,1.733,0,0,1-1.729-.865,7.489,7.489,0,0,1-.324-2.162V92.78A22.312,22.312,0,0,1,5.156,86.3a36.044,36.044,0,0,1,5.512-10.7,52.582,52.582,0,0,1,11.024-12,67.218,67.218,0,0,1,7.457-5.62,1.466,1.466,0,0,1,1.189-.648h0.216a3.884,3.884,0,0,0-.216,1.189C30.337,58.737,30.121,59.061,30.121,59.277ZM16.612,92.455l0.432-.648a1.37,1.37,0,0,1-.108.648,11.506,11.506,0,0,1,1.189-.973,0.582,0.582,0,0,1,.54-0.432,0.682,0.682,0,0,1-.54.54v0.432a11.246,11.246,0,0,1-3.35,2.918,1.942,1.942,0,0,0,.432-0.973,1.521,1.521,0,0,0,.756-0.648H15.639a2.956,2.956,0,0,0,.432-0.54ZM10.344,71.6A4.4,4.4,0,0,1,12.4,69.22a7.442,7.442,0,0,1-2.053,2.486,0.738,0.738,0,0,1-.324.54,25.146,25.146,0,0,0-1.837,2.81l-0.757.54A9.592,9.592,0,0,1,10.344,71.6ZM6.237,77.866A3.849,3.849,0,0,1,7.426,75.6,3.849,3.849,0,0,1,6.237,77.866ZM17.044,94.617a1.674,1.674,0,0,1,1.3-1.081A2.1,2.1,0,0,1,17.044,94.617Zm-1.3,1.189c0-.54.756-0.865,1.3-1.189A4.326,4.326,0,0,1,15.747,95.806ZM5.7,78.946a0.892,0.892,0,0,1,.54-1.081A2.545,2.545,0,0,1,5.7,78.946Zm-0.757.973a1.011,1.011,0,0,1,.54-0.756l-0.216.865H5.048ZM8.723,75.7a1.293,1.293,0,0,1,.757-0.756A1.048,1.048,0,0,1,8.723,75.7Zm4.107-5.3c0-.324.108-0.432,0.648-0.648A1.261,1.261,0,0,1,12.829,70.409ZM9.587,74.731a0.691,0.691,0,0,1,.54-0.756A1.378,1.378,0,0,1,9.587,74.731Zm1.621-2.378a0.8,0.8,0,0,1,.54-0.649A0.8,0.8,0,0,1,11.208,72.354Zm0.54-.649a0.971,0.971,0,0,1,.54-0.648A0.8,0.8,0,0,1,11.749,71.705ZM10.56,73.326a1.342,1.342,0,0,1,.649-0.865A3.543,3.543,0,0,1,10.56,73.326Zm2.27-2.918a0.8,0.8,0,0,1-.54.648A1.051,1.051,0,0,1,12.829,70.409Zm-2.7,3.566a0.889,0.889,0,0,1,.432-0.648A1.378,1.378,0,0,1,10.128,73.975Zm4.107-5.3a0.5,0.5,0,0,1-.324.54Zm-1.837.54a1.251,1.251,0,0,1,.54-0.757A2.5,2.5,0,0,0,12.4,69.22Zm1.4,0.108a0.378,0.378,0,0,1-.324.432A0.734,0.734,0,0,0,13.8,69.328Zm4.863,21.723a0.82,0.82,0,0,0,.216-0.432,0.106,0.106,0,0,0,.108.108ZM8.615,75.812c0-.108.108,0,0.108-0.108a1.089,1.089,0,0,0-.108.324V75.812Zm8.97,15.13a0.106,0.106,0,0,1,.108-0.108v0.108H17.585Zm74.9-43.121a0.993,0.993,0,0,1-.973,1.081l0.108-.108a0.65,0.65,0,0,1,.108-0.432l-2.486,2.162-4,5.079c-1.621,2.378-4.107,3.891-5.836,6.917a19.106,19.106,0,0,1-1.837,2.594,0.573,0.573,0,0,1-.324.216H77.134A0.579,0.579,0,0,1,76.81,64.9a1.37,1.37,0,0,1-.108-0.648c0-1.3,0-2.486.108-3.783a26.766,26.766,0,0,1,.324-2.918c0.216-1.729.648-3.566,0.973-5.3a8.931,8.931,0,0,1,.865-2.378,55.3,55.3,0,0,1,1.621-6.052c0.432-1.189.973-.648,1.189-1.837,0-.756-0.216-3.35-0.973-3.783a0.408,0.408,0,0,1-.216-0.216,1.116,1.116,0,0,0-.865-0.432H79.3c-0.108,0-.324-0.216-0.432-0.216a0.409,0.409,0,0,0-.216.216L78,37.23a0.4,0.4,0,0,0-.324-0.108,0.594,0.594,0,0,0-.54.324,0.981,0.981,0,0,0-.324.756,10.262,10.262,0,0,0-.973,2.27A14.922,14.922,0,0,1,74,43.606a64.6,64.6,0,0,1-4.215,5.728L66,55.278l-3.35,4.215c-0.54.757-1.189,1.3-1.621,1.945a0.365,0.365,0,0,1-.324.216,0.4,0.4,0,0,1-.324-0.108c0-.108-0.108-0.216-0.108-0.324V60.358c0.108-.756.324-1.621,0.54-2.486A46.539,46.539,0,0,1,62.544,51.5c0.54-1.837,1.3-3.675,1.945-5.4a12.714,12.714,0,0,0,.757-2.161,5.428,5.428,0,0,0,.216-1.3V42.526a0.465,0.465,0,0,0-.432-0.432,0.888,0.888,0,0,1-.648-0.432,0.573,0.573,0,0,0-.324-0.216,0.377,0.377,0,0,0-.216.108,0.4,0.4,0,0,1-.324.108,0.453,0.453,0,0,1-.432-0.324A5.829,5.829,0,0,0,62,41.013a1.225,1.225,0,0,0-.973.756,2.267,2.267,0,0,1-.648.865c-0.649,1.189-1.405,2.378-2.053,3.675a48.59,48.59,0,0,0-2.7,7.565,11.244,11.244,0,0,1-.648,2.378,15.617,15.617,0,0,0-.432,3.134c0,1.189.216,2.486,0.324,3.675A2.271,2.271,0,0,0,56.06,64.9a10.34,10.34,0,0,0,3.674,2.053,1.081,1.081,0,0,0,1.3,0,4.973,4.973,0,0,0,2.162-1.729,29.415,29.415,0,0,0,3.134-4.107c0.648-1.3,1.513-2.594,2.27-4a53.181,53.181,0,0,1,2.81-4.647,7.089,7.089,0,0,1,1.837-2.7c-0.108-.108.108-0.108,0.216-0.108,0,0,.216.216,0.108,0.216a9.151,9.151,0,0,1-.432,1.837,32.831,32.831,0,0,0-.648,7.241,38.578,38.578,0,0,0,.432,4.971,8.11,8.11,0,0,0,.973,2.7,2.551,2.551,0,0,0,.648.973,6.808,6.808,0,0,1,1.945.648,3.207,3.207,0,0,0,1.189.432,2.522,2.522,0,0,0,1.513-.757l0.756-.973c1.081-1.4,2.27-2.81,3.35-4,1.621-2.161,3.242-4.107,4.647-6.268,2.053-2.7,3.891-5.4,5.836-8l0.54-.648a7.434,7.434,0,0,0,.648-2.27c0-.324-0.108-0.54-0.324-0.54-0.54,0-1.621,1.189-2.053,2.269v0.216C92.589,47.821,92.589,47.821,92.481,47.821ZM57.573,57.764a8.528,8.528,0,0,0-.324,1.4l-0.108.108a0.216,0.216,0,0,1-.108-0.216V58.953a42.724,42.724,0,0,1,.757-4.971,40.971,40.971,0,0,1,2.486-6.592c0.756-1.513,1.4-3.134,2.27-4.755l0.324-.216s0.108-.108.108,0a0.377,0.377,0,0,1,.108.216,2.748,2.748,0,0,1-.216.756A67.442,67.442,0,0,0,57.573,57.764Zm17.508-4.647a2.107,2.107,0,0,1,.108-0.865,29.934,29.934,0,0,1,1.189-5.187c0.432-1.189.648-2.378,0.973-3.566a1.654,1.654,0,0,1,.54-0.756,3.777,3.777,0,0,1-.324,1.3c-0.756,2.594-1.513,5.3-2.053,7.889A1.625,1.625,0,0,1,75.081,53.117ZM63.733,43.39a0.408,0.408,0,0,0,.216-0.216h0.324v0.108l-0.432.864c-0.54,1.405-1.189,2.81-1.729,4.323-0.432.865-.54,1.729-0.865,2.486a2.864,2.864,0,0,1-.54.648l0.216-.757C61.68,48.362,62.761,45.768,63.733,43.39ZM56.492,57.332V56.467a31.437,31.437,0,0,1,2.27-7.241,0.916,0.916,0,0,1,.324-0.324,2.685,2.685,0,0,0-.108.865,48.5,48.5,0,0,0-2.27,7.025Zm4.323-5.3a1.1,1.1,0,0,1-.54.865,1.39,1.39,0,0,1,.432-1.3A0.817,0.817,0,0,1,60.815,52.036Zm28.1,0.865a1.415,1.415,0,0,1-.865.648A0.7,0.7,0,0,1,88.914,52.9Zm0.973-1.621a0.789,0.789,0,0,1,.648-0.756A0.789,0.789,0,0,1,89.887,51.28ZM72.811,46.632c0,0.108.108,0.324,0.108,0.432a0.453,0.453,0,0,1-.324.432c0-.108-0.108-0.324-0.108-0.432A0.453,0.453,0,0,1,72.811,46.632Zm-1.081,2.053a0.789,0.789,0,0,1-.648.757A0.927,0.927,0,0,1,71.731,48.686Zm-3.783,5.728a1.018,1.018,0,0,1-.432.973A0.873,0.873,0,0,1,67.948,54.414Zm7.025-.216a0.562,0.562,0,0,1-.216-0.432,0.988,0.988,0,0,1,.324-0.54v0.54A0.522,0.522,0,0,1,74.973,54.2Zm8.322,6.052a0.463,0.463,0,0,1-.54.54l-0.108-.108A0.992,0.992,0,0,1,83.295,60.25ZM73.244,46.416a0.962,0.962,0,0,1,.54-0.865A0.963,0.963,0,0,1,73.244,46.416ZM69.677,51.6v0.324a0.652,0.652,0,0,1-.432.54V52.252A0.888,0.888,0,0,1,69.677,51.6Zm20.75,0.54a0.59,0.59,0,0,1-.54.648A0.589,0.589,0,0,1,90.427,52.144ZM87.4,54.738a0.605,0.605,0,0,1-.54.648A0.654,0.654,0,0,1,87.4,54.738ZM70.974,49.767a0.724,0.724,0,0,1-.432.757A0.723,0.723,0,0,1,70.974,49.767Zm-1.729,2.7a0.813,0.813,0,0,1-.54.757A0.813,0.813,0,0,1,69.245,52.468Zm-1.081,3.566a0.724,0.724,0,0,1,.432-0.757A0.724,0.724,0,0,1,68.164,56.035Zm18.373-.108a0.816,0.816,0,0,1-.432.757V56.467A0.582,0.582,0,0,1,86.537,55.927ZM90.968,50.2a0.4,0.4,0,0,1-.108-0.324,0.583,0.583,0,0,1,.432-0.432A1.612,1.612,0,0,1,90.968,50.2Zm-1.4,1.405a0.4,0.4,0,0,1,.108.324,0.453,0.453,0,0,1-.324.432A0.912,0.912,0,0,1,89.563,51.6ZM69.677,53.549a0.65,0.65,0,0,1,.432-0.757A0.816,0.816,0,0,1,69.677,53.549Zm-1.945,3.458a0.817,0.817,0,0,1,.324-0.865v0.216A0.934,0.934,0,0,1,67.732,57.007Zm2.486-4.323a0.659,0.659,0,0,1,.324-0.756v0.216A0.594,0.594,0,0,1,70.218,52.684ZM56.492,57.332c0,0.216.108,0.324,0.108,0.54a0.825,0.825,0,0,1-.216.54v-0.54A0.974,0.974,0,0,1,56.492,57.332Zm18.7-8.214a0.817,0.817,0,0,1,.108.432,0.4,0.4,0,0,1-.108.324,1.825,1.825,0,0,1-.216-0.54C74.973,49.226,74.973,49.226,75.189,49.118Zm-0.108.865a0.8,0.8,0,0,1-.324.757A0.659,0.659,0,0,1,75.081,49.983Zm10.051,7.889c0,0.216-.108.324-0.54,0.54A0.579,0.579,0,0,1,85.132,57.872ZM59.626,47.713a0.653,0.653,0,0,1-.324.648A0.77,0.77,0,0,1,59.626,47.713Zm0.432,6.052a1.164,1.164,0,0,1,.216-0.865A1.164,1.164,0,0,1,60.059,53.765ZM76.27,45.011a1.029,1.029,0,0,1-.216.756A0.809,0.809,0,0,1,76.27,45.011ZM89.347,52.36a0.718,0.718,0,0,1-.432.54A0.652,0.652,0,0,1,89.347,52.36Zm-30.044-4a0.514,0.514,0,0,1-.216.54A0.514,0.514,0,0,1,59.3,48.362Zm15.887,0.324,0.108-.108c0.108,0,.108.108,0.108,0.216l-0.216.324V48.686Zm-15.563-1.3a0.216,0.216,0,0,1,.108-0.216c0,0.108.108,0.108,0.108,0.216a0.573,0.573,0,0,1-.216.324V47.389Zm15.995-.432V46.849l0.324,0.216-0.216.324A0.522,0.522,0,0,0,75.621,46.957Zm8.862,11.456v0.216c0,0.108,0,.108-0.216.216A0.432,0.432,0,0,1,84.483,58.412Zm-12.212-10.7a0.913,0.913,0,0,1-.216.648A0.914,0.914,0,0,1,72.271,47.713ZM59.735,55.6a0.106,0.106,0,0,0-.108.108c-0.108,0-.108-0.108-0.108-0.216a0.409,0.409,0,0,1,.216-0.216V55.6Zm26.8,0.216a0.65,0.65,0,0,1,.108-0.432c0,0.108.108,0.216,0.108,0.324S86.645,55.819,86.537,55.819ZM70.218,50.847a0.826,0.826,0,0,1-.216.54A0.514,0.514,0,0,1,70.218,50.847Zm4.539-.108v0.324c0,0.108-.108.108-0.108,0.216a0.106,0.106,0,0,1-.108-0.108Zm12.969,3.566a0.422,0.422,0,0,1-.216.432A0.432,0.432,0,0,1,87.726,54.306ZM59.735,46.957a0.573,0.573,0,0,1,.216-0.324,0.825,0.825,0,0,1-.216.54V46.957Zm8.97,8.322V54.954a0.4,0.4,0,0,1,.108-0.324v0.216A0.522,0.522,0,0,1,68.7,55.278Zm6.052-.973v0.648a0.377,0.377,0,0,1-.108-0.216V54.63A1.089,1.089,0,0,1,74.757,54.306Zm18.481-5.944a0.671,0.671,0,0,1-.324.432A0.453,0.453,0,0,1,93.237,48.362Zm-4.215,5.62a0.365,0.365,0,0,0,.216-0.324V53.549a0.377,0.377,0,0,1,.108.216A0.271,0.271,0,0,1,89.022,53.981Zm2.269-4.539a0.635,0.635,0,0,1,.216-0.54A0.825,0.825,0,0,1,91.292,49.442ZM68.38,53.549a0.81,0.81,0,0,1-.108.54V53.873A0.4,0.4,0,0,1,68.38,53.549Zm24.1-5.728a0.106,0.106,0,0,0-.108-0.108l-0.324.324Zm-32.422,6.16a0.106,0.106,0,0,0-.108.108c0-.108-0.108-0.108-0.108-0.216,0.108,0,.108-0.108.216-0.108v0.216Zm-3.675,4.971a0.106,0.106,0,0,1-.108-0.108V58.737a0.377,0.377,0,0,1,.108-0.216v0.432Zm31.666-5.4v0.216a0.4,0.4,0,0,1-.108.324A1.447,1.447,0,0,1,88.05,53.549ZM86.1,56.683a0.917,0.917,0,0,0-.324.324A0.278,0.278,0,0,1,86.1,56.683ZM75.729,47.389v0.216l-0.108.108V47.5A0.106,0.106,0,0,1,75.729,47.389Zm16.319,0.648a0.462,0.462,0,0,0-.324.324ZM89.887,51.28a0.573,0.573,0,0,1-.216.324A0.3,0.3,0,0,1,89.887,51.28ZM85.24,57.764c0-.108-0.108-0.108-0.108-0.216s0.108-.108.108-0.216v0.432Zm7.241-8.646a0.365,0.365,0,0,1-.216.324A0.573,0.573,0,0,1,92.481,49.118ZM69.137,54.306a0.65,0.65,0,0,1,.108-0.432A0.65,0.65,0,0,1,69.137,54.306Zm21.4-3.782a0.271,0.271,0,0,1,.324-0.216Zm-6.7,8.97V59.385a0.216,0.216,0,0,1,.108-0.216A0.4,0.4,0,0,1,83.835,59.493Zm-2.053,1.621a1.555,1.555,0,0,0-.216.324A0.3,0.3,0,0,1,81.782,61.114ZM91.832,50.2a0.365,0.365,0,0,1-.324.216A1.558,1.558,0,0,0,91.832,50.2Zm-5.187,6.917a1.555,1.555,0,0,0-.216.324A0.3,0.3,0,0,1,86.645,57.115ZM59.735,55.17V54.954a0.106,0.106,0,0,1,.108.108Zm16.319-9.4a0.4,0.4,0,0,0-.108.324,0.106,0.106,0,0,0-.108-0.108Zm1.837-3.242L78,42.634l-0.108.108C77.891,42.634,77.783,42.526,77.891,42.526ZM87.726,55.6a0.573,0.573,0,0,1,.216-0.324A0.573,0.573,0,0,1,87.726,55.6Zm3.026-4.323a0.3,0.3,0,0,1-.216.324A0.573,0.573,0,0,0,90.752,51.28Zm-24.1,5.188a1.089,1.089,0,0,1-.108.324A0.4,0.4,0,0,1,66.651,56.467Zm26.8-8.646a1.089,1.089,0,0,1-.108.324A0.4,0.4,0,0,1,93.453,47.821Zm-4.431,6.268c0,0.108-.108.216-0.108,0.324A0.4,0.4,0,0,1,89.022,54.089Zm-14.806-.756,0.108-.108v0.108H74.216ZM92.589,48.9c0,0.108,0,.108-0.108.108Zm-19.345-.865a0.533,0.533,0,0,1,.108-0.324Zm15.022,6.7c0,0.108-.108.216-0.108,0.324A0.4,0.4,0,0,1,88.266,54.738ZM92.589,47.5a0.335,0.335,0,0,1-.216.108ZM99.83,43.39c2.162-3.026,4.54-4.323,6.377-4.323a2.407,2.407,0,0,1,2.594,2.053,0.255,0.255,0,0,0,.324.216h0.108v0.108c-0.649,1.621-1.189,1.837-1.3,3.026a0.4,0.4,0,0,0-.108.324c0,0.108,0,.216.108,0.216a0.216,0.216,0,0,1,.108.216,2.773,2.773,0,0,1-.216.54c0,0.108.108,0.216,0.432,0.216a3.414,3.414,0,0,0,2.918-1.3,14.53,14.53,0,0,0,1.513-4.647V39.716c0-2.7-4.107-4.215-6.268-4.539h-2.486c-2.918.324-5.3,1.837-7.889,4A21.573,21.573,0,0,0,91.4,45.552c-0.324.757-.432,1.4-0.757,2.161l-0.324,1.081a1.839,1.839,0,0,0,.108.757v0.865a6.294,6.294,0,0,0,.324,2.053,8.479,8.479,0,0,0,1.189,1.945,14.445,14.445,0,0,0,2.81,3.35c2.27,2.27,2.918,4.323,2.918,7.565v1.729c-0.216.865-1.3,1.081-1.837,1.837-0.973.973-3.891,1.945-4.863,2.918a15.6,15.6,0,0,0-2.053,4A2.89,2.89,0,0,0,92.048,78.3a7.345,7.345,0,0,0,2.053-.324c0.216,0,.432.108,0.648,0.108a1.054,1.054,0,0,0,.973-0.432,11.365,11.365,0,0,0,4.431-4.323,11.49,11.49,0,0,0,1.945-3.783l0.108-.865a1.975,1.975,0,0,1,.216-0.973c0.216-.756,1.189-0.756,1.837-1.3a0.462,0.462,0,0,0,.325-0.324V65.977c0-.108-0.108,0,0-0.108,2.269-1.837,4.215-2.378,6.484-4.215a22.97,22.97,0,0,1,5.836-4.107c0.432-.108.432-0.432,0.865-0.54a0.671,0.671,0,0,0,.324-0.432,4.683,4.683,0,0,1-.108-0.54,2.023,2.023,0,0,0-1.513-.54,2.381,2.381,0,0,0-.865.108,16,16,0,0,0-5.3,3.134c-2.162,1.513-4.323,2.27-6.161,4.107a4.723,4.723,0,0,0-.864.757c-0.108,0-.216.108-0.324,0.108-0.217,0-.217-0.108-0.325-0.432,0-.108-0.108-0.324-0.108-0.432a23.553,23.553,0,0,0-3.134-5.62,9.522,9.522,0,0,1-2.378-2.7c-0.432-.432-0.432-0.973-0.865-1.513a3.327,3.327,0,0,1-.324-1.4V51.171c0-.324.216-0.648,0.216-0.973A16.29,16.29,0,0,1,99.83,43.39Zm-3.566-.324c-0.432,1.405-1.513,2.378-2.486,3.891l0.108-.973c0.54-.865,1.4-1.513,1.837-2.378A2.545,2.545,0,0,1,96.263,43.066Zm0.865,30.585c-0.108,0-.216.324-0.324,0.324a0.335,0.335,0,0,1-.216.108H96.479l0.216-.108a1.292,1.292,0,0,1,.432-0.865,0.378,0.378,0,0,1,.108-0.216,0.807,0.807,0,0,1,.324.324C97.128,73.543,97.128,73.543,97.128,73.651Zm-0.865-28.1a4.259,4.259,0,0,1,.973-1.189,4.539,4.539,0,0,1-.756,1.3A0.334,0.334,0,0,1,96.263,45.552ZM91.724,73.11V73H92.8a5.74,5.74,0,0,0,1.513-.108,4.238,4.238,0,0,1-1.837.216H91.724Zm5.62-29.18c0,0.108.108,0.216,0.108,0.324a0.106,0.106,0,0,1-.108.108H97.236C97.236,44.039,97.236,43.931,97.344,43.931Zm-4.215,1.837a0.106,0.106,0,0,1,.108-0.108Zm53.712-23.992a1.051,1.051,0,0,1-.648-0.54,93.777,93.777,0,0,0-14.806,2.378,6.651,6.651,0,0,1-1.405.108h-0.216a0.287,0.287,0,0,1-.325-0.324V23.072c0.541-1.3.649-1.945,1.081-3.242l2.378-7.349a12.439,12.439,0,0,0,.648-1.837V10.32a0.176,0.176,0,0,0-.216-0.216,1.439,1.439,0,0,1-.324-0.54,0.271,0.271,0,0,0-.216-0.324,0.572,0.572,0,0,0-.324.216,1.284,1.284,0,0,1-.541.54,1.439,1.439,0,0,1-.54.324,7.571,7.571,0,0,1,.864-1.081,0.377,0.377,0,0,1,.108-0.216l-0.108-.108c-0.108,0-.108.108-0.216,0.108h-0.216V9.131a0.572,0.572,0,0,0-.324.216,0.917,0.917,0,0,1,.324-0.324,1.166,1.166,0,0,0-.756-0.324h-0.217a1.438,1.438,0,0,0-.972.648,8.951,8.951,0,0,0-1.189,1.621,25.118,25.118,0,0,0-2.053,4.215c-1.405,3.026-1.946,5.62-3.135,8.538-0.648,1.945-5.619,2.486-7.565,3.026a18.5,18.5,0,0,0-2.918.973,1.133,1.133,0,0,0-.324.432,0.562,0.562,0,0,0-.216.432V28.8a1.827,1.827,0,0,1,.324.648,1.636,1.636,0,0,0,1.513.757h0.432l6.809-1.189h0.108c0.216,0,.324.108,0.324,0.432v0.216a44.291,44.291,0,0,1-1.08,5.188c0,0.54-.433,1.729-0.433,2.27a2.66,2.66,0,0,1-.432,1.189,3.52,3.52,0,0,1-.432,1.513v0.324a10.159,10.159,0,0,1-.865,3.458v0.108a0.378,0.378,0,0,1-.108.216,0.409,0.409,0,0,1,.216.216L118.2,49.01v0.108l-0.541,2.81c-0.216,2.161-1.3,7.781-1.837,10.159,0,0.324-.108.757-0.108,1.189l-0.756,5.3a4.057,4.057,0,0,0-.108,1.081v1.3a26.545,26.545,0,0,0-.325,2.918v0.216c0,1.081-.324,4.647-0.324,6.917a3.277,3.277,0,0,0,.216,1.837,1.374,1.374,0,0,1,.757.432,1.132,1.132,0,0,0,.432.324,4.517,4.517,0,0,1,1.081.432c0.108,0.324,1.3-6.809,1.513-7.025a1.227,1.227,0,0,0,.324-0.865V75.92c0-1.189.649-2.378,0.865-3.566a23.153,23.153,0,0,0,.432-3.458V68.679a1.537,1.537,0,0,1,.216-0.648,6.65,6.65,0,0,0,.108-1.513c0-.324.216-0.648,0.216-0.973,0.433-2.81,1.729-8.862,2.162-11.564,0.324-1.621.54-3.134,0.972-4.755,0.541-1.945.757-3.891,1.3-5.836a1.84,1.84,0,0,1,.108-0.756l1.3-5.3c0.433-1.513,1.405-6.917,1.729-8.43a2.766,2.766,0,0,0,.541-1.3,1.047,1.047,0,0,1,.864-0.756,3.892,3.892,0,0,1,1.189-.216l7.673-1.945c0.865-.216,8-1.729,8.538-2.27a0.579,0.579,0,0,0,.324-0.432A0.232,0.232,0,0,0,146.841,21.776Zm-11.564,28.1c-0.216,1.189-.865,2.486-0.973,3.458a15.642,15.642,0,0,1-.54,3.242,28.989,28.989,0,0,0-.757,2.918,8.74,8.74,0,0,1-.432,2.7,17.011,17.011,0,0,1-.757,2.161c0,0.216.108,0.432,0.108,0.648a7.774,7.774,0,0,1-.432,2.053,6.166,6.166,0,0,1-.108,1.4,6.652,6.652,0,0,0-.108,1.405v0.54a52.5,52.5,0,0,0-1.189,5.3,0.818,0.818,0,0,0-.108.432l-0.864,5.079a8.663,8.663,0,0,0-.109,1.729,1.069,1.069,0,0,0,1.081.865h0.216a0.771,0.771,0,0,1,.649.324c0,0.324.108,0.54,0.324,0.54,0.108,0,.216-0.108.324-0.108s0.216,0,.216.108a1.651,1.651,0,0,0,.649.432h0.108a1.079,1.079,0,0,0,.432-0.54,5.19,5.19,0,0,0,.541-1.189,3.437,3.437,0,0,0,.216-1.405c0.432-1.945.648-3.783,1.188-5.728V76.028a16.728,16.728,0,0,1,.649-3.35c0-.432.324-0.973,0.324-1.405V71.057a18.892,18.892,0,0,1,1.081-4.755l0.648-2.7a9.464,9.464,0,0,0,.216-1.729c0.973-2.918,1.622-5.944,2.486-9.186a3.648,3.648,0,0,0,.432-1.3,9.649,9.649,0,0,1,.325-2.378l2.161-8c0.216-.865.649-1.945,0.865-2.918,0.108-.973.324-1.945,0.54-3.026,0.108-1.081.865-1.837,1.3-2.81a60.218,60.218,0,0,1,5.3-6.484,11.7,11.7,0,0,1,2.269-2.378,31.3,31.3,0,0,1,5.4-5.3c0.972-.973,2.161-1.729,3.35-2.7a28.726,28.726,0,0,1,6.484-3.458,14.224,14.224,0,0,1,2.486-.54h0.216a0.755,0.755,0,0,1,.865.649l-0.216,2.378a17.965,17.965,0,0,1-1.729,4,42.279,42.279,0,0,1-5.4,8.322c-2.918,3.35-5.62,6.7-8.862,9.835a22,22,0,0,0-2.7,2.81c-1.837,1.729-3.458,3.566-5.3,5.3l-1.405,1.729a1.19,1.19,0,0,0-.324.648,1.143,1.143,0,0,0,.433.648,1.334,1.334,0,0,1,.864,1.189,0.843,0.843,0,0,1,.432.432,0.773,0.773,0,0,0,.649.324,3.336,3.336,0,0,0,.864-0.216c0.541-.108.865-0.54,1.622-0.757a24.679,24.679,0,0,1,7.889-3.566,12.214,12.214,0,0,1,4.863-.973,11.1,11.1,0,0,1,1.837.108c2.054,0.432,2.378.973,3.027,3.026a25.658,25.658,0,0,1,.324,5.079,10.308,10.308,0,0,1-.973,3.891,0.817,0.817,0,0,0-.108.432,22.28,22.28,0,0,1-3.026,6.484,26.208,26.208,0,0,1-2.7,3.35A43.759,43.759,0,0,1,156.243,73c-1.189.973-2.594,1.837-3.891,2.918a21.589,21.589,0,0,1-4.863,2.162h-0.432a1.259,1.259,0,0,1-.757-0.216,4.244,4.244,0,0,1-1.081-1.729,12.083,12.083,0,0,1-.972-4.755,18.557,18.557,0,0,1,1.3-6.268,10.626,10.626,0,0,1,.54-1.729,37.143,37.143,0,0,1,3.134-4.431,20.678,20.678,0,0,1,3.459-2.918,0.682,0.682,0,0,0,.54-0.54,0.216,0.216,0,0,0-.108-0.216,0.335,0.335,0,0,0,.108-0.216,1.33,1.33,0,0,0-.54-0.216,0.571,0.571,0,0,1-.325-0.216c0-.216,0-0.324-0.432-0.432a4.674,4.674,0,0,1-.54-0.108,3.352,3.352,0,0,0-.865-0.216,1.44,1.44,0,0,0-.865.324,21.843,21.843,0,0,0-4.971,4.107,24.5,24.5,0,0,0-3.891,7.673c-0.216,1.189-.648,2.7-0.864,4.215a31.014,31.014,0,0,0,.432,4.215,12.38,12.38,0,0,0,6.16,6.7A6.7,6.7,0,0,0,149,81.54a19.428,19.428,0,0,0,2.378-.216l4.755-1.945a29.8,29.8,0,0,0,6.16-4.863,43.052,43.052,0,0,0,6.268-6.917,31.593,31.593,0,0,0,3.567-6.16,25.49,25.49,0,0,0,1.513-7.673c0-.432.108-0.865,0.108-1.3a15.789,15.789,0,0,0-.757-4.215,8.71,8.71,0,0,0-4.106-5.62,13.815,13.815,0,0,0-6.377-1.945h-2.918a5.416,5.416,0,0,1-1.3.216h-0.108c-0.108,0-.108-0.108-0.108-0.216a2.337,2.337,0,0,1,.865-0.973,29.876,29.876,0,0,1,2.594-2.7,110.27,110.27,0,0,0,8.537-10.267,31.253,31.253,0,0,0,5.512-11.456c0-.432.108-0.865,0.108-1.3a6.316,6.316,0,0,0-1.405-4.107,5.982,5.982,0,0,0-4.323-1.945,5.266,5.266,0,0,0-1.3.108,16.691,16.691,0,0,0-2.485.648c-1.081.54-1.838,1.081-2.81,1.513a38.68,38.68,0,0,0-4.864,2.918,62.415,62.415,0,0,0-6.16,5.728c-1.189,1.189-2.269,2.053-3.35,3.35l-0.865.973a0.255,0.255,0,0,1-.324.216,1.09,1.09,0,0,1-.108-0.324V22.316c0.973-3.242,1.513-6.268,2.378-9.294a2.139,2.139,0,0,1,.216-1.081V11.292a2.112,2.112,0,0,1,.108-0.757c-0.216-.756-0.432-1.729-1.621-1.945a0.431,0.431,0,0,1-.432-0.216,1.475,1.475,0,0,0-1.189.432c-0.865,2.378-1.513,4.431-2.378,6.592a13.081,13.081,0,0,1-1.189,3.458v0.324a0.794,0.794,0,0,1-.216.648c-0.432,1.081-.54,2.27-1.081,3.566a50.254,50.254,0,0,0-1.513,5.188l-1.621,5.62c-0.432,1.837-.864,3.783-1.513,5.728a50.632,50.632,0,0,1-1.3,5.512V45.66C136.249,47.281,135.493,48.686,135.277,49.875ZM159.7,34.96a3.672,3.672,0,0,0,.649-0.648,6.623,6.623,0,0,1,.432-0.648,1.132,1.132,0,0,0,.324-0.432,3.156,3.156,0,0,0,.865-0.432,0.365,0.365,0,0,0,.216-0.324,2.7,2.7,0,0,1,1.189-1.081,1.229,1.229,0,0,1-1.081,1.081l-0.216.648a27.052,27.052,0,0,1-3.458,3.566,5.357,5.357,0,0,1-1.946,1.837,4.913,4.913,0,0,1-1.729,1.945,15.365,15.365,0,0,1-2.269,2.378H152.46c-0.108,0-.108,0-0.108-0.108V42.418a1.135,1.135,0,0,1,.433-0.324,3.149,3.149,0,0,0,1.405-1.513,1.157,1.157,0,0,1,.648-0.216l0.648-1.189H155.27l0.216-.432v0.432l0.541-.432h0.108l0.54-.324a11.4,11.4,0,0,1,.757-1.189h-0.324a0.958,0.958,0,0,0,.432-0.54,0.975,0.975,0,0,1-.108.54l0.54-.432c0.108-.108.432-0.108,0.54-0.216,0.109-.432.649-0.756,0.757-1.189a0.533,0.533,0,0,1-.324-0.108,0.958,0.958,0,0,0,.54-0.432,1.537,1.537,0,0,0-.216.648ZM149.434,23.829a0.76,0.76,0,0,1,.541-0.432,0.573,0.573,0,0,0-.216-0.324l0.324-.432a0.993,0.993,0,0,1-.108.648,0.924,0.924,0,0,0,.324-0.648,1.154,1.154,0,0,1,.54-0.324h0.108a0.106,0.106,0,0,1,.108-0.108l0.649-.973a1.225,1.225,0,0,0,.648-0.648L153,20.371a0.811,0.811,0,0,1,.108-0.54h-0.216a0.4,0.4,0,0,1,.324-0.108c0.108,0,0,0,0,.108a1.654,1.654,0,0,0,.54-0.757,1.816,1.816,0,0,0,.865-0.756H154.19c0.108,0,.216-0.108.324-0.108a0.106,0.106,0,0,1,.108.108,0.913,0.913,0,0,0,.648-0.216,1.372,1.372,0,0,0,.108-0.648l0.757-.216a1.44,1.44,0,0,0,.324-0.54,1.306,1.306,0,0,0,.973-0.757,3.064,3.064,0,0,1,.972-0.648,0.819,0.819,0,0,0,.433-0.108,3.82,3.82,0,0,1,1.729-1.4v0.108a2.835,2.835,0,0,1-1.729,1.4,1.118,1.118,0,0,1-.433.108,5.243,5.243,0,0,1-2.161,1.945,1.03,1.03,0,0,1-.865.864,6.2,6.2,0,0,1-2.269,2.162,1.44,1.44,0,0,0-.324.54L149.11,24.8l-0.324.54A2.037,2.037,0,0,1,149,24.477,0.992,0.992,0,0,1,149.434,23.829Zm13.4,46.147c-0.432.324-.648,0.324-0.864,0.54a3.238,3.238,0,0,1,.432-0.865,39.919,39.919,0,0,0,5.4-7.133,1.706,1.706,0,0,0,.54-0.648h0.324l-0.108.108a4.508,4.508,0,0,1-.216.648,33.471,33.471,0,0,1-3.891,5.728A7.7,7.7,0,0,0,162.835,69.976Zm0.649,1.3a0.592,0.592,0,0,1-.541.432,4.563,4.563,0,0,1,.649-0.865,34.5,34.5,0,0,0,4.215-5.4,0.106,0.106,0,0,0,.108-0.108,0.377,0.377,0,0,0,.216-0.108,0.106,0.106,0,0,0,.108.108v0.108a0.357,0.357,0,0,1-.324.432A23.161,23.161,0,0,1,163.484,71.273ZM145.76,59.493a3.422,3.422,0,0,1,.648-0.54l-0.432.865a34.468,34.468,0,0,0-2.053,3.35,0.338,0.338,0,0,1-.217.108H143.6V62.951a0.915,0.915,0,0,1,.325-0.54C144.463,61.438,145.111,60.466,145.76,59.493ZM160.782,13.67a4.456,4.456,0,0,1,2.594-1.621,5.82,5.82,0,0,1-2.486,1.621,0.216,0.216,0,0,1-.216.108A0.106,0.106,0,0,0,160.782,13.67ZM147.273,26.315a2.216,2.216,0,0,0,.973-0.54,2.7,2.7,0,0,1-1.189,1.513A1.778,1.778,0,0,0,147.273,26.315Zm11.023-9.4a2.061,2.061,0,0,1,1.405-.973A1.665,1.665,0,0,1,158.3,16.912Zm2.27-1.4a1.185,1.185,0,0,1,1.189-.973A2.1,2.1,0,0,1,160.566,15.507ZM146.841,60.25a2.5,2.5,0,0,1,.864-1.189A2.031,2.031,0,0,1,146.841,60.25Zm11.131-21.182a1.572,1.572,0,0,1-.973.648,0.929,0.929,0,0,1,.757-0.648h0.216Zm7.349,26.37a1.254,1.254,0,0,1,.649-0.865A1.077,1.077,0,0,1,165.321,65.437Zm-19.237-4.215a1.365,1.365,0,0,1,.648-0.865A1.342,1.342,0,0,1,146.084,61.222Zm19.237-32.1a0.579,0.579,0,0,1-.54.54A0.579,0.579,0,0,1,165.321,29.125Zm-27.559,21.4a0.106,0.106,0,0,1-.108-0.108,1.607,1.607,0,0,1-.108-0.648,0.232,0.232,0,0,0,.216-0.216v0.973ZM166.4,63.708a0.877,0.877,0,0,1-.432.865A2.128,2.128,0,0,1,166.4,63.708Zm-2.486-32.962a0.494,0.494,0,0,1,.432-0.54A0.484,0.484,0,0,1,163.916,30.746ZM157,39.716a0.593,0.593,0,0,1-.432.648A0.782,0.782,0,0,1,157,39.716Zm-8.753-13.941a0.494,0.494,0,0,1,.54-0.432A0.582,0.582,0,0,1,148.246,25.774Zm17.075,3.35a0.8,0.8,0,0,1,.54-0.649A1.107,1.107,0,0,1,165.321,29.125Zm1.621-2.053c-0.324.324-.324,0.648-0.648,0.973A1.242,1.242,0,0,1,166.942,27.071ZM166.4,63.708c0-.108.216-0.324,0.216-0.432a1.087,1.087,0,0,0,.324-0.108v0.216ZM160.89,36.041a1.274,1.274,0,0,1-.54.54A0.579,0.579,0,0,1,160.89,36.041Zm-10.267-14.05c0.108-.108.432-0.108,0.54-0.216a0.82,0.82,0,0,1-.216.432Zm12.753,9.4a0.685,0.685,0,0,1,.54-0.648A2.867,2.867,0,0,1,163.376,31.394Zm2.918-3.35c0,0.216-.108.216-0.433,0.432A0.4,0.4,0,0,1,166.294,28.044Zm-6.377,6.16a1.537,1.537,0,0,1-.216.648h-0.216ZM149.434,23.829a0.573,0.573,0,0,1-.216-0.324,0.808,0.808,0,0,1,.324-0.324A1.372,1.372,0,0,0,149.434,23.829Zm9.511,14.158a0.718,0.718,0,0,1-.541.432A1.172,1.172,0,0,1,158.945,37.987Zm5.4-7.781a1.081,1.081,0,0,1,.433-0.54A0.717,0.717,0,0,1,164.348,30.205ZM145.76,61.546a0.916,0.916,0,0,0,.324-0.324c0,0.108-.108.324-0.108,0.432l-0.108.108C145.76,61.763,145.76,61.655,145.76,61.546Zm1.3-3.458a2.871,2.871,0,0,1-.541.648A1.444,1.444,0,0,1,147.057,58.088ZM160.35,36.582a2.554,2.554,0,0,0-.541.54A0.562,0.562,0,0,1,160.35,36.582ZM162.4,72.246a2.206,2.206,0,0,0,.54-0.54C162.943,72.03,162.835,72.03,162.4,72.246ZM156.243,40.8c0-.216,0-0.432.324-0.432ZM157,18.209a0.76,0.76,0,0,1-.54.432Zm5.188,16.211a1.079,1.079,0,0,1-.432.54Zm-2.81,2.918a0.453,0.453,0,0,1-.324.432Zm-1.837-.648a0.377,0.377,0,0,0,.216-0.108,0.408,0.408,0,0,1,.216.216A0.816,0.816,0,0,0,157.54,36.69Zm-0.432-20.75c0-.108,0-0.108.108-0.108a0.334,0.334,0,0,1,.216.108h-0.324Zm0.324,1.945a0.579,0.579,0,0,1,.324-0.432ZM159.917,34.2a0.65,0.65,0,0,1,.433.108A0.653,0.653,0,0,1,159.917,34.2Zm-12.86-6.917V27.5l-0.108.108V27.4ZM156.135,16.7a0.106,0.106,0,0,1,.108-0.108,0.377,0.377,0,0,0,.216.108h-0.324Zm-1.081.756c0.108,0,.108-0.108.216-0.108l0.108,0.108h-0.324Zm-4.647,4.755a1.09,1.09,0,0,1-.108.324h-0.108A0.573,0.573,0,0,0,150.407,22.208Zm5.4,16.319a0.216,0.216,0,0,1,.216.108A0.377,0.377,0,0,1,155.811,38.527ZM161,35.717c0,0.108-.108.216-0.108,0.324A0.4,0.4,0,0,1,161,35.717Zm4.107,30.044v0.108C165.105,65.761,165,65.761,165.105,65.761Zm24.209,4a5.771,5.771,0,0,0,4.107-1.729c0.324-.648.864-1.189,1.189-1.729a25.105,25.105,0,0,0,1.945-3.783,24.534,24.534,0,0,0,1.189-4,16.257,16.257,0,0,0,.972-3.783c0-.54.108-0.54,0.649-0.648a7.138,7.138,0,0,0,1.513-.108,18.113,18.113,0,0,0,4-.648,12.3,12.3,0,0,0,3.242-1.405,9.832,9.832,0,0,0,2.593-1.729,0.849,0.849,0,0,1,.433-0.432,0.3,0.3,0,0,1,.216-0.324c0-.108.108-0.108,0.108-0.216a0.232,0.232,0,0,0-.216-0.216,0.4,0.4,0,0,0-.324.108l-0.108.108c-0.217,0-.217-0.108-0.217-0.108V48.9a0.365,0.365,0,0,0-.216-0.324h-0.216c-0.108,0-.108.216-0.216,0.216,0,0-.108,0-0.108-0.216h-0.216c-0.108,0-.108,0-0.108-0.108H209.2a0.653,0.653,0,0,0-.648.324l-0.865.648a18.438,18.438,0,0,1-2.053.973,9.226,9.226,0,0,1-2.594.973c-1.3.216-2.485,0.432-3.782,0.757-0.325,0-.433,0-0.433-0.324V51.6a0.65,0.65,0,0,1,.108-0.432,4.578,4.578,0,0,1-.432-1.3,1.887,1.887,0,0,0-1.081-1.4,2.577,2.577,0,0,0-.972-0.216,2.356,2.356,0,0,0-.649-0.108,3.438,3.438,0,0,0-1.513.216c-1.405.54-2.485,1.3-2.7,2.486v0.324a0.65,0.65,0,0,0-.108.432,0.964,0.964,0,0,0,.541.865l0.54,0.432a12.327,12.327,0,0,0,2.054,1.081c0.432,0.108.54,0.216,0.54,0.432v0.54c-0.108.648-.324,1.081-0.432,1.621a10.707,10.707,0,0,1-.865,2.81l-1.189,2.594a18.071,18.071,0,0,1-2.7,4.323,6.56,6.56,0,0,1-1.08.757,0.9,0.9,0,0,1-.757.324,2.125,2.125,0,0,1-.864-0.432l-0.433-.324a3.873,3.873,0,0,1-.432-1.189,2.925,2.925,0,0,1-.324-1.621V63.06a1.406,1.406,0,0,1,0-1.081L186.4,58.3c0.324-1.081.324-2.053,0.648-3.026,0-.756.108-1.3,0.108-1.837a23.4,23.4,0,0,0,1.3-3.891c0.325-.648.433-1.621,0.757-2.27,0.54-1.189,1.405-2.594,1.945-4a9.571,9.571,0,0,1,1.3-1.837V41.229a0.81,0.81,0,0,0-.108-0.54,1.337,1.337,0,0,1-.324-0.216,2.056,2.056,0,0,0-.973-0.324H190.5a2.039,2.039,0,0,0-.865-0.216,1.725,1.725,0,0,0-1.3.432l-0.864.648c-0.541.756-1.189,1.729-1.838,2.486-0.648,1.081-1.3,2.378-2.053,3.566a0.335,0.335,0,0,0-.108.216,1.615,1.615,0,0,1-.324.757,20.184,20.184,0,0,1-.757,2.378,26,26,0,0,0-1.189,3.458c0,0.324-.108.757-0.108,1.3a4.6,4.6,0,0,0-.216,1.189l-0.324,2.27a0.3,0.3,0,0,1-.216.324c0,0.324-.108.757-0.108,0.973,0,0.108-.108.216-0.108,0.324a1.827,1.827,0,0,0,.216.54,4.057,4.057,0,0,0-.108,1.081v1.081a0.216,0.216,0,0,0,.108.216c0,0.432.216,0.865,0.216,1.621a4,4,0,0,0,1.729,2.594,7.324,7.324,0,0,0,2.594,1.3L186.072,69a10.587,10.587,0,0,0,2.918.757h0.324Zm0.324-28.639a0.106,0.106,0,0,0,.108.108,0.82,0.82,0,0,1-.216.432c-0.973,1.4-1.513,2.81-2.486,4.323a21.588,21.588,0,0,0-1.945,4.971,29.7,29.7,0,0,0-1.405,5.079,12.365,12.365,0,0,1-.54,2.594,5.493,5.493,0,0,1-.324,1.837v0.108l-0.109-.108V60.033a17.167,17.167,0,0,0,.325-2.486c0.216-.865.216-1.837,0.54-3.026a11.772,11.772,0,0,0,.757-2.594,32.886,32.886,0,0,1,3.674-8.538,8.669,8.669,0,0,1,1.405-2.053Zm-2.377,2.486c0-.108.108-0.108,0.108-0.216V43.5c0,0.216-.108.432-0.108,0.648a13.033,13.033,0,0,0-2.162,4.215,23.884,23.884,0,0,0-1.513,4.431c-0.324,1.081-.54,2.27-0.865,3.242V56.9a13.064,13.064,0,0,1-.324,1.513v0.973l-0.216.432V58.412a4.013,4.013,0,0,1,.216-0.973,18.175,18.175,0,0,1,.433-2.378,5.691,5.691,0,0,1,.432-1.945,25.76,25.76,0,0,1,3.566-8.646A1.634,1.634,0,0,1,187.261,43.606Zm6.052,20.318a28.358,28.358,0,0,0,2.269-4.863,8.2,8.2,0,0,1,.649-2.162l0.216-.108V56.9a0.975,0.975,0,0,1-.108.54,24.592,24.592,0,0,1-2.81,6.484,1.437,1.437,0,0,1-.649.973Zm-2.27-22.263c0,0.108,0,.108-0.216.216a32.659,32.659,0,0,0-2.7,4.647v0.108c-0.108,0-.108,0-0.108-0.108V46.416a15.884,15.884,0,0,1,2.27-4.215,2.261,2.261,0,0,0,.432-0.648Zm3.026,23.452c0.541-1.3,1.081-2.378,1.405-3.35l0.649-1.405h0.108v0.324a23.55,23.55,0,0,1-1.621,3.782,3.412,3.412,0,0,1-.433.648C194.177,65.221,194.177,65.113,194.069,65.113Zm-0.432-14.05h-0.216a0.106,0.106,0,0,1-.108-0.108l0.432-.865h0.324Zm0.756,9.727a1.1,1.1,0,0,1-.54,1.081A2.016,2.016,0,0,1,194.393,60.79Zm-6.268-18.264a1.921,1.921,0,0,1-.756.865A1.167,1.167,0,0,1,188.125,42.526Zm6.809,17.184a0.647,0.647,0,0,1-.324.648,0.216,0.216,0,0,1,.108-0.216A0.432,0.432,0,0,1,194.934,59.709Zm0.216-.216a0.408,0.408,0,0,0-.216.216V59.385a0.572,0.572,0,0,1,.216-0.324v0.432Zm-0.432-8.646a0.409,0.409,0,0,1,.216-0.216h0.108a0.365,0.365,0,0,1-.216.324Zm0.756,7.025a1.141,1.141,0,0,1-.216.54c0-.216.108-0.324,0.108-0.648h0.108v0.108Zm-0.216.973c0,0.108-.108.108-0.108,0.216V58.737a0.4,0.4,0,0,1,.108-0.324v0.432Zm-0.648,1.513a0.431,0.431,0,0,1-.217.432A0.815,0.815,0,0,1,194.61,60.358ZM193.745,62.3c0-.108,0-0.324.108-0.324A0.305,0.305,0,0,1,193.745,62.3ZM192.88,50.739c0.217,0,.217,0,0.217.108H192.88V50.739Zm20.427-6.809a0.216,0.216,0,0,0,.108-0.216V43.5H213.2a0.817,0.817,0,0,0-.108-0.432c0-.108.108-0.216,0.108-0.324a1.331,1.331,0,0,1-.216-0.54,0.8,0.8,0,0,0-.757.324,27.185,27.185,0,0,0-2.161,3.134l-2.054,4.107a15.467,15.467,0,0,0-1.3,4.863,23.441,23.441,0,0,0-.972,7.241,9.468,9.468,0,0,0,.756,3.458,7.7,7.7,0,0,0,1.189,1.837,6.607,6.607,0,0,0,1.513.756,3.652,3.652,0,0,0,1.189.757,4.43,4.43,0,0,0,1.189.108,3.454,3.454,0,0,0,1.513-.324l1.621-1.513a22.865,22.865,0,0,0,1.513-1.837,34.152,34.152,0,0,0,2.161-2.918c1.729-1.945,3.567-4.215,5.62-6.376a27.85,27.85,0,0,1,3.35-3.891l0.108-.108a1.813,1.813,0,0,1,.973-0.757,7.456,7.456,0,0,0,1.729-3.458c0-.216.108-0.54,0.108-0.756V46.632a4.119,4.119,0,0,0-.324-1.081l-0.54.757a67.953,67.953,0,0,1-4.647,5.3,49.231,49.231,0,0,0-3.783,4.323,48.769,48.769,0,0,0-4.647,4.755,49.7,49.7,0,0,1-4.215,4.107,1.752,1.752,0,0,1-.973.54c-0.108,0-.216-0.108-0.324-0.108V63.6a25.3,25.3,0,0,1,.865-5.836c0.648-2.7,1.621-5.3,2.377-8a37.932,37.932,0,0,0,1.621-4.539,2.26,2.26,0,0,0,.433-1.189,0.5,0.5,0,0,0-.541-0.216,0.106,0.106,0,0,1-.108.108,0.377,0.377,0,0,0-.216.108V43.822a0.8,0.8,0,0,0-.756-0.757c-0.108,0-.108.108-0.217,0.432a1.243,1.243,0,0,1-.648.757,21.807,21.807,0,0,1-1.945,3.891,63.728,63.728,0,0,0-2.27,6.376,9.958,9.958,0,0,0-.54.865,14.227,14.227,0,0,1,.54-2.486,35.8,35.8,0,0,1,3.134-7.241,0.65,0.65,0,0,1-.108-0.432,0.817,0.817,0,0,1,.108-0.432,0.843,0.843,0,0,0-.432.324,0.966,0.966,0,0,1,.432-0.865V44.8A0.823,0.823,0,0,0,213.307,43.931Zm6.808-10.051a5.124,5.124,0,0,0-1.08-1.081,4,4,0,0,0-1.189-.54,0.521,0.521,0,0,0-.432-0.108,0.7,0.7,0,0,0-.649.216,3.8,3.8,0,0,0-1.4,2.918,0.457,0.457,0,0,0,.324.54c0.325,0.324.757,0.216,0.757,0.648a1.673,1.673,0,0,0,.864.865v0.324a0.913,0.913,0,0,1,.325.324,2.2,2.2,0,0,1,.54-0.108A3.237,3.237,0,0,1,218.6,36.8a1.159,1.159,0,0,1,.217-1.3,1.461,1.461,0,0,1,.972-0.973A1.826,1.826,0,0,1,220.115,33.88Zm-9.834,14.806a3.6,3.6,0,0,1,1.189-2.378A3.376,3.376,0,0,1,210.281,48.686Zm-1.3,3.35a4.294,4.294,0,0,1,.973-2.378A4.3,4.3,0,0,1,208.984,52.036Zm8.321-18.156a0.4,0.4,0,0,0-.108-0.324,0.431,0.431,0,0,1,.217-0.432h-0.325a0.5,0.5,0,0,1,.541-0.216v0.216h0.324l0.108-.108v0.108C218.062,33.556,217.954,33.772,217.305,33.88Zm-4,10.051c-0.108.108-.433,0.108-0.757,0.324A0.647,0.647,0,0,1,213.2,43.5,0.817,0.817,0,0,1,213.307,43.931Zm3.35,19.453c0,0.216-.108.324-0.648,0.648a0.849,0.849,0,0,1,.648-0.865v0.216Zm9.619-12.212a2.33,2.33,0,0,1,1.08-.865A1.435,1.435,0,0,1,226.276,51.171Zm3.242-3.675V47.065a0.761,0.761,0,0,1,.54-0.432A0.963,0.963,0,0,1,229.518,47.5Zm-5.728,6.484,0.108-.324c0-.324.216-0.432,0.648-0.54A2,2,0,0,1,223.79,53.981Zm4.863-5.3a1.571,1.571,0,0,1,.649-0.973A1.324,1.324,0,0,1,228.653,48.686Zm-0.972,1.081a0.216,0.216,0,0,1,.108-0.216,0.8,0.8,0,0,1,.54-0.648A0.965,0.965,0,0,1,227.681,49.767Zm-8.106,10.159a1.073,1.073,0,0,1,.648-0.864A1.121,1.121,0,0,1,219.575,59.925Zm5.728-6.7a1.666,1.666,0,0,1,.756-0.757A0.812,0.812,0,0,1,225.3,53.225Zm-4.755,4.323a1.923,1.923,0,0,1-.865.757A1.166,1.166,0,0,1,220.548,57.548Zm7.781-7.349a0.7,0.7,0,0,1-.648.54,0.974,0.974,0,0,1,.648-0.648V50.2ZM217.414,60.9c0,0.108.108,0.108,0.108,0.216a0.762,0.762,0,0,1-.541.432A0.729,0.729,0,0,1,217.414,60.9Zm-2.594,4.431a3.176,3.176,0,0,1,.864-0.865A1.373,1.373,0,0,1,214.82,65.329Zm3.674-4.647a1.522,1.522,0,0,1,.757-0.648A0.927,0.927,0,0,1,218.494,60.682Zm-9.942-6.376a0.233,0.233,0,0,1-.217.216,0.4,0.4,0,0,1-.108-0.324,0.817,0.817,0,0,1,.108-0.432A1.836,1.836,0,0,1,208.552,54.306Zm3.35-8.538c0-.108-0.108-0.324-0.108-0.432s0.108-.108.324-0.216A0.7,0.7,0,0,1,211.9,45.768Zm4.971,17.076a0.8,0.8,0,0,1,.649-0.648A0.975,0.975,0,0,1,216.873,62.843Zm8.646-10.7c0,0.108,0,.108-0.216.216V52.036l0.324-.324A2.455,2.455,0,0,1,225.519,52.144ZM211.47,46.308a0.494,0.494,0,0,1,.432-0.54A0.761,0.761,0,0,1,211.47,46.308Zm2.593-3.566V42.634l-0.108.108c0,0.108-.216.216-0.216,0.324a0.918,0.918,0,0,0-.324.324,0.635,0.635,0,0,1,.54-0.216,0.335,0.335,0,0,1-.108-0.216A0.409,0.409,0,0,1,214.063,42.742Zm5.08,15.995a0.806,0.806,0,0,0,.324-0.324c0.108,0,.108-0.108.216-0.108a0.82,0.82,0,0,0-.216.432,0.533,0.533,0,0,0-.324.108V58.737Zm-10.051-6.484a0.573,0.573,0,0,1-.216.324V52.252a0.216,0.216,0,0,1,.108-0.216C208.984,52.144,209.092,52.144,209.092,52.252Zm-0.432,1.081a1.012,1.012,0,0,1,.108-0.757A1.6,1.6,0,0,1,208.66,53.333Zm0.216,2.486a0.4,0.4,0,0,1-.108.324V55.711a0.4,0.4,0,0,1,.108-0.324v0.432Zm8.97,6.052,0.432-.865A1.628,1.628,0,0,1,217.846,61.871Zm-7.889-12.212c0-.216,0-0.432.216-0.432A0.82,0.82,0,0,1,209.957,49.658Zm10.7,9.078a0.232,0.232,0,0,0-.216.216c-0.217,0-.108.108-0.217,0.108a0.233,0.233,0,0,1,.217-0.216,1.183,1.183,0,0,0,.216-0.432v0.324Zm-3.675-25.4c0-.108,0-0.216.108-0.216a0.534,0.534,0,0,0,.108.324h-0.216V33.339Zm-2.269,32.206a0.831,0.831,0,0,1-.216.324,1.089,1.089,0,0,1,.108-0.324,0.409,0.409,0,0,0,.216-0.216C214.82,65.437,214.712,65.437,214.712,65.545Zm9.4-10.807a0.377,0.377,0,0,1-.216.108c0.108,0,.108-0.108.216-0.324,0.108,0,.108-0.108.216-0.108Zm-15.779-.973c0-.324,0-0.324.108-0.432A0.522,0.522,0,0,1,208.335,53.765Zm11.024,6.268h-0.108a0.408,0.408,0,0,1,.216-0.216l0.108,0.108A0.334,0.334,0,0,1,219.359,60.033Zm-1.513.432h0.108a0.408,0.408,0,0,0-.216.216,0.4,0.4,0,0,0-.324.108ZM210.281,49.01a0.106,0.106,0,0,1-.108.108V48.686C210.173,48.794,210.281,48.9,210.281,49.01Zm6.376,12.861a0.106,0.106,0,0,0,.108-0.108v0.108a1.553,1.553,0,0,0-.216.324A1.089,1.089,0,0,1,216.657,61.871Zm5.62-5.188a0.216,0.216,0,0,0-.216.108,0.305,0.305,0,0,0,.108-0.324h0.108v0.216Zm7.349-8.106a1.087,1.087,0,0,0-.324.108,1.335,1.335,0,0,1,.324-0.216v0.108Zm-6.593,6.052,0.325-.324v0.108a0.489,0.489,0,0,0-.325.324V54.63ZM218.6,59.493l0.108-.108v0.108a0.408,0.408,0,0,0-.216.216C218.494,59.6,218.6,59.6,218.6,59.493Zm0.541-.648v0.216A0.108,0.108,0,0,1,219.143,58.845Zm-2.378,4.323h-0.108a0.572,0.572,0,0,0,.216-0.324A0.4,0.4,0,0,1,216.765,63.168Zm7.565-8.97a0.365,0.365,0,0,1,.324-0.216Zm-5.944,6.592V60.682h0.108A0.106,0.106,0,0,1,218.386,60.79Zm-10.267-6.052s0-.108.216-0.108c-0.216.108-.216,0.108-0.216,0.216V54.738Zm20.858-5.512a0.306,0.306,0,0,1,.217-0.216Zm-8.1,8.754a0.408,0.408,0,0,0,.216-0.216A0.408,0.408,0,0,1,220.872,57.98Zm4.431-4.755c-0.216.108-.324,0.108-0.324,0.216C224.979,53.333,225.087,53.333,225.3,53.225Zm-0.324-.54,0.108-.108A0.106,0.106,0,0,1,224.979,52.684ZM243.458,10.1a0.843,0.843,0,0,0-.432.324,1.071,1.071,0,0,0-1.189-.865c-0.432,0-.864.108-1.08,0.108h-0.108c-5.4,0-11.24,21.4-12.429,26.694-1.729,8.97-3.242,16.427-3.35,25.181a15.98,15.98,0,0,0,.973,6.593c1.3,2.81,1.945,3.35,3.458,3.891l0.54,0.216a0.216,0.216,0,0,0,.216.108l0.108,0.108c2.27-.108,6.809-3.134,8-4.647,4.647-5.62,7.457-7.889,10.807-16.1a1.635,1.635,0,0,0,.216-0.865,0.647,0.647,0,0,0-.756-0.648,0.334,0.334,0,0,0-.216-0.108l-3.783,5.62a59,59,0,0,1-6.917,9.078c-2.269,2.81-4.647,4.323-6.484,4.539a1.168,1.168,0,0,1-.648-0.108c0-.108-0.108-0.432-0.108-0.54a19.423,19.423,0,0,1-.433-4.539c0-.973.108-2.053,0.216-3.242a71.581,71.581,0,0,1,1.622-8.106,4.683,4.683,0,0,0,.108-0.54l0.756-1.621s3.783-11.564,3.783-11.78,2.593-8,2.7-8.105,2.054-6.593,2.054-6.593l1.945-5.728a29.344,29.344,0,0,0,.649-6.268V11.292A2.19,2.19,0,0,0,243.458,10.1ZM230.922,49.226l1.837-6.484a1.194,1.194,0,0,1-.108-0.757c0.108-4.863,7.133-28.315,8.97-27.991a1.008,1.008,0,0,1,.757.432,5.433,5.433,0,0,1-.433,1.4S231.03,49.226,230.922,49.226Zm1.405-21.29a2.521,2.521,0,0,1,1.081-1.3v0.54c0,0.54-.541.54-0.649,0.973-1.189,5.188-1.621,7.457-2.594,11.348-0.648,4-1.08,5.188-1.621,9.4-0.108.757-1.188,9.186-1.405,9.835,0,0.108-.108.108-0.108,0.216,0-.108-0.216-0.216-0.216-0.324a13.524,13.524,0,0,0,.324-2.053c0.649-5.512,1.189-11.672,2.594-16.967Zm1.3-2.594a27.522,27.522,0,0,1,1.837-5.512,34.621,34.621,0,0,1-1.837,5.944V25.342Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>
        </DefaultLayout>

)}