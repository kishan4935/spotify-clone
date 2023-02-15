import { useState } from "react";
import { FaCloudsmith, FaBolt, FaSlackHash, FaHatWizard } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdPin } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="lg:w-40 md:w-32 py-4 md:flex hidden flex-col items-center gap-y-24 px-10 bg-neutral">
        <div className="flex items-center gap-4 lg:text-3xl md:text-xl">
          <FaCloudsmith /> <p>Musix</p>
        </div>
        <div className="flex flex-col gap-y-10 text-3xl">
          <Link to="/">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/" ? "text-primary" : "hover:text-secondary"
              }`}
              data-tip="Explore"
            >
              <FaBolt />
            </div>
          </Link>
          <Link to="/top-charts">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/top-charts"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
              data-tip="Trending"
            >
              <FaSlackHash />
            </div>
          </Link>
          <Link to="/top-artists">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/top-artists"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
              data-tip="Top Artists"
            >
              <FaHatWizard />
            </div>
          </Link>
          <Link to="/around-you">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/around-you"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
              data-tip="Around you"
            >
              <IoMdPin />
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-neutral backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-center gap-4 lg:text-3xl md:text-3xl text-3xl px-20 text-amber-400 border-b-2 pb-4">
          <FaCloudsmith /> <p>Musix</p>
        </div>
        <div className="flex flex-col gap-y-10 text-3xl mt-10 px-20">
          <Link to="/">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/" ? "text-primary" : "hover:text-secondary"
              }`}
              data-tip="Explore"
            >
              <FaBolt /> Explore
            </div>
          </Link>
          <Link to="/top-charts">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/top-charts"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
              data-tip="Trending"
            >
              <FaSlackHash /> Trending
            </div>
          </Link>
          <Link to="/top-artists">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/top-artists"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
              data-tip="Top Artists"
            >
              <FaHatWizard /> Top Artists
            </div>
          </Link>
          <Link to="/around-you">
            <div
              className={`tooltip tooltip-right tooltip-primary flex gap-4 items-center ${
                pathname === "/around-you"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
              data-tip="Around you"
            >
              <IoMdPin /> Around You
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;