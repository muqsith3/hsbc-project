import React from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'

export default function Email() {

  return (
    <>
        <div className='container pb-10'>
            <div className='bg-[#cbded2]'>
                <div className='grid grid-cols-2 gap-2 p-4 justify-center '>
                    <div className='items-center justify-center pl-20'>
                        <h3 className='font-bold text-slate-700'>Sign up and join the Port of Mokha family</h3>
                        <p className='text-slate-700'>Receive early access to special coffee offerings, discounts on the stuff you love, and updates on our coffee adventures.</p>
                    </div>
                    <div className='items-center justify-center py-5 pl-20'>
                        <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                            <input
                                type="email"
                                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-slate-100 px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder="Sign up for emails update "
                                required
                            />
                            <button
                                class="!absolute right-1 top-1 z-10 select-none rounded bg-slate-950 py-2.5 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                <RiSendPlaneFill/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
