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



import  { useRef, useState } from 'react';
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper classNames
import 'swiper/css';
import 'swiper/css/pagination';

import './styles1.css';

// import required modules
import { Pagination } from 'swiper/modules';

import './home.css'
import  Drawer from '../../components/Drawer'
import { Link } from 'react-router-dom'


const home = () => {
  return (
    <div className='bg-[#FFFFFF] w-[100%] h-[100vh] '>
      <div className='lg:flex w-[100%] md:flex  '>
          <div className='w-[20%] flex ml-10'>
            <div className='pt-16'>
            <img className='lg:block md:hidden sm:hidden'  src={logo} alt="" />
            <div className='flex justify-start gap-5 items-center'>
              <div className='lg: block md:block sm:hidden'>
                 <img className='pt-5' src={home2} alt="" />
                 <img className='w-[25px] pt-5' src={search} alt="" />
                 <img className='pt-5' src={treds} alt="" />
                 <img className='w-[25px] pt-5' src={reels} alt="" />
                 <img className='pt-5' src={sms} alt="" />
                 <img className='pt-5' src={like} alt="" />
                 <img className='pt-5' src={add} alt="" />
                 <img className='w-[30px] rounded-[20px] mt-5' src={firdaws} alt="" />
               
              </div>
              <div className='lg:block md:hidden sm:hidden'>
                <h1 className='text-[16px] font-[600] pt-5'>Главная</h1>
                <Drawer/>
                <h1  className='text-[16px] font-[600] pt-5'>интересное</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Reels</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Сообщения</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Уведомления</h1>
                <h1  className='text-[16px] font-[600] pt-5'>Создать</h1>
              <Link to={'/profil'}><h1  className='text-[16px] font-[600] mt-5'>Профиль</h1></Link>
              </div>
            </div>
            <div className=' gap-5 pt-52 lg:flex-row lg:flex md:hidden sm:hidden items-center'>
              <img className='w-[30px]' src={menu} alt="" />
              <h1>Eщё</h1>
            </div>
            </div>
          <div className='border border-black h-[100vh] ml-5 lg:block md:block sm:hidden'></div>
          </div>
          {/* 2part */}

          <div className='lg:w-[55%] md:w-[70%] sm:w-[70%]'>
             <div className='lg:w-[80%] md:w-[90%] sm:w-[150%] lg:h-[15vh] sm:h-[10vh] md:h-[10vh]'>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-[100px] border-[4px] border-[red]' src={storis1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[100px] border-[4px] border-[red]' src={storis2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[100px] border-[4px] border-[red]' src={storis2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[100px] border-[4px] border-[red]' src={storis1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[100px] border-[4px] border-[red]' src={storis2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-[100px] border-[4px] border-[red]' src={storis1} alt="" /></SwiperSlide>
       
      </Swiper>
             </div> 
             <div className='overflow-scroll h-[70vh] back lg:w-[45%] md:w-[100%] sm:w-[100%] sm:ml-20 lg:m-auto md:m-auto'>
             <div className='w-[100%] m-auto pt-10'>
             <div className='flex  items-center justify-start gap-10 w-[100%]'>
             <img className='w-[45px] rounded-[40px]' src={said} alt="" />
             <div>
             <h1 className='text-[16x] font-[650]'>_said_shukurov_•7ч</h1>
               <p className='text-[12px]'> Оригинальное аудио</p>
             </div>
             <div className='flex justify-end w-[40%]'>
              <h1 className='text-[24px] text-end '>•••</h1>
             </div>
             </div>
              <img className='pt-2' src={post} alt="" />
                  <div className='w-[100%] flex justify-between items-center'>
                  <div className='flex gap-5 pt-4'>
                    <img className='hover:bg-[red]' src={like} alt="" />
                    <img src={coments} alt="" />
                    <img src={send} alt="" />
                  </div>
                  <div className='pt-5'>
                    <img src={save} alt="" />
                  </div>
                  </div>
                 <h1 className='text-[18px] font-[700] pt-3'>9.999 likes</h1>
                 <h1> <strong>saidshukurov</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor  <span className='text-[#868686]'>more..</span></h1>
                  <h1 className='text-[#868686] pt-3'>See 99 comments</h1> <br />
                  <hr /> <br />
                  <div className='flex gap-2'>
                   <img src={emoji} alt="" />
                   <input className=' w-[90%]' type="text" name="" id=""  placeholder='  Add a comment...'/>
                   <h1 className='text-[#868686]'>Post</h1>
                  </div>
    
           
      
             <div>
            </div>
             </div>
             <div className='w-[100%] m-auto pt-10'>
             <div className='flex  items-center justify-start gap-10 w-[100%]'>
             <img className='w-[45px] rounded-[40px]' src={said} alt="" />
             <div>
             <h1 className='text-[16x] font-[650]'>_said_shukurov_•7ч</h1>
               <p className='text-[12px]'> Оригинальное аудио</p>
             </div>
             <div className='flex justify-end w-[40%]'>
              <h1 className='text-[24px] text-end '>•••</h1>
             </div>
             </div>
              <img className='pt-2' src={post} alt="" />
                  <div className='w-[100%] flex justify-between items-center'>
                  <div className='flex gap-5 pt-4'>
                    <img className='hover:bg-[red]' src={like} alt="" />
                    <img src={coments} alt="" />
                    <img src={send} alt="" />
                  </div>
                  <div className='pt-5'>
                    <img src={save} alt="" />
                  </div>
                  </div>
                 <h1 className='text-[18px] font-[700] pt-3'>9.999 likes</h1>
                 <h1> <strong>saidshukurov</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor  <span className='text-[#868686]'>more..</span></h1>
                  <h1 className='text-[#868686] pt-3'>See 99 comments</h1> <br />
                  <hr /> <br />
                  <div className='flex gap-2'>
                   <img src={emoji} alt="" />
                   <input className=' w-[90%]' type="text" name="" id=""  placeholder='  Add a comment...'/>
                   <h1 className='text-[#868686]'>Post</h1>
                  </div>
    
           
      
             <div>
            </div>
             </div>

             </div>
             <div className='sm:flex sm:justify-start sm:flex-row gap-10 items-center sm:w-[30%]  lg:hidden md:hidden '>
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
             <div className=' w-[30%] h-[30vh] pt-20  lg:block sm:hidden md:hidden'>
              <div className='flex items-center gap-5 justify-start'>
                         <img className='w-[80px] rounded-[40px]' src={firdaws} alt="" />
                         <div>
                            <h1 className='text-[14px] font-[700]'>firdaws__1234</h1>
                            <p className='text-[#868686]'>Nazarov</p>
                         </div>
                         <button className='text-[#0062A2] font-[700] text-[16px]'>Переключиться</button>
              </div>
             <div className='flex justify-between w-[90%] pt-5 '>
              <h1 className='text-[18px] text-[#868686]'>Рекомендации для вас</h1>
              <p className='text-[14px] font-[700]'>Все</p>
             </div>  
             <div className='w-[25%] flex justify-between items-center gap-10 pt-10'>
              <img className='w-[50px] rounded-[30px]' src={storis1} alt="" />
              <div>
                <h1 className='text-[16px] font-[700]'>sadiev2ooo</h1>
                <p className='text-[#868686] text-[12px]'>Подписаны:safarov__008 </p>
              </div>
                <button className='text-[#0062A2] font-[700] text-[16px]'>Подписаться</button>
             </div>
             <div className='w-[25%] flex justify-between items-center gap-10 pt-5'>
              <img className='w-[50px] rounded-[30px]' src={storis2} alt="" />
              <div>
                <h1 className='text-[16px] font-[700]'>emom_chik.o01</h1>
                <p className='text-[#868686] text-[10px]'>Рекомендации для вас </p>
              </div>
                <button className='text-[#0062A2] font-[700] text-[16px]'>Подписаться</button>
             </div>
             <div className='w-[25%] flex justify-between items-center gap-10 pt-5'>
              <img className='w-[50px] rounded-[30px]' src={firdaws} alt="" />
              <div>
                <h1 className='text-[16px] font-[700]'>ubaydullo_lutfuloev</h1>
                <p className='text-[#868686] text-[10px]'>Рекомендации для вас </p>
              </div>
                <button className='text-[#0062A2] font-[700] text-[16px]'>Подписаться</button>
             </div>
             <div className='w-[25%] flex justify-between items-center gap-10 pt-5'>
              <img className='w-[50px] rounded-[30px]' src={said} alt="" />
              <div>
                <h1 className='text-[16px] font-[700]'>isfand.20_03</h1>
                <p className='text-[#868686] text-[10px]'>Рекомендации для вас   </p>
              </div>
                <button className='text-[#0062A2] font-[700] text-[16px]'>Подписаться</button>
             </div>
             
             </div>
      </div>
    </div>
  )
}

export default home
