// import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsSuitHeartFill } from 'react-icons/bs';

function Modal() {
  return (
    <div>
      <div>
        {/* Open the modal using ID.showModal() method */}
        <button className="btn" onClick={() => window.my_modal_1.showModal()}>
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <form
            method="dialog"
            className="bg-[#0e1a30] modal-box w-9/12 max-w-3xl rounded-none p-8"
          >
            <div className="">
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold text-4xl uppercase">monzo</h1>
                <div className="flex space-x-4">
                  <AiOutlineMinusCircle className="text-4xl text-gray-600" />
                  <AiOutlinePlusCircle className="text-4xl text-gray-600" />
                </div>
              </div>
              <hr className="h-px  bg-white border-[1px] dark:bg-gray-700"></hr>
              <br />
              <section className="space-y-14">
                <div className="flex justify-between">
                  <div>
                    <h1 className="uppercase text-2xl">monzo bank limited</h1>
                    <h2 className="text-lg">Fintech</h2>
                  </div>
                  <BsSuitHeartFill className="text-red-600 text-2xl" />
                </div>

                <div className="md:flex md:space-x-32 mt-5">
                  <div className="text-2xl">
                    <h1>Sector</h1>
                    <h2>Fintech</h2>
                  </div>
                  <div className="text-2xl">
                    <h1>Total shares available</h1>
                    <h2 className="text-2xl">1435</h2>
                  </div>
                  <div className="text-2xl">
                    <h1>Price per share</h1>
                    <h2>$19</h2>
                  </div>
                </div>

                <div>
                  <p className="text-xl">Number of share you want to buy</p>
                  <input
                    type="text"
                    placeholder="Enter number of shares"
                    className="block w-[50%] p-4 text-gray-900 border border-[#C6CACD] rounded-lg bg-transparent "
                  />
                </div>

                <div className="flex space-x-6 text-white">
                  <button className=" bg-[#6096BA] rounded py-3 px-12">
                    Back
                  </button>
                  <button className="bg-[#0e1a30] border-[1px] border-[#C6CACD] rounded py-3 px-10">
                    Arrange
                  </button>
                  <button className="bg-[#0e1a30] border-[1px] border-[#C6CACD] rounded py-3 px-10">
                    Negotiable
                  </button>
                </div>
              </section>
            </div>

            {/* <div className="modal-action">

              <button className="btn">Close</button>
            </div> */}
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default Modal;
