import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../components/category/Category";
import WebsiteDetails from "../components/extraSection/WebsiteDetails";
import "./style.css";

export default function Home() {
  const buttons = (
    <>
      <Link to="/all">
        <button className="border-violet-500 border-2 rounded-lg m-3 p-3 hover:border-slate-300 lg:text-xl text-sm hover:text-violet-500 ">
          Read More
        </button>
      </Link>
    </>
  );

  const ratings = (
    <>
      <div className="flex  mt-1.5 gap-1">
        <div className="flex gap-1 items-center text-yellow-300">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="relative h-full py-2 rounded-lg ">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
          modules={[Pagination]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide>
            <img
              className=" rounded-l-lg"
              src="https://i.ibb.co/XScvv3S/horror1.png"
            />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full rounded-bl-lg text-slate-300 ">
              <div>
                <p className=" font-semibold text-3xl">Ethel Cain</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/F0L0Yzs/horor2.png" alt="" />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
              <div>
                <p className=" font-semibold text-3xl">The Chalkm</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/VND3wv6/comic1.png" alt="" />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
              <div>
                <p className=" font-semibold text-3xl">The Batman</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/NKy6r9Y/history1.png" alt="" />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
              <div>
                <p className=" font-semibold text-3xl">Murakami</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/BKg6xfY/history2.png" alt="" />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
              <div>
                <p className=" font-semibold text-3xl">Cannibalism</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/QDBKQsy/fiction1.png" alt="" />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full  text-slate-300">
              <div>
                <p className=" font-semibold text-3xl">Song of A.</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/3Y1ntxZ/tech1.png" alt="" />
            <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full rounded-br-lg text-slate-300">
              <div>
                <p className=" font-semibold text-3xl">Photonics</p>
                {ratings}
              </div>
              {buttons}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-6 text-teal-900">
          Welcome to Library Management
        </h1>
        <p className="text-xl mb-8 text-teal-950">
          Manage your books and track borrows efficiently
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/books"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Enter the Library
          </Link>
        </div>
      </div>
      <WebsiteDetails />
      <Category />
    </>
  );
}
