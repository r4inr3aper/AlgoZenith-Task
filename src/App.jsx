import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Banner from "./Banner.svg";
import SideBar from "./components/SideBar";
import logo from "./images/logo.png" 
import {
  HiBell,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import Topic from "./components/Topic";
import SidebarCompressed from "./components/SidebarCompressed";

function HamburgerIcon({ onClick }) {
  return (
    <div style={{ color: "#333" }} onClick={onClick} className="hover-pointer">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="24"
        width="24"
      >
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
    </div>
  );
}

function App() {
  const [activeChapter, setActiveChapter] = useState(1);
  const [hidden, setHidden] = useState(false);
  return (
    <div className="px-3 py-4 px-lg-5 px-md-4">
      <div className="d-flex container-fluid p-0 justify-content-between w-100 mx-2">
        <div className="d-flex gap-3 align-items-center">
          <HamburgerIcon onClick={() => setHidden(!hidden)} />
          <a href="/">
            <div class="logo-container">
    <img src={logo} alt="Logo 1" class="logo secondary-logo" width={40} height={40}/>
    <img src={Banner} alt="Logo 2" class="logo main-logo" />
</div>

          </a>

        </div>
        <div className="d-flex gap-3 align-items-center">
          <HiBell className="p-2 rounded background-blue icon-size" />
          <div className="rounded rounded-circle bg-secondary profile-size"></div>
        </div>
      </div>

      <main>
        {!hidden && (
          <div className="d-flex d-md-none overlay ">
            <div className="bg-light py-4 px-3">
              <div className="d-flex gap-3 align-items-center mb-4">
                <HamburgerIcon onClick={() => setHidden(!hidden)} />
                <a href="/">
                  <img src={Banner} alt="Banner" className="img img-fluid" />
                </a>
              </div>

              <SideBar />
            </div>
          </div>
        )}
        <div className="d-flex mt-4 ">
          <div className="d-none d-md-block">
            {hidden ? <SidebarCompressed /> : <SideBar />}
          </div>
          <div class=" px-lg-4 px-md-3 flex-grow-1 ms-0 px-xxl-5  mx-xxl-auto ">
            <div className="main-border">
              <div className="d-flex pb-3 align-items-center justify-content-between gap-3 flex-wrap m-3 m-sm-4 mb-0 mb-sm-0 mainheader">
                <div className="main-tags p-2">
                  <button className="transparent-bg border-0 dmsans tag">
                    <div className="d-flex gap-2">
                      <HiOutlineCalendar className="sidebar-icon" />{" "}
                      <span className="fs-6 ">Mentor Sessions</span>
                    </div>
                  </button>
                  <button className="bg-light dmsans active-tag">
                    <div className="d-flex gap-2 ">
                      <HiOutlineBriefcase className="sidebar-icon" />{" "}
                      <span className="fs-6">Mentor Sessions</span>
                    </div>
                  </button>
                </div>
                <div className="ms-auto">
                  <div className="d-flex dmsans align-items-center gap-2 chapters-border p-2 ">
                    <HiOutlineInformationCircle />
                    <div>How it works</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 px-3 d-lg-flex px-lg-4 px-md-3 ">
                <div className="w-100 d-none d-sm-flex d-lg-none px-3 py-3 background-blue chapters-border mb-3 dmsans align-items-center gap-2 ">
                  <div>Chapters</div>
                  <div
                    className={`${
                      activeChapter === 1 ? "active-chapter" : "chapter"
                    }`}
                    onClick={() => setActiveChapter(1)}
                  >
                    1
                  </div>
                  <div
                    className={`${
                      activeChapter === 2 ? "active-chapter" : "chapter"
                    }`}
                    onClick={() => setActiveChapter(2)}
                  >
                    2
                  </div>
                  <div
                    className={`${
                      activeChapter === 3 ? "active-chapter" : "chapter"
                    }`}
                    onClick={() => setActiveChapter(3)}
                  >
                    3
                  </div>
                  <div
                    className={`${
                      activeChapter === 4 ? "active-chapter" : "chapter"
                    }`}
                    onClick={() => setActiveChapter(4)}
                  >
                    4
                  </div>
                  <div
                    className={`${
                      activeChapter === 5 ? "active-chapter" : "chapter"
                    }`}
                    onClick={() => setActiveChapter(5)}
                  >
                    5
                  </div>
                  <div
                    className={`${
                      activeChapter === 6 ? "active-chapter" : "chapter"
                    }`}
                    onClick={() => setActiveChapter(6)}
                  >
                    6
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-end mb-3 mt-1 d-sm-none">
                  <label>Chapters:</label>
                  <select
                    onClick={() => setActiveChapter(1)}
                    className="w-25 px-2 ms-2 "
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
                <div className="d-lg-flex d-none flex-column w-33 me-3">
                  <div
                    className={`d-flex dmsans justify-content-between  ${
                      activeChapter === 1 ? "background-blue px-2 py-3" : "p-3"
                    } rounded hover-pointer`}
                    onClick={() => setActiveChapter(1)}
                  >
                    <p
                      className={`mb-0 ${activeChapter === 1 ? "fw-bold" : ""}`}
                    >
                      Chapter 1
                    </p>
                    <div className="d-flex align-items-center gap-1 time">
                      {activeChapter === 1 && (
                        <HiOutlineClock className="sidebar-icon " />
                      )}
                      {activeChapter === 1 && (
                        <div className="fw-normal">05:00:00</div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`d-flex dmsans justify-content-between gap-1 p-3 ${
                      activeChapter === 2 ? "background-blue px-2 py-3" : "p-3"
                    } rounded hover-pointer`}
                    onClick={() => setActiveChapter(2)}
                  >
                    <p
                      className={`mb-0 ${activeChapter === 2 ? "fw-bold" : ""}`}
                    >
                      Chapter 2
                    </p>
                    <div className="d-flex align-items-center gap-1 time">
                      {activeChapter === 2 && (
                        <HiOutlineClock className="sidebar-icon " />
                      )}
                      {activeChapter === 2 && (
                        <div className="fw-normal">05:00:00</div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`d-flex dmsans justify-content-between gap-1 p-3 ${
                      activeChapter === 3 ? "background-blue px-2 py-3" : "p-3"
                    } rounded hover-pointer`}
                    onClick={() => setActiveChapter(3)}
                  >
                    <p
                      className={`mb-0 ${activeChapter === 3 ? "fw-bold" : ""}`}
                    >
                      Chapter 3
                    </p>
                    <div className="d-flex align-items-center gap-1 time">
                      {activeChapter === 3 && (
                        <HiOutlineClock className="sidebar-icon " />
                      )}
                      {activeChapter === 3 && (
                        <div className="fw-normal">05:00:00</div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`d-flex dmsans justify-content-between gap-1 p-3 ${
                      activeChapter === 4 ? "background-blue px-2 py-3" : "p-3"
                    } rounded hover-pointer`}
                    onClick={() => setActiveChapter(4)}
                  >
                    <p
                      className={`mb-0 ${activeChapter === 4 ? "fw-bold" : ""}`}
                    >
                      Chapter 4
                    </p>
                    <div className="d-flex align-items-center gap-1 time">
                      {activeChapter === 4 && (
                        <HiOutlineClock className="sidebar-icon " />
                      )}
                      {activeChapter === 4 && (
                        <div className="fw-normal">05:00:00</div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`d-flex dmsans justify-content-between gap-1 p-3 ${
                      activeChapter === 5 ? "background-blue px-2 py-3" : "p-3"
                    } rounded hover-pointer`}
                    onClick={() => setActiveChapter(5)}
                  >
                    <p
                      className={`mb-0 ${activeChapter === 5 ? "fw-bold" : ""}`}
                    >
                      Chapter 5
                    </p>
                    <div className="d-flex align-items-center gap-1 time">
                      {activeChapter === 5 && (
                        <HiOutlineClock className="sidebar-icon " />
                      )}
                      {activeChapter === 5 && (
                        <div className="fw-normal">05:00:00</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 mb-3">
                  <div className="d-flex flex-column gap-3">
                    <Topic {...{ part: 1, sections: 5, completed: 45 }} />
                    <Topic {...{ part: 2, sections: 12, completed: 20 }} />
                    <Topic {...{ part: 3, sections: 12, completed: 0 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
