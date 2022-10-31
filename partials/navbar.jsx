import Link from "next/link";
import React from "react";

function AppNavbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between py-6 bg-slate-700 px-6">
      <Link href="/">
        <a className="text-3xl text-white font-bold">LOKDEVPTSTRACKER</a>
      </Link>

      <ul className="flex flex-auto w-80 pl-0 list-style-none mr-auto ml-5 font-semibold text-xl">
        {/* <li className="nav-item btn-navbar">
          <Link
            className="nav-link active"
            aria-current="page"
            href="/devptstracker"
          >
            Dev Pts Tracker
          </Link>
        </li> */}
        {/* <li className="nav-item btn-navbar">
          <Link className="nav-link active" aria-current="page" href="/">
            Support
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default AppNavbar;
