import Link from "next/link";
import { FaBlog, FaBuffer, FaMendeley } from "react-icons/fa6";
const SideBar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                <img
                  src="/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul>
            <li>
              <Link className="navLink" href="/dashboard">
                <FaBuffer /> Dashboard
              </Link>
            </li>
            <li>
              <Link className="navLink" href="/dashboard/service">
                <FaMendeley /> Service
              </Link>
            </li>
            <li>
              <Link className="navLink" href="/dashboard/blog">
                <FaBlog /> Blog
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
