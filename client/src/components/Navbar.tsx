"use client"
import Link from "next/link";
import { LogoutButton } from "./LogOutButton";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between items-center p-4">
      {/* Bagian Kiri */}
      <div className="flex-none flex items-center gap-4">
        <Link href="/">
          <button className="btn btn-ghost text-xl">Strum Paradise</button>
        </Link>
      </div>

      {/* Bagian Kanan */}
      <div className="flex-none flex items-center gap-2">
        <Link href="/" >
          <button className="btn btn-ghost text-md">Home</button>
        </Link>
        <Link href="/products" >
          <button className="btn btn-ghost text-md">Products</button>
        </Link>
        <Link href="/about" >
          <button className="btn btn-ghost text-md">About</button>
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-5">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <div className="card-actions justify-center">
                <Link href='/wishlist'>
                <button className="btn btn-accent btn-block">View cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Link href={'/login'}>
        <button className="btn btn-outline btn-default text-white mr-5">Login</button>
        </Link>
        <LogoutButton/>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
