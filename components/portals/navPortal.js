import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { CSSTransition } from "react-transition-group";

import { MdClose, MdPerson } from "react-icons/md";
// import "../../styles/index.css";

function NavPortal({ isModalOpen, setModalOpen, navLinks }) {
  const [mounted, setMounted] = useState(false);

  const domElRef = useRef(null);
  const nodeRefOverlay = useRef(null);
  const nodeRefModal = useRef(null);

  useEffect(() => {
    domElRef.current = document.getElementById("_navPortal");
    setMounted(true);
    return () => {
      setMounted(false);
    };
  });

  // to stop scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const navLinksJSX = navLinks.map((el, i) => (
    <li
      key={i}
      className="active:underline transition-all"
      onClick={() => {
        setModalOpen(false);
      }}
    >
      <Link href={el.path}>{el.title}</Link>
    </li>
  ));

  return mounted && domElRef.current
    ? createPortal(
        <>
          <CSSTransition
            in={isModalOpen}
            unmountOnExit
            timeout={500}
            nodeRef={nodeRefOverlay}
            classNames="nav_overlay"
          >
            <div
              ref={nodeRefOverlay}
              className="fixed top-0 left-0 z-45 w-screen h-screen bg-color-grey-darker opacity-80"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <style jsx>
                {`
                  .nav_overlay-enter {
                    opacity: 0;
                  }
                  .nav_overlay-enter-active {
                    opacity: 0.8;
                    transition: all 0.3s;
                  }

                  .nav_overlay-exit {
                    opacity: 0.8;
                  }
                  .nav_overlay-exit-active {
                    opacity: 0;
                    transition: all 0.3s;
                  }
                `}
              </style>
              {/* <div>Hello World</p> */}
            </div>
          </CSSTransition>
          <CSSTransition
            nodeRef={nodeRefModal}
            in={isModalOpen}
            unmountOnExit
            timeout={500}
            classNames="nav_modal"
          >
            <div
              className="bg-color-grey-lightest w-2/3 md:w-1/3 h-screen pl-8 pt-8 fixed top-0 left-0 z-30 shadow-xl shadow-color-grey-darker"
              ref={nodeRefModal}
            >
              <style jsx>{`
                .nav_modal-enter {
                  transform: translateX(-105%);
                }
                .nav_modal-enter-active {
                  transform: translateX(0);
                  transition: all 0.5s;
                }

                .nav_modal-exit {
                  transform: translateX(0);
                }
                .nav_modal-exit-active {
                  transform: translateX(-105%);
                  transition: all 0.5s;
                }
              `}</style>
              <button
                className="mb-4 font-semibold border border-color-grey-darkest rounded px-2 py-1 active:bg-color-grey-darker active:text-color-grey-lightest flex items-center gap-2"
                onClick={() => setModalOpen(false)}
              >
                Close
                <MdClose className="text-xl font-semibold" />
              </button>
              <ul className="flex flex-col gap-2 font-semibold">
                {navLinksJSX}
              </ul>
              <ul className="flex items-center my-4 font-semibold gap-4 text-base">
                <li
                  className="px-2 py-1 border border-color-primary-darker text-color-grey-lightest bg-color-primary-darker p-2 rounded-md hover:bg-color-primary-lighter hover:text-color-primary-darkest transition-all"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  <Link href="/login" className="flex items-center gap-2">
                    Login <MdPerson />
                  </Link>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </>,
        domElRef.current
      )
    : null;
}

export default NavPortal;

// function NavPortal({ isModalOpen, setModalOpen }) {
//   const [mounted, setMounted] = useState(false);

//   // const [isModalOpen, setModalOpen] = useState(false);

//   const domElRef = useRef(null);

//   useEffect(() => {
//     domElRef.current = document.getElementById("_navPortal");
//     setMounted(true);
//     return () => {
//       setMounted(false);
//     };
//   }, []);
//   const nodeRef = useRef(null);

//   const modalJSX = (
//     <>
//       <CSSTransition
//         ref={nodeRef}
//         in={isModalOpen}
//         timeout={400}
//         unmountOnExit
//         classNames="my-nodes"
//       >
//         <div className="fixed top-0 left-0 z-25 w-screen h-screen bg-color-grey">
//           <div
//             ref={nodeRef}
//             className="bg-color-grey-lighter w-2/3 h-screen pl-8 pt-8"
//           >
//             <button
//               className="font-semibold border border-color-grey-darkest rounded px-2 py-1 mb-4 active:bg-color-grey-darker active:text-color-grey-lightest"
//               onClick={() => setModalOpen(false)}
//             >
//               Close
//             </button>
//             <p>Nav Portal</p>
//           </div>
//         </div>
//       </CSSTransition>
//     </>
//   );

//   // return (
//   //   <>
//   //     {mounted
//   //       ? createPortal(modalJSX, document.getElementById("_navPortal"))
//   //       : null}
//   //   </>
//   // );

//   return mounted && domElRef.current
//     ? createPortal(modalJSX, domElRef.current)
//     : null;
// }

// export default NavPortal;
