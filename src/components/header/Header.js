import { Link } from "react-router-dom";
import cx from "classnames";

import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import { Btn } from "../button/Button";

function Divider() {
  return (
    <div className="h-5 mx-4 border-1 border-r border-slate-300 dark:border-slate-700" />
  );
}

function Header() {
  function onTheme() {
    const root = q("html");
    const isDark = q.is(root, ".dark");
    if (isDark) {
      localStorage.theme = "light";
      root.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      root.classList.add("dark");
    }
  }

  return (
    <header
      className={cx([
        "sticky",
        "w-full",
        "top-0",
        "z-40",
        "transition-colors",
        "duration-500",

        "border-b",
        "border-slate-200",
        "dark:border-slate-700",
        "dark:border-slate-50/[0.06]",

        "backdrop-blur",
        "bg-white",
        "dark:bg-slate-900/75",
      ])}
    >
      <div className="mx-auto w-11/12 md:w-10/12 lg:w-9/12">
        <div className="py-3">
          <div className="relative flex items-center">
            <Link to="/" className="">
              NW AVL
            </Link>

            <div className="relative flex items-center ml-auto">
              <div className="hidden md:contents">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  {/* Nav Links */}
                  <ul className="flex space-x-8 items-center">
                    <li>
                      <Link className="hover:text-sky-500" to="/troubleshooting">
                        Troubleshooting
                      </Link>
                    </li>
                  </ul>
                </nav>

                <Divider />
              </div>


              <Divider />

              {/* Theme Toggle */}
              <Btn
                id="theme-toggle"
                onClick={onTheme}
                className="p-1 rounded -ml-2"
              >
                <span className="sr-only">Theme</span>
                <Sun className="dark:hidden w-6 h-6 text-sky-500" />
                <Moon className="hidden dark:inline w-6 h-6 text-sky-500" />
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
