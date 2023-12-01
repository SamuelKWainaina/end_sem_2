import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Paypal from '../../pages/cart/PayPalButton';

export default function Modal({ name, setName, setAddress, setPhoneNumber, buyNow }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handlePaymentSuccess = () => {
    // Handle any logic you need after the payment is successful
    // For example, close the modal
    closeModal();
  };

  return (
    <>
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-blue-900 py-2 text-center rounded-lg text-white font-bold "
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-4 space-y-2 md:space-y-4 sm:p-6">
                          <form className="space-y-2" action="#">
                            <div>
                              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                Full Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                name="name"
                                id="name"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                                Delivery Address
                              </label>
                              <input
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                name="address"
                                id="address"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">
                                Mobile Number
                              </label>
                              <input
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 bg-gray-100"
                                required
                              />
                            </div>
                          </form>
                          <Paypal onSuccess={handlePaymentSuccess} />
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
