import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import StatesUT from '../../DataList/StatesUT.json'

function LoginRegister() {
  return (
    <form className='w-full flex justify-center items-center p-10'>
      <Tabs defaultValue='userLogin' className='border flex flex-col justify-normal items-center p-5'>
        <TabsList className="py-4">
          <TabsTrigger value="userLogin">User Login</TabsTrigger>
          <TabsTrigger value="userRegister">User Register</TabsTrigger>
          <TabsTrigger value="sellerLogin">Seller Login</TabsTrigger>
          <TabsTrigger value="sellerRegister">Seller Register</TabsTrigger>
        </TabsList>
        <TabsContent value="userLogin" className="w-full">
          <div className='w-full flex justify-center items-center'>
            <img src="../../../../loginAvatar.webp" alt="Login Avatar" className='w-[8rem] pt-6' />
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="email" className='text-lg'>Email:</label>
            <input type="email" id="email" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="password" className='text-lg'>Password:</label>
            <input type="password" id="password" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex justify-center items-center pt-10'>
            <button type="submit" className='bg-[#35A853] py-2 px-6 font-semibold rounded shadow text-white hover:bg-[#20a343] transition-all duration-75 hover:translate-y-0.5'>Login</button>
          </div>
        </TabsContent>
        <TabsContent value="userRegister" className="w-full">
          <div className='w-full flex justify-center items-center'>
            <img src="../../../../loginAvatar.webp" alt="Register Avatar" className='w-[8rem] pt-6' />
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="email" className='text-lg'>First Name</label>
            <input type="text" id="firstName" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="email" className='text-lg'>Last Name</label>
            <input type="text" id="lastName" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="email" className='text-lg'>Email:</label>
            <input type="email" id="email" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="phoneNumber" className='text-lg'>Phone Number:</label>
            <input type="number" id="phoneNumber" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex flex-row gap-4 items-center pt-6'>
            <label htmlFor='location' className='text-lg'>State & UT:</label>
            <select name="location" id="location" className='border h-10 px-2 font-semibold tracking-wider rounded'>
              {
                StatesUT.map((state) => {
                  return (
                    <option key={state.id} value={state.value}>{state.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='w-full flex flex-col gap-1 pt-6'>
            <label htmlFor="password" className='text-lg'>Password:</label>
            <input type="password" id="password" className='border h-10 px-2 font-semibold tracking-wider rounded' />
          </div>
          <div className='w-full flex flex-row items-center gap-2 pt-6'>
            <input type="checkbox" id="terms" className='h-5 w-5' />
            <label htmlFor="terms" className='text-lg'>I agree to the terms and conditions</label>
          </div>
          <div className='w-full flex justify-center items-center pt-10'>
            <button type="submit" className='bg-[#35A853] py-2 px-6 font-semibold rounded shadow text-white hover:bg-[#20a343] transition-all duration-75 hover:translate-y-0.5'>Register</button>
          </div>
        </TabsContent>
      </Tabs>
    </form>
  )
}

export default LoginRegister