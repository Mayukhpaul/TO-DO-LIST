import React from "react";
import { LuListTodo } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-30">
        <div class="flex text-gray-900">
          <aside class="flex h-screen w-20 flex-col items-center bg-basic-600">
            <div class="flex h-[4.5rem] w-full items-center justify-center border-gray-200 p-2 text-5xl">
              <LuListTodo />
            </div>
            <nav class="flex flex-1 flex-col gap-y-4 pt-10">
              <a
                href="http://localhost:3000/"
                class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50 hover:text-blue-600"
              >
                <AiFillHome className="text-2xl" />
                <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                  <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                    <div class="absolute inset-0 -left-1 flex items-center">
                      <div class="h-2 w-2 rotate-45 bg-white"></div>
                    </div>
                    Home
                  </div>
                </div>
              </a>
              <a
                href="http://localhost:3000/taskpage"
                class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50 hover:text-blue-600"
              >
                <svg
                  class="h-6 w-6 stroke-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 9V15M9 12H15H9Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                  <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                    <div class="absolute inset-0 -left-1 flex items-center">
                      <div class="h-2 w-2 rotate-45 bg-white"></div>
                    </div>
                    Add Task
                  </div>
                </div>
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Navbar;
