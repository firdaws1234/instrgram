import React from 'react'

import img1 from '../../assets/frames.png'
import logo from '../../assets/LOGO.png'
import line from '../../assets/separator.png'
import google from '../../assets/continue with google.png'
import app from '../../assets/links.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[100vh]'>
      <div className='w-[100%] lg:flex lg:flex-row md:flex-col sm:flex-col justify-center'>
            <div className='w-[25%] m-auto pt-24  lg:block md:hidden sm:hidden '>
               <img src={img1} alt="" />
            </div>
            <div className='lg:w-[45%] md:w-[40%] sm:w-[50%] m-auto pt-44'>
                   <div>
                    <img src={logo} alt="" />
                    
                       <input className='border bg-[#DBDBDB] lg:w-[40%] md:w-[100%] sm:w-[100%] h-[5vh] border-black text-black'  type="text" name="" id="" placeholder='Username, or mail'  /> <br /> <br />
                       <input className='border bg-[#DBDBDB] lg:w-[40%]  md:w-[100%] sm:w-[100%] h-[5vh] border-black text-black'  type="password" name="" id="" placeholder='Password'  /> <br /> <br />
                      <Link to={"/main"}> <button className='border bg-[#0095F6] lg:w-[40%]  md:w-[100%] sm:w-[100%] h-[5vh] border-white text-white'>Log in</button></Link>
                        <img src={line} alt="" />
                        <img src={google} alt="" /> <br />
                        <h1 className='text-[#0095F6] '>You forgot the password?</h1> <br /> 
                        <h1>Download the application.</h1>
                        <img src={app} alt="" />
                   </div>
            </div>
      </div>
    </div>
  )
}

export default Main
