import React from "react";

export const MobileMenu = ({ data, state }) => {
  return (
    <div className="md:hidden">
      {state.visible ? (
        <div className="fixed right-[-1px] top-0 h-[100vh] w-[100vh] translate-x-[-1px] bg-black bg-opacity-75 text-black transition dark:text-white">
          <div className="fixed right-[-1px] top-0 h-[100vh] w-[24rem] translate-x-[-1px] bg-white transition  dark:bg-gray-900">
            <div className="px-8 pt-8 pb-6">
              <button
                onClick={() => state.setMobileMenu(!state.visible)}
                className="float-right -mr-2 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="relative z-10 mt-[5rem]">
                <nav className="grid gap-y-8">
                  {data.map((item: { name: string; href: string }) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-sm border-[1px] border-gray-500/60  p-3 hover:bg-black/20"
                    >
                      <h1 className="my-3 ml-3 font-bold ">{item.name}</h1>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => state.setMobileMenu(!state.visible)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MobileMenu;
