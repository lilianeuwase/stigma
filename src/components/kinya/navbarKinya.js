import { Link, NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import "../navbar.css";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarKinya() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleIsOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeSideBar = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 -m-1.5 p-1.5 text-indigo-800 font-bold navbar-logo ">
          <img
            className="h-8 w-auto"
            src={require("../../images/logo1.png")}
            alt=""
          />
          Abortion Stigma
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <NavLink
            to="/kinya"
            className="text-sm font-semibold leading-6 text-gray-900 hover-item "
          >
            Ahabanza
          </NavLink>

          <NavLink
            to="/kinyaresources"
            className="text-sm font-semibold leading-6 text-gray-900 hover-item"
          >
            Ibyerekeye Gukuramo Inda
          </NavLink>
          <NavLink
            to="/kinyaimpactmodel"
            className="text-sm font-semibold leading-6 text-gray-900 hover-item"
          >
            Icyitegererezo
          </NavLink>
          <NavLink
            to="/kinyapartnership"
            className="text-sm font-semibold leading-6 text-gray-900 hover-item"
          >
            Ubufatanye
          </NavLink>
          <NavLink
            to="/kinyagetinvolved"
            className="text-sm font-semibold leading-6 text-gray-900 hover-item1"
          >
            Fatanya Natwe <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <NavLink
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover-item2"
          >
           English 
           {/* <span aria-hidden="true">&rarr;</span> */}
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        // mobileMenuOpen={mobileMenuOpen}
        // onOpen={handleIsOpen}
        // onClose={handleIsOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/kinya"
              className="-m-1.5 p-1.5 text-indigo-800 font-bold navbar-logo "
            >
              <img
                className="h-8 w-auto absolute left-16"
                src={require("../../images/logo1.png")}
                alt=""
              />
              Abortion Stigma
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  onClick={closeSideBar}
                  to="/kinya"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Ahabanza
                </NavLink>
                <NavLink
                  onClick={closeSideBar}
                  to="/kinyaresources"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Ibyerekeye Gukuramo Inda
                </NavLink>
                <NavLink
                  onClick={closeSideBar}
                  to="/kinyaimpactmodel"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Icyitegererezo
                </NavLink>
                <NavLink
                  onClick={closeSideBar}
                  to="/kinyapartnership"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Ubufatanye
                </NavLink>
                <NavLink
                  onClick={closeSideBar}
                  to="/kinyagetinvolved"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Fatanya Natwe
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  onClick={closeSideBar}
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  English
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
