import React from "react";

export const Component = ({ state, children }) => {
  return (
    <div className="md:hidden">
      {state.modal ? (
        <div className="fixed right-[-1px] top-0 z-[100] h-[100vh] w-[100vh] translate-x-[-1px] bg-black bg-opacity-95 transition">
          <div className="fixed right-[-1px] top-0 h-[100vh] w-[100rem] translate-x-[-1px] bg-white transition  dark:bg-gray-900">
            <div className="px-8 pt-8 pb-6">
              <button
                onClick={() => state.setModal(!state.modal)}
                className="float-right mb-3 -mr-2"
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
                <nav className="grid gap-y-8"></nav>
              </div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
  // state.modal ? (
  //   <div className="fixed right-[-1px] top-0 z-[100] h-[100vh] w-[100vw] translate-x-[-1px] bg-black bg-opacity-75 text-black transition dark:text-white">
  //     <div className="px-8 pt-8 pb-6">
  //       <button
  //         onClick={() => state.setModal(!state.modal)}
  //         className="float-right mb-3 -mr-2"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           stroke="currentColor"
  //           aria-hidden="true"
  //           className="h-6 w-6"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M6 18L18 6M6 6l12 12"
  //           ></path>
  //         </svg>
  //       </button>

  //       <div className="relative z-10 mt-[5rem]"></div>
  //     </div>
  //   </div>
  // ) : (
  //   children
  // );
};

export default Component;
