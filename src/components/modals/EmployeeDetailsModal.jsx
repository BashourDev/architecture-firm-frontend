import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const EmployeeDetailsModal = ({ employeeID, isOpen, setIsOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto font-droid-kufi"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/10" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-4xl 2xl:max-w-6xl text-left p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <img src={`/assets/team/${employeeID}.jpg`} alt={employeeID} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EmployeeDetailsModal;
