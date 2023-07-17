import React from 'react'

import logo from '../../assets/LOGO.png'
import sms from '../../assets/msg.png'
import reels from '../../assets/icons8-reels.svg'
import treds from '../../assets/trends.png'
import search from '../../assets/icons8-search-60.svg'
import add from '../../assets/add.png'
import home2 from '../../assets/home-active.png'
import like from '../../assets/likes.png'
import firdaws from '../../assets/firdaws.png'
import menu from '../../assets/icons8-menu.svg'
import storis1 from '../../assets/sroris1.png'
import storis2 from '../../assets/storis2.jpg'
import said from '../../assets/said.jpg'
import post from '../../assets/post.jpg'
import send from '../../assets/share.png'
import coments from '../../assets/Vector.png'
import save from '../../assets/save.png'
import emoji from '../../assets/emojis.png'
import posst from '../../assets/Frame.png'
import post2 from '../../assets/post2.jpg'

import setting from '../../assets/settings.png'

import  Drawer from '../../components/Drawer'
import { Link } from 'react-router-dom'

import '../../pages/profil/profil.css'

const Profil = () => {
  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[100vh]  flex   '>
                <div className='w-[20%]  ml-10  lg:flex md:block sm:hidden'>
            <div className='pt-16'>
            <img className='lg:block md:hidden sm:hidden' src={logo} alt="" />
            <div className='flex justify-start gap-5 items-center'>
              <div className='lg:block md:block sm:hidden'>
                 <img className='pt-5' src={home2} alt="" />
                 <img className='w-[25px] pt-5' src={search} alt="" />
                 <img className='pt-5' src={treds} alt="" />
                 <img className='w-[25px] pt-5' src={reels} alt="" />
                 <img className='pt-5' src={sms} alt="" />
                 <img className='pt-5' src={like} alt="" />
                 <img className='pt-5' src={add} alt="" />
                 <img className='w-[30px] rounded-[20px] mt-5' src={firdaws} alt="" />
               
              </div>
              <div className='lg:block md:hidden sm:hidden '>
                <Link to={'/main'}><h1 className='text-[16px] font-[600] pt-5'>Главная</h1></Link>
                <Drawer/>
                <h1  className='text-[16px] font-[600] pt-5'>интересное</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Reels</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Сообщения</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Уведомления</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Создать</h1>
                <h1  className='text-[16px] font-[600] mt-5'>Профиль</h1>
              </div>
            </div>
            <div className='flex gap-5 pt-52 lg:block md:hidden sm:hidden'>
              <img className='w-[30px]' src={menu} alt="" />
              <h1>Eщё</h1>
            </div>
            </div>
          <div className='border border-black h-[100vh] ml-5 lg:block md:block sm:hidden'></div>
          </div>
         
           <div className='w-[80%]'>  

          
          <div className='w-[80%] flex  items-center   justify-center h-[30vh]  '>
              <div className='w-[25%] flex'>
                <img className='w-[160px] rounded-[80px]' src={firdaws} alt="" />
              </div>
              <div className='w-[50%]'> 
              <div className='flex gap-5 items-center'>
                <h1 className='text-[20px] font-[550]'>firdaws__1234</h1>
               <Link className='w-[25%]' to={"/edit"}> <button className='border border-[black] w-[95%] h-[4vh]   rounded-[5px] bg-[#f0f0f0]'>Edit profile</button></Link>
                <img src={setting} alt="" />
              </div> <br />  <br />
              <div className='flex  gap-10'>
                <h1 className='text-[18px]'><strong>2</strong> posts</h1>
                <h1 className='text-[18px]'><strong>180</strong>  followers</h1>
                <h1 className='text-[18px]'><strong>180</strong>  following</h1>
              </div>
              </div>
              </div>
              
              <div className='w-[80%] lg:flex lg:flex-row md:hidden sm:hidden gap-10 m-auto'>
                 <div>
                  <img className='w-[120px] rounded-[60px] border-[3.5px] border-[#dad8d8]' src={firdaws} alt="" />
                    <h1 className='text-center'>me</h1>
                 </div>
                 <div>
                  <img className='w-[120px] rounded-[60px] border-[3.5px] border-[#dad8d8]' src={storis2} alt="" />
                    <h1 className='text-center'>Brat</h1>
                 </div>
                 <div>
                  <div className='border border-[#868686] w-[100%] h-[70%] rounded-[30px]  justify-center flex items-center text-[90px] text-[#868686] '>+</div>
                    <h1 className='text-center'>Добавить</h1>
                 </div>
              </div>
            <br /> 
            <div className='w-[90%] m-auto'>
           <hr />
            </div> 
            <div className='flex w-[100%] justify-center pt-2 gap-24 sm:ml-20  lg:m-auto md:m-auto '>
              <div className='flex gap-5'>
                <img className='w-[20px]' src={posst} alt="" />
                <h1 className='text-[16px]'>post</h1>
              </div>
              <div className='flex gap-5'>
                <img className='w-[20px]' src={reels} alt="" />
                <h1 className='text-[#868686]'>reels</h1>
              </div>
              <div className='flex gap-5'>
                <img className='w-[20px]' src={save} alt="" />
                <h1 className='text-[#868686]'>save</h1>
              </div>
            </div>
            <div className='w-[80%] lg:flex lg:flex-row md:flex-col gap-10 pt-5 sm:overflow-scroll sm:h-[40vh] back2 lg:overflow-hidden m-auto'>

               <img className='w-[300px]  hover:bg-[black]' src={post2} alt="" />
               <img className='w-[300px] ' src={firdaws} alt="" />
            </div>
            <div className='sm:flex  gap-10 ml-10 lg:hidden md:hidden items-center'>
                 <img className='pt-5' src={home2} alt="" />
                 <img className='w-[25px] pt-5' src={search} alt="" />
                 <img className='pt-5' src={treds} alt="" />
                 <img className='w-[25px] pt-5' src={reels} alt="" />
                 <img className='pt-5' src={sms} alt="" />
                 <img className='pt-5' src={like} alt="" />
                 <img className='pt-5' src={add} alt="" />
                 <img className='w-[30px] rounded-[20px] mt-5' src={firdaws} alt="" />
               
              </div>
              </div>
            
          </div>
   
  )
}

export default Profil
