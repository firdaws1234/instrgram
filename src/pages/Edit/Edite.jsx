import React from 'react'

import meta from '../../assets/Group.png'
import firdaws from '../../assets/firdaws.png'

const Edite = () => {
  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[100vh] '>
      <div className='w-[80%] m-auto pt-10'>
        <div className='w-[100%] border border-black lg:h-[80vh] sm:h-[90vh] '>
             <div className='w-[100%] flex '>
                <div className='w-[30%] lg:flex md:hidden sm:hidden'>
                    <div className='w-[70%]'>
                    <div className='p-10'>
                    <h1>Edit profile</h1> <br />
                    <h1>Change password</h1>
                    </div>
                    <div className='w-[70%] ml-10 pt-52'>
                        <img src={meta} alt="" />
                        <h1 className='text-[18px] text-[#0095F6]'>Accounts center</h1>
                        <p className='text-[16px] text-[#868686]'> claControl settings for connected experiences on Instagram, the Facebook app, and Messenger, including sharing stories and posts, and logging in.</p>
                    </div>
                    </div>
                    <div className='border h-[80vh]'></div>
                </div>
                <div className='lg:w-[70%] sm:w-[100%] flex '>
                         <div className=' lg:w-[14%] sm:w-[20%] lg:pt-5'>
                            <img className='w-[60px] rounded-[60px]' src={firdaws} alt="" />
                            <h1 className='text-[16px] font-[700] pt-5 '>Name</h1>
                            <h1 className='text-[16px] font-[700] pt-24  '>Username</h1>
                            <h1 className='text-[16px] font-[700] pt-16 '>Description</h1>
                            <h1 className='text-[16px] font-[700] pt-28 '>Email</h1>
                            <h1 className='text-[16px] font-[700] pt-5 '>Gender</h1>
                          
                         </div>
                         <div className='lg:w-[60%] sm:w-[80%]  pt-5'>
                            <div>
                          <h1>firdaws__1233</h1>
                          <h1 className='text-[16px] text-[#0095F6] font-[700]'>Change profile photo</h1>
                            </div>
                            <div className='pt-8'>
                                <input className='border' type="text" name="" id="" placeholder=' firdaws__1234' />
                                <p className='text-[#868686] lg:block md:hidden sm:hidden'>To help people discover your account, use the name people know you by, whether it's your full name, nickname, or business name. <br /> <br />

You can only change your name twice within a 14-day period.</p>

                            </div> 
                            <div className='pt-5'> 
                                <input className='border' type="text" name="" id="" />
                                <p className='text-[#868686] lg:block md:hidden sm:hidden'>In most cases, you will be able to change your username back to johndoe for an additional 14 days. More information</p>

                            </div>
                            <div className='pt-5'>
                                <input className='border w-[60%] py-10' type="text" name="" id=""  />
                            </div>
                             <div className='pt-5'> 
                                <input className='border w-[70%] py-1' type="text" name="" id="" placeholder='   nazarovfirdaws12341234@gamil.com' />
                             </div>
                             <div className='pt-5'> 
                                <input className='border w-[70%] py-1' type="text" name="" id="" placeholder='' />
                             </div>
                             <div className='flex gap-10 pt-5'>
                                <button className='border-[#0095F6] bg-[#0095F6] w-[20%] text-white rounded-[5px] py-2'>Send</button>
                                <button className='text-[#0095F6] font-[700]'>Temporarily deactivate my account</button>
                             </div>
                         </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Edite
