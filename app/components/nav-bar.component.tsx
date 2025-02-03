import { Link, useMatches } from "@remix-run/react";
import Logo from "./logo.component";

export default function NavBar() {
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname;

  const isActive = (path: string) => currentPath === path ? 'active' : '';;

  return (
    <div className="bg-gray">
      <div className="container max-2xl mx-auto">
        <nav>
          <div className="flex flex-wrap items-stretch justify-between px-4">
            <a href="https://flowbite.com/" className="flex items-center pr-5 py-2.5 z-[0] relative before:absolute before:top-0 before:bottom-0 before:-right-[25px] before:w-[100px] before:bg-gray-lighter before:transform before:skew-x-[20deg] before:z-[-1] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[360%] after:bg-gray-lighter after:z-[-1]">
              <Logo />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto items-stretch" id="navbar-default">
              <ul className="font-medium flex flex-row h-full">
                <li>
                  <Link reloadDocument to="/" aria-current="page" className={isActive('/')}><span>HOME</span></Link>
                </li>
                <li>
                  <Link reloadDocument to="/about" className={isActive('/about')}><span>ABOUT</span></Link>
                </li>
                <li>
                  <Link reloadDocument to="/projects" className={isActive('/projects')}><span>PROJECTS</span></Link>
                </li>
                <li>
                  <Link reloadDocument to="/contact" className={isActive('/contact')}><span>CONTACT</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
      </div>
    </div>
  );
}
