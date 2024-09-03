import React from 'react'

export const Signup = () => {
  return (
    <>


      <section class="bg-slate-900 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-200 md:text-5xl lg:text-5xl ">Join ClicknCart</h1>
            <p class="mb-6 text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400">Get premium benefits</p>
            {/* <a href="#" class="text-orange-700 hover:underline font-medium text-lg inline-flex items-center">Get premium benefits:
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
             
            </a> */}
            <img src="public\images\signin.png" alt="signup" class="w-64 h-64" />
            <p class="mb-6 text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400">Already have an account ? <button class="text-orange-700   hover:text-red-400">Login</button></p>

          </div>
          <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-slate-800 rounded-lg shadow-xl dark:bg-gray-800">
              <h2 class="text-2xl font-bold text-gray-200 dark:text-white">
               Signup 
              </h2>
              <form class="mt-8 space-y-6" action="#">
              <button className="border-2 border-orange-700 text-orange-700 font-bold px-4 py-2 rounded-md mb-2 hover:text-white hover:bg-orange-700 focus:text-blue-500 active:text-blue-500 focus:outline-none w-full">Signup with Google</button>
                <div>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">First Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter your First Name" class="bg-slate-700 border border-gray-500 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Last Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter your Last Name" class="bg-slate-700 border border-gray-500 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" class="bg-slate-700 border border-gray-500 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Your password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-slate-700 border border-gray-500 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                  </div>
                  <div class="ms-3 text-sm">
                    <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                  </div>
                </div>
                <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-red-400  focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
                
              </form>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
