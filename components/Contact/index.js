"use client";
import React, { useState } from 'react'
import { Icon } from "@iconify/react";

function Contact() {
  const [checked, setChecked] = useState(true);

  return (
    <div className='bg-dracula-cyan min-h-screen flex lg:flex-row items-center justify-center flex-col font-montserrat' id='contact'>
      <div
        className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-24 md:py-20 lg:-mr-14"
      >
        <h2 className="mb-12 text-3xl font-bold text-skin-base-light">Any Questions? <span className='text-dracula-orange'>Tell Us!</span></h2>
        <form>
          <div className="relative mb-6">
            <input
              type="text"
              className="border border-dracula-cyan peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput90"
              placeholder="Name"
            />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-skin-base-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]"
            >Name
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              className="border border-dracula-cyan peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91"
              placeholder="Email address" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-skin-base-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]"
            >Email address
            </label>
          </div>
          <div className="relative mb-6">
            <textarea
              className="border border-dracula-cyan peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"></textarea>
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-skin-base-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]"
            >Message</label>
          </div>
          <div
            className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-dracula-background checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-dracula-background checked:focus:after:bg-transparent"
              type="checkbox"
              value=""
              id="exampleCheck96"
              checked={checked}
              onClick={() => setChecked(!checked)}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
            >
              Send me a copy of this message
            </label>
          </div>
          <button
            type="button"
            className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-skin-base-light shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact